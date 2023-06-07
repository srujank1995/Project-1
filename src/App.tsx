import "./App.css";
import router from "./Redux-Router/ReduxRouter";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";


const App = () => {

    const {userData} = useSelector((state:any) => state.User)
    console.log('UserSelector', userData)
      
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
