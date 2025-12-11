import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../../feature/welcome";
import WelcomeLayouts from "../../components/layouts/welcomeLayouts";
import LoginPage from "../../feature/auth/pages/login";
import OwnerLayout from "../../components/layouts/ownerLayout";
import DashboardOwner from "../../feature/owner/pages/dashboardOwner";
import RegisterPage from "../../feature/auth/pages/register";

const router = createBrowserRouter([
    {
        element: <WelcomeLayouts />,
        children: [
            {path: "/", element: <WelcomePage />},
        ]
    },
    { path: "/login", element: <LoginPage/> },
    { path: "/register", element: <RegisterPage/>},
    {
        element: <OwnerLayout/>,
        children: [
            {path: "/owner", element: <DashboardOwner/>}
        ]
    }
    // {
    //     path: "/owner",
    //     element: <AdminLayouts />,
    //     children: [
    //         {path: "/owner"}
    //     ]
    // }
])

export default router;