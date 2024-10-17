import { createBrowserRouter } from "react-router-dom"
import { lazy } from "react"
import { ErrorFallback } from "@/config/error"
import Paths from "./Paths"

const Login = lazy(() => import("@/pages/login/Login"))

const Router = createBrowserRouter([
  {
    path: Paths.DEFAULT,
    element: <Login />,
    errorElement: <ErrorFallback />,
  },
  {
    path: Paths.LOGIN,
    element: <Login />,
    errorElement: <ErrorFallback />,
  },
])

export default Router
