import React from 'react'
import './login.scss';

const Login = () => {
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello, World!</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <spam>Don't you have an account?</spam>
            <button>Register</button>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button> Login </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login