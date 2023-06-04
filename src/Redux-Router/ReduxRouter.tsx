import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Components/Aboutus/Aboutus";
import DoctorSection from "../Components/Doctor/DoctorSection";
import Home from "../Components/Home/Home";
import Patient from "../Components/Patient/Patient";
import MainComponents from "../Main-Component/Main-Components";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainComponents/>,  
      children:[
        {
          path: "/Home",
          element: <Home/>,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Doctor",
          element: <DoctorSection />,
        },
        {
          path: "/Patient",
          element: <Patient />,
        },     
        {
          path: "/About",
          element: <Aboutus />,
        }, 
      ] 
    },
        
  ]);
  export default router;
