import { Form, Navigate, useActionData, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const registerData = { email, password };

    // const url = "http://localhost:8000/register";
    try {
        const url = `${import.meta.env.VITE_SOURCE_URL}/register`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(registerData),
        });

        const statusCode = response.status;
        const data = await response.json();

        // const { access_token } = data;
        const access_token = data.session.access_token;

        localStorage.clear();
        localStorage.setItem("access_token", access_token);
        return statusCode === 200 ? true : false;
    } catch (error) {
        console.log("ERROR:", error);
        return false;
    }
}

const Register = () => {
    const { isAuth, setIsAuth } = useAuth();
    const response = useActionData();

    useEffect(() => {
        setIsAuth(response);
    }, [response, setIsAuth]);
    return !isAuth ? (
        <Form method="POST">
            <h1>Create Account</h1>

            <label>
                Enter Email Address
                <input type="text" name="email" />
            </label>
            <label>
                Create a Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Submit</button>
            <p>
                If you already have an account,
                <Link to="/login"> click here</Link> to login.
            </p>
        </Form>
    ) : (
        <Navigate to="/userhome" />
    );
};

export default Register;

// import { Form, redirect, Link } from "react-router-dom";

// export async function action({ request }) {
//     const formData = await request.formData();
//     const email = formData.get("email");
//     const password = formData.get("password");
//     const data = { email, password };

//     // const url = "http://localhost:8000/register";
//     const url = `${import.meta.env.VITE_SOURCE_URL}/register`;
//     const addUser = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     }).then((response) => response.json());

//     return redirect("/userhome");
// }

// const Register = () => {
//     return (
//         <Form method="POST">
//             <h1>Create Account</h1>

//             <label>
//                 Enter Email Address
//                 <input type="text" name="email" />
//             </label>
//             <label>
//                 Create a Password
//                 <input type="password" name="password" />
//             </label>
//             <button type="submit">Submit</button>
//             <p>
//                 If you already have an account,
//                 <Link to="/login"> click here</Link> to login.
//             </p>
//         </Form>
//     );
// };

// export default Register;
