import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Redux-Router/ReduxRouter";


const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
