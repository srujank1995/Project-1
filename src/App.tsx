import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Redux-Router/ReduxRouter";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const App = () => {

    const UserData = useSelector((state:any) => state.User)
    console.log('userState', UserData)

    const LoginUser = async (UsrDetails:any) => {
        const UserData = JSON.stringify(UsrDetails)
        const UserRes = await fetch("http://localhost:3001/login",{
          method: 'POST',
          headers: {
            "Content-Type" : "application/json",
          },
          body:UserData
        })
        console.log (await UserRes.json())
      };
        
  useEffect( () => {
      LoginUser({
        email: "user3@h.com",
        password: "Pass@123"
        
      })
  },[])

  console.log("Loginuser", LoginUser)
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
