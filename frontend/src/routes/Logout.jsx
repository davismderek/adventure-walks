import { Navigate, useLoaderData } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const loader = async () => {
    const url = "http://localhost:8000/logout/";
    const access_token = localStorage.getItem("access_token");

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
    });
    const statusCode = response.status;
    return statusCode === 200 ? true : false;
};

const Logout = () => {
    const response = useLoaderData();
    const { setIsAuth } = useAuth();
    console.log("response:", response);
    if (response) {
        localStorage.clear();
        setIsAuth(false);
        return <Navigate to="/login" />;
    } else {
        alert("PROBLEM LOGGING OUT");
        return <Navigate to="/userhome" />;
    }
};
export default Logout;

// Sean said this removes the console error, but then I get an error page with this code??

// import { useLoaderData, useNavigate } from "react-router-dom";
// import { useAuth } from "../AuthContext";
// import { useEffect } from "react";

// export const loader = async () => {
//     const url = "http://localhost:8000/logout/";
//     const access_token = localStorage.getItem("access_token");
//     const refresh_token = localStorage.getItem("refresh_token");

//     const response = await fetch(url, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             Authorizaion: `Bearer ${access_token}`,
//         },
//         body: JSON.stringify({ refresh_token }),
//     });
//     const statusCode = response.status;
//     return statusCode === 200 ? true : false;
// };

// const Logout = () => {
//     const response = useLoaderData();
//     const navigate = useNavigate();
//     const { setIsAuth } = useAuth();

//     let logged_in = true;

//     console.log("response:", response);
//     if (response) {
//         localStorage.clear();
//         logged_in = false;
//         // setIsAuth(false);
//         // return <Navigate to="/login" />;
//     } else {
//         alert("PROBLEM LOGGING OUT");
//         // return <Navigate to="/userhome" />;
//     }

//     useEffect(() => {
//         setIsAuth(logged_in);
//         return navigate(`/login`);
//     }, [setIsAuth, logged_in, response, navigate]);
// };
// export default Logout;
