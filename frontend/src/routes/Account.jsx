import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
    try {
        const url = "http://localhost:8000/email/";
        const access_token = localStorage.getItem("access_token");

        const userEmail = await fetch(url, {
            method: "GET",
            headers: {
                "Content=Type": "application/json",
                Authorizaion: `Bearer ${access_token}`,
            },
        }).then((response) => response.json());
        return { userEmail };
    } catch (error) {
        console.log("ERROR:", error);
        return { error };
    }
}

const Account = () => {
    const { userEmail } = useLoaderData();
    return (
        <>
            <h1>Account Page</h1>
            {userEmail}
            <p>
                {userEmail}
                <Link to="/logout">Click here</Link> to logout.
            </p>
        </>
    );
};

export default Account;
