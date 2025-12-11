import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../../feature/welcome";

const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomePage />
    }
])

export default router;