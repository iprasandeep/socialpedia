import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Rightbar from './components/rightbar/Rightbar';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


function App() {

  const Layout = () =>{
    return (
      <div>
        <Navbar />
        <div className={{display: "flex"}} >
        </div>
        <Outlet />
        <Rightbar />
      </div>
    )
  }

  const router = createBrowserRouter([
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
