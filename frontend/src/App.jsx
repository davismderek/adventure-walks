// import { Routes } from "react-router";
import Routes from "./routes/Routes";
import { AuthProvider } from "./AuthContext";

function App() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    );
}

export default App;

// Below code has bassically been moved to the Routes route
//  for protected/public routing and authentification purposes

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./routes/Home";
// import Register, { action as registerAction } from "./routes/Register";
// import Letters from "./routes/ABCs";
// import Login, { action as loginAction } from "./routes/Login";
// import UserHome from "./routes/UserHome";
// import Animals from "./routes/Animals";
// import ProtectedLayout from "./pages/ProtectedLayout";

// const router = createBrowserRouter([
//     {
//         path: "/login",
//         element: <Login />,
//         action: loginAction,
//     },
//     {
//         path: "/register",
//         element: <Register />,
//         action: registerAction,
//     },
//     {
//         path: "/",
//         element: <Home />,
//     },

//     {
//         element: <ProtectedLayout />,
//         children: [
//             {
//                 path: "/userhome",
//                 element: <UserHome />,
//             },
//             {
//                 path: "/abc",
//                 element: <Letters />,
//             },
//             {
//                 path: "/animals",
//                 element: <Animals />,
//             },
//         ],
//     },
// ]);

// function App() {
//     return <RouterProvider router={router} />;
// }

// export default App;
