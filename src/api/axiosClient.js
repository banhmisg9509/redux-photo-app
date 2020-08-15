import axios from 'axios';
import firebase from 'firebase/app';

const axiosClient = axios.create({
  baseURL: 'https://picsum.photos/v2/list',
  headers: {
    'Content-Type': 'application/json'
  }
});

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken();

  // Not logged in
  const hasRememberedAccount = localStorage.getItem('firebaseui::rememberedAccounts');
  if (!hasRememberedAccount) return null;

  // Logged in but the current user is not available yet -> wait(10s)
  return new Promise((resolve, reject) => {
    let unregisterAuthObserver;
    const timeout = setTimeout(() => {
      reject();
      if (typeof unregisterAuthObserver === 'function') unregisterAuthObserver()
    }, 10000);

    unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return reject(null);
      }

      const token = await user.getIdToken();
      resolve(token);

      unregisterAuthObserver();
      clearTimeout(timeout);
    });
  })
}


axiosClient.interceptors.response.use(response => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

axiosClient.interceptors.request.use(async config => {

  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosClient;
