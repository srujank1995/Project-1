import "./App.css";
import router from "./Redux-Router/ReduxRouter";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { LoginUser } from "./mainStore/UserStore/User.action";
import { RouterProvider } from "react-router-dom";


const App = () => {

    const dispatch:any = useDispatch();
    const UserSelector = useSelector((state:any) => state.User)
    console.log('UserSelector', UserSelector)

    useEffect( () => {
      (
        LoginUser({
        email:'user2@h.com',
        password:'Pass@123',
      }))
    }, [])
      
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
