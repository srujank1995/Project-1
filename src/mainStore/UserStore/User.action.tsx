import { SaveUser } from "./User.store";

export const LoginUser = async (UsrDetails: any, navigate:any) => {
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
        if (userData.type === 'user'){
          navigate('/user')
        }else if(userData.type === 'admin'){
          navigate('/admin')
        }else if (userData.type ==='doctor'){
          navigate('/doctor')
        }else{
          navigate('/')
        }

      } else {
        console.log("Response Error:", msg);
      }
    }
  };
};
