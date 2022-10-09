import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/aign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div>
      {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
      <div className='authentication-conatiner'>
        <SignInForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default Authentication;
