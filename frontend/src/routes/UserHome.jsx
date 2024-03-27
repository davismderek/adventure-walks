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
                    <h1
                        className="chelsea-market-regular"
                        style={{ color: "white" }}
                    >
                        Hello, Adventurer<span> </span>
                        <FontAwesomeIcon icon={faPersonHiking} />
                        <span> </span>
                        {/* <FontAwesomeIcon icon={faPersonWalking} /> */}
                    </h1>
                    <div className="homeBtnSection">
                        <div className="homeHeaders">
                            <h2 className="chelsea-market-regular">
                                Scavenger Hunt
                            </h2>
                            <div className="homeCardContainer">
                                <Link to="/colors" className="homeCard">
                                    <p className="chelsea-market-regular">
                                        COLORS
                                    </p>
                                </Link>
                                <Link to="/abc" className="homeCard">
                                    <p className="chelsea-market-regular">
                                        ABC's
                                    </p>
                                </Link>
                            </div>
                        </div>

                        <div className="homeHeaders">
                            <h2 className="chelsea-market-regular">Learning</h2>
                            <div className="homeCardContainer">
                                <Link to="/numbers" className="homeCard">
                                    <p className="chelsea-market-regular">
                                        123's
                                    </p>
                                </Link>
                                <Link to="/plants" className="homeCard">
                                    <p className="chelsea-market-regular">
                                        PLANTS
                                    </p>
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
