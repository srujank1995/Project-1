import React, { useState } from "react";
import { LoginUser } from "../../mainStore/UserStore/User.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  onSubmit?: (email: string, password: string) => {};
};

const Login: React.FC<LoginForm> = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   emailvalidate(email);
  //   passwordvalidate(password);

  //   const userparam = {
  //     email,
  //     password,
  //   };
  //   dispatch(LoginUser(userparam, navigate));
   
  //   if (!emailErr && !passErr && onSubmit) {
  //    onSubmit(email, password)
  //   }
  // };

  // const emailvalidate = (value: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!value) {
  //     setEmailErr("Email is required");
  //   } else if (!emailRegex.test(value)) {
  //     setEmailErr("Invalid Email");
  //   } else {
  //     setEmailErr("");
  //   }
  // };

  // const passwordvalidate = (value: string) => {
  //   if (!value) {
  //     setPassErr("Password Required");
  //   } else if (value.length < 6) {
  //     setPassErr("Password should be atleast more than 6 letter");
  //   } else {
  //     setPassErr("");
  //   }
  // };

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Perform login logic here
    console.log(email, password)
    const userInfo = {
      email,
      password
    };
    dispatch(
        LoginUser(userInfo,navigate)
      );
  };
  return (
    <div className=" bg-blue-300 flex min-h-fit flex-1 flex-col justify-center px-4 py-10 lg:px-8">
      <table >
        <thead>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="bg-blue-400 h-screen flex flex-col justify-center items-center">
                <span>
                  <img className="w-64 h-auto rounded-full mb-4"
                    src="https://as2.ftcdn.net/v2/jpg/02/67/73/59/1000_F_267735982_bVaJnLumRzMBp7uRwK41RkewLKMhosbG.jpg"
                    alt=""
                  />
                </span>
                <h1 className="text-4xl font-bold text-white my-4">
                  Welcome to Medical Care
                </h1>
                <p className="text-xl text-white text-center max-w-md">
                  At Medical Care, we are dedicated to providing exceptional
                  healthcare services to our patients. Our team of experienced
                  doctors and nurses is committed to delivering high-quality
                  medical care with compassion and professionalism.
                </p>
              </div>
            </td>
            <td>
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        required
                        onChange={handleEmailChange}
                        // onBlur={(e) => {
                        //   handleEmailChange(e.target.value);
                        // }}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {emailErr && (
                        <div className="text-red-800 text-lg font-bold mt-1">
                          {emailErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Password
                      </label>
                      <div className="text-sm">
                        <a
                          href="/home"
                          className="font-bold text-lg text-red-700 hover:text-red-800"
                        >
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        // onBlur={(e) => {
                        //   handlePasswordChange(e.target.value);
                        // }}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {passErr && (
                        <div className="text-red-800 text-lg font-bold mt-1">
                          {passErr}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md
                  bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6
                    text-white shadow-sm hover:bg-red-900 focus-visible:outline 
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Login;
