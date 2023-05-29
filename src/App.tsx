import { RouterProvider ,createBrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponents from './Main-Component/Main-Components';
import Dasboard from './Components/Dasboard/Dasboard';
import DoctorSection from './Components/Doctor/DoctorSection';
import Patient from './Components/Patient/Patient';
import Aboutus from './Components/Aboutus/Aboutus';



const  App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<MainComponents/>,
      children:[
        {
          path:'/Dashboard',
          element:<Dasboard/>
        },
        {
          path:'/Doctor',
           element:<DoctorSection/>
        },
        {
          path:'/Patient',
          element:<Patient/>
        },
        {
          path:'/About',
          element:<Aboutus/>
        }
      ]
    },
  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
