import "./App.css";
import router from "./Redux-Router/ReduxRouter";
import { useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";


const App = () => {

    const UserSelector = useSelector((state:any) => state.User)
    console.log('UserSelector', UserSelector)
      
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
