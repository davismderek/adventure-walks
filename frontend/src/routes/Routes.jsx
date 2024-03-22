import { useAuth } from "../AuthContext";
import Error from "../pages/Error";
import Home from "./Home";
import Login, { action as loginAction } from "./Login";
import Register, { action as registerAction } from "./Register";
import ProtectedLayout from "../pages/ProtectedLayout";
import UserHome from "./UserHome";
import Letters from "./ABCs";
import Colors from "./Colors";
import Animals from "./Animals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Logout, { loader as logoutLoader } from "./Logout";
import Account, { loader as accountLoader } from "./Account";
import Numbers from "./Numbers";

const Routes = () => {
    const { isAuth } = useAuth();

    const publicRoutes = [
        {
            errorElement: <Error />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                    action: loginAction,
                },
                {
                    path: "/register",
                    element: <Register />,
                    action: registerAction,
                },
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/logout",
                    element: <Logout />,
                    loader: logoutLoader,
                },
            ],
        },
    ];

    const protectedRoutes = [
        {
            element: <ProtectedLayout />,
            children: [
                {
                    path: "/userhome",
                    element: <UserHome />,
                },
                {
                    path: "/abc",
                    element: <Letters />,
                },
                {
                    path: "/colors",
                    element: <Colors />,
                },
                {
                    path: "/animals",
                    element: <Animals />,
                },
                {
                    path: "/numbers",
                    element: <Numbers />,
                },
                {
                    path: "/account",
                    element: <Account />,
                    loader: accountLoader,
                },
            ],
        },
    ];

    const router = createBrowserRouter([
        ...publicRoutes,
        ...(!isAuth ? protectedRoutes : []),
        ...protectedRoutes,
    ]);

    // const router = createBrowserRouter([
    //     ...publicRoutes,
    //     ...Error(!isAuth ? protectedRoutes : []),
    //     ...protectedRoutes,
    // ]);

    return <RouterProvider router={router} />;
};

export default Routes;
