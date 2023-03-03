import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Topbar from "./components/topbar/Topbar";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import React from "react";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeAPI";
import { AuthContext } from "./context/authAPI";

function App() {
  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);

  // console.log(darkMode);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Topbar/>
        <div style={{display: "flex"}}>
          <Leftbar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <Rightbar/>
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/login"/>
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<ProtectedRoute><Layout/></ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
