import { Form, Link, useActionData, Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useEffect } from "react";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const loginData = { email, password };

    try {
        const url = `${import.meta.env.VITE_SOURCE_URL}/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });
        console.log("response:", response);

        const statusCode = response.status;
        const data = await response.json();
        console.log("Data:", data);

        // const { data } = await response.json();
        // const { session, user} = data;
        const access_token = data.session.access_token;
        const user_id = data.user.id;
        localStorage.clear();
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("user_id", user_id);
        return statusCode === 200 ? true : false;
        // return redirect("/userhome");
    } catch (error) {
        console.log("ERROR:", error);
        return false;
    }
};

const Login = () => {
    const { isAuth, setIsAuth } = useAuth();
    const response = useActionData();
    

    useEffect(() => {
        setIsAuth(response);
    }, [response, setIsAuth]);
    return !isAuth ? (
        <>
            <h1>Login</h1>
            <div>
                <Form className="loginForm" method="POST">
                    <label>
                        Enter Account Email:
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Enter Account Password:
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">Submit</button>
                    <p>
                        If you need to create an account,
                        <Link to="/register"> click here.</Link>
                    </p>
                </Form>
            </div>
        </>
    ) : (
        <Navigate to="/userhome" />
    );
};

export default Login;
