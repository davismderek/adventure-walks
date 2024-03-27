import { Link } from "react-router-dom";
import bg2 from "../assets/bg2.png";

const Home = () => {
    return (
        <>
            <div
                className="bgs"
                style={{
                    backgroundImage: `url(${bg2})`,
                }}
            >
                <h1>Adventure Walks</h1>
                <div className="accountPage">
                    <p>
                        In an effort to get kids outside, this app was created
                        to capture children’s interest and have them engage in
                        nature. Adventure Walks incorporates color exploration,
                        letter association, fun facts tailored to kids about
                        what they see in their own neighborhood, and it uses AI
                        to partner with one of the largest biodiversity
                        observatories in the world to identify plants species.
                        The mission behind Adventure Walks is to foster an
                        environment for learning while creating excitement about
                        getting kids outside.
                    </p>
                    <div className="homeCardContainer">
                        <Link to="/login" className="homeCard">
                            <p>LOGIN</p>
                        </Link>
                        <Link to="/register" className="homeCard">
                            <p>REGISTER</p>
                        </Link>
                    </div>
                    {/* <p>
                        If you already have an account,{" "}
                        <Link
                            style={{
                                textDecoration: "underline",
                                fontWeight: "600",
                                color: "darkgreen",
                            }}
                            to="/login"
                        >
                            click here
                        </Link>{" "}
                        to login. If you need to create an account,{" "}
                        <Link
                            style={{
                                textDecoration: "underline",
                                fontWeight: "600",
                                color: "darkgreen",
                            }}
                            to="/register"
                        >
                            {" "}
                            click here
                        </Link>{" "}
                        .
                    </p> */}
                </div>
            </div>
        </>
    );
};

export default Home;
