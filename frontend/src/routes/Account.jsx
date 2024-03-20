import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
    const url = "http://localhost:8000/email/";
    const access_token = localStorage.getItem("access_token");

    const userEmail = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
    }).then((response) => response.json());

    return { userEmail };
}

const Account = () => {
    const { userEmail } = useLoaderData();
    const email = userEmail.data.length > 0 ? userEmail.data[0].email : "";
    return (
        <>
            <h1>Account Page</h1>
            <p>Email: {email}</p>
            <button>
                <Link to="/logout">Sign Out</Link>
            </button>
        </>
    );
};

export default Account;
