import { createBrowserRouter } from "react-router-dom";
import SignUp from "../Components/SignUp";
import LogIn from "../Components/LogIn";
 
const routers = createBrowserRouter([
  {
    path: "/",
    element: <SignUp  />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

export default routers;
