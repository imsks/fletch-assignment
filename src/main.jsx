import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Screen1 from "./Pages/screen1"
import Screen2 from "./Pages/screen2"
import { createBrowserRouter, RouterProvider } from "react-router"

let router = createBrowserRouter([
    {
        path: "/",
        Component: Screen1
    },
    {
        path: "/loan",
        Component: Screen2
    }
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
