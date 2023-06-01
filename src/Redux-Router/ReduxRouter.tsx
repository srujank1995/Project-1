import { createBrowserRouter } from "react-router-dom";
import Aboutus from "../Components/Aboutus/Aboutus";
import Dasboard from "../Components/Dasboard/Dasboard";
import DoctorSection from "../Components/Doctor/DoctorSection";
import Home from "../Components/Home/Home";
import Patient from "../Components/Patient/Patient";
import MainComponents from "../Main-Component/Main-Components";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainComponents />,
    },
    { 
      path:'/admin',
      element: <Home/>,
      children: [
        {
          path: "/admin/Home",
          element: <Home/>,
        },
        {
          path: "/admin/Dashboard",
          element: <Dasboard />,
        },
        {
          path: "/admin/Doctor",
          element: <DoctorSection />,
        },
        {
          path: "/admin/Patient",
          element: <Patient />,
        },
        
      ],
    },
    {
      path: "/About",
      element: <Aboutus />,
    },
  ]);
  export default router;
