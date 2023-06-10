import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Components/About us/Aboutus";
import DoctorSection from "../Components/Doctor/DoctorSection";
import Patient from "../Components/Patient/Patient";
import MainComponents from "../Main-Component/Main-Components";
import Login from "../Components/Login/Login";
import PatProfile from "../Components/Patient/PatProfile/PatProfile";
import PatBookAppointment from "../Components/Patient/PatBookApointment/PatBookAppointment";
import PatSetAppointment from "../Components/Patient/PatSetAppointment/PatSetAppointment";
import DocProfile from "../Components/Doctor/Profile/DocProfile";
import DocBookApointment from "../Components/Doctor/BookAppointment/DocBookApointment";
import DocSetAppointment from "../Components/Doctor/SetAppointment/DocSetApointment";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,  
    },     
    {
      path: "/About",
      element: <Aboutus />,
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
          path:'/admin/patient',
          element:<Patient/>,
        },
        ]
      },
     {
      path :'/user',
      element: <MainComponents/>,
      children:[
        {
          path:'/user/profile',
          element:<PatProfile/>,
        },
        {
          path:'/user/bookappointment',
          element:<PatBookAppointment/>,
        },
        {
          path:'/user/setappointment',
          element:<PatSetAppointment/>,
        },
      ]
     },
     {
      path :'/Doctor',
      element: <MainComponents/>,
      children:[
        {
          path:'/Doctor/profile',
          element:<DocProfile/>,
        },
        {
          path:'/Doctor/bookappointment',
          element:<DocBookApointment/>,
        },
        {
          path:'/Doctor/setappointment',
          element:<DocSetAppointment/>,
        },
      ]
     },
    
        
  ]);
  export default router;
