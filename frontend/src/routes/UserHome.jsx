import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
import bg1 from "../assets/bg1.png";

// import url from "https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap";

// import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";

const UserHome = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    minHeight: "100vh",
                    Height: "50vh",
                }}
            >
                <div className="userHome">
                    <h1 className="walter-turncoat-regular">
                        Hello, Adventurer!<span> </span>
                        <FontAwesomeIcon icon={faPersonHiking} />
                        <span> </span>
                        {/* <FontAwesomeIcon icon={faPersonWalking} /> */}
                    </h1>
                    <div className="homeBtnSection">
                        <div className="homeHeaders">
                            <h2>Scavenger Hunt!</h2>
                            <div className="homeCardContainer">
                                <Link to="/colors" className="homeCard">
                                    <p>COLORS</p>
                                </Link>
                                <Link to="/numbers" className="homeCard">
                                    <p>123's</p>
                                </Link>
                            </div>
                        </div>

                        <div className="homeHeaders">
                            <h2>Learning!</h2>
                            <div className="homeCardContainer">
                                <Link to="/abc" className="homeCard">
                                    <p>ABC's</p>
                                </Link>

                                <Link to="/animals" className="homeCard">
                                    <p>ANIMALS</p>
                                </Link>
                            </div>
                        </div>
                        {/* <div>
                            <img src="../assets/sunset.jpg" />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserHome;

/* <h2 className="homeHeaders">Play Bingo!</h2>
                <div className="homeCardContainer">
                    <div className="homeCard">
                        <p>SEEING</p>
                    </div>
                    <div className="homeCard">
                        <p>HEARING</p>
                    </div>
                </div> */
