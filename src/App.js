import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';
import './style.scss'
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import Profile from './pages/profile/Profile';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Leftbar from './components/leftbar/Leftbar';
import { AuthContext } from './context/authContext';

function App() {
  
  // fake functionality for, if user is not logged in then it will redirect automaticaly to login/register page.
  const { currentUser } = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode)

  const Layout = () =>{
    return ( 
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <Navbar />
          <div style={{display: "flex"}} >
          <Leftbar />
          <div style={{ flex: 6 }} >
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );   
  };

  const ProtectedRoute = ({ children}) => {
    if(!currentUser)
    {
      return <Link to='/login/' />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
            <ProtectedRoute/>
                  <Layout /> 
                <ProtectedRoute/>
        </>
              ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ])

  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
