import { Navigate } from "react-router-dom";
import { SaveUser } from "./User.store";

export const LoginUser = async (UsrDetails: any) => {
  return async (dispatch: any) => {
    const UserDataPayload = JSON.stringify(UsrDetails);
    const UserRes: any = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: UserDataPayload,
    }).catch((err) => {
      console.log("Server Err:", err);
    });

    if (UserRes) {
      const { userData, status, msg } = await UserRes.json();

      if (status === 200) {
        dispatch(SaveUser({ userData }));
        console.log("userData", userData.userData);
        {
          userData.type && <Navigate to='/Doctor' replace={true} />;
        }
      } else {
        console.log("Response Error:", msg);
      }
    }
  };
};
