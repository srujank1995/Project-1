import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Components/Aboutus/Aboutus";
import DoctorSection from "../Components/Doctor/DoctorSection";
import Home from "../Components/Home/Home";
import Patient from "../Components/Patient/Patient";
import MainComponents from "../Main-Component/Main-Components";
import Login from "../Components/Login/Login";
import DocProfile from "../Components/Doctor/Profile/DocProfile";
import DocBookApointment from "../Components/Doctor/BookAppointment/DocBookApointment";
import DocSetAppointment from "../Components/Doctor/SetAppointment/DocSetApointment";
import PatBookAppointment from "../Components/Patient/PatBookApointment/PatBookAppointment";
import PatSetAppointment from "../Components/Patient/PatSetAppointment/PatSetAppointment";
import PatProfile from "../Components/Patient/PatProfile/PatProfile";

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
          path: "/About",
          element: <Aboutus />,
        }, 
      ] 
    },
    {   
        path: '/admin',
        element: <MainComponents/>,
        children:[
        {
          path:'/admin/Doctor',
          element:<DoctorSection/>,
        },
        {
          path:'/admin/profile',
          element:<DocProfile/>,
        },
        {
          path:'/admin/bookappointment',
          element:<DocBookApointment/>,
        },
        {
          path:'/admin/setapointment',
          element:<DocSetAppointment/>,
        },
        ]
      },
      {   
        path: '/user',
        element: <MainComponents/>,
        children:[
        {
          path:'/user/patient',
          element:<Patient/>,
        },
        {
          path:'/user/profile',
          element:<PatProfile/>,
        },
        {
          path:'/user/bookappointment',
          element:<PatBookAppointment/>,
        },
        {
          path:'/user/setapointment',
          element:<PatSetAppointment/>,
        },
        ]
      }
    
        
  ]);
  export default router;
