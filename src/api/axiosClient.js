import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://picsum.photos/v2/list',
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.response.use(response => {
  if (response && response.data) {
    return response.data;
  }
  return response;
});

export default axiosClient;
