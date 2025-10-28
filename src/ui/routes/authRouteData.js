import { lazy } from "react";



const Onboard = lazy(() => import("../pages/shared/onboard"));
const Login = lazy(() => import("../pages/shared/login"));
const Signup = lazy(() => import("../pages/shared/signup"));

export const authRoutes= [
  {
    path: "/",
    element: Onboard,
    hasLayout: true,
  },
  {
    path: "/login",
    element: Login,
    hasLayout: true,
  },
  {
    path: "/signup",
    element: Signup,
    hasLayout: true,
  },

];
