import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { Link } from 'react-router-dom';
import './login.scss';

const Login = () => {
  
  const { login } = useContext(AuthContext);

  const handleLogin = () =>{
    login();
  };
  return (
    <div className='login'>
      <div className='card'>
        <div className='left'>
          <h1>Hello, World!</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <spam>Don't you have an account?</spam>
            <Link to='/register'>
            <button>Register</button>
            </Link>
        </div>
        <div className='right'>
          <h1>Login</h1>
          <form>
            <input type='text' placeholder='username' />
            <input type='password' placeholder='password' />
            <button onClick={handleLogin}> Login </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login