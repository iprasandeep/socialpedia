import React from 'react'
import './register.scss';
import { Link }  from 'react-router-dom';
const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='left'>
          <h1>Social Pedia!</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <spam>Don you have an account?</spam>
            <Link to='/login'>
            <button>Login</button>
            </Link>
        </div>
        <div className='right'>
          <h1>Register</h1>
          <form>
            <input type='text' placeholder='username' />
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='text' placeholder='Name' />
            <button> Register </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register