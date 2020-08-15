import { auth } from 'firebase/app';
import 'firebase/auth';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Button } from 'reactstrap';


// Configure FirebaseUI.
const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/photos',
  signInOptions: [auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignIn(props) {
  return (
    <div>
      <div className='text-center'>
        <h2>Login Form</h2>
        <p>or login with social account</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={auth()}
        />
        <Button onClick={() => auth().signOut()}>Sign-out</Button>
      </div>
    </div>
  );
}

SignIn.propTypes = {};

export default SignIn;
