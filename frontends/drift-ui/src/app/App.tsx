import "@/config/i18n/i18n"
import { Router } from "@/router"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App
