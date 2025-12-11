import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../../feature/welcome";
import WelcomeLayouts from "../../components/layouts/welcomeLayouts";
import LoginPage from "../../feature/auth/pages/login";
import OwnerLayout from "../../components/layouts/ownerLayout";
import DashboardOwner from "../../feature/owner/pages/dashboardOwner";
import RegisterPage from "../../feature/auth/pages/register";
import TenantLayout from "../../components/layouts/tenantLayout";
import DashboardTenant from "../../feature/tenant/pages/dashboardTenant";
import ProtectedRoute from "../../feature/auth/components/protectedRoute";

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
        element: <ProtectedRoute role="Tenant" />,
        children: [
            {
                element: <TenantLayout />,
                children: [
                    { path: "/tenant", element: <DashboardTenant /> }
                ]
            }
        ]
    },
    {
        element: <ProtectedRoute role="Property Owner" />,
        children: [
            {
                element: <OwnerLayout />,
                children: [
                    { path: "/owner", element: <DashboardOwner /> }
                ]
            }
        ]
    },
])

export default router;