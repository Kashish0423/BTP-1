import React from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  return (
    <div className='LoginBody'>
      <div class='container'>
        <form action='#'>
          <div class='title'>Login</div>
          <div class='login-login-input-box underline'>
            <input type='text' placeholder='Enter Your Email' required />
            <div class='underline'></div>
          </div>
          <div class='login-input-box'>
            <input type='password' placeholder='Enter Your Password' required />
            <div class='underline'></div>
          </div>
          <div class='login-input-box button'>
            <input type='submit' name='' value='Continue' />
          </div>
        </form>
        <div class='option'>or Connect With Social Media</div>
        <div class='twitter'>
          <a href='/'>
            <i class='fab fa-twitter'></i>Sign in With Twitter
          </a>
        </div>
        <div class='facebook'>
          <a href='/'>
            <i class='fab fa-facebook-f'></i>Sign in With Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
