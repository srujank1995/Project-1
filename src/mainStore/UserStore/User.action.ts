import { SaveUser } from "./User.store";

export const LoginUser = async (UsrDetails: any) => {

  return async (dispatch: any) => {
    const UserDataPayload = JSON.stringify(UsrDetails);
    const UserRes = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: UserDataPayload,
    }).catch((err) =>{
          console.log("err", err)
    });

    if (UserRes) {
      const { userData, status } = await UserRes.json();
        console.log("userData" , userData)
      if (status === 200) {
        dispatch(SaveUser({ userData }));
          console.log('after dispatch',userData)
      } else {
        console.log("Response Error:", userData);
      }
    }
  };
};
