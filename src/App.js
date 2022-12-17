import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';

import Profile from './pages/profile/Profile';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Leftbar from './components/leftbar/Leftbar';

function App() {
  
  // fake functionality for, if user is not logged in then it will redirect automaticaly to login/register page.

  const Layout = () =>{
    return (
      <div>
        <Navbar />
        <div className={{display: "flex"}} >
        </div>
        <Outlet />
        <Leftbar />
        <Rightbar />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
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
