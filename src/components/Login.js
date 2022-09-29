import { IoIosPerson } from 'react-icons/io';
import { useState } from 'react';
import Account from './Account';
import SignIn from './SignIn';

import '../../src/styles/LoginButton.scss';

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isPressed, setIsPressed] = useState(false);

  /* this will be my ID location to upload an account popup*/
  let id = 0;
  let buttonClass = 'buttonClass';
  let SignInClass = 'SignIn';
  let AccountClass = 'Account';

  if (isPressed) {
    buttonClass += ' expanded';
  }
  if (isPressed && isLoggedIn) {
    AccountClass += ' expanded';
  }
  if (isPressed && !isLoggedIn) {
    SignInClass += ' expanded';
  }

  return (
    <>
      <IoIosPerson
        className={buttonClass}
        onClick={() => {
          setIsPressed(!isPressed);
        }}
      />
      <SignIn className={SignInClass} />
      <Account className={AccountClass} id={id} />
    </>
  );
}
