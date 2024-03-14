import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonHiking } from "@fortawesome/free-solid-svg-icons";
// import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";

const UserHome = () => {
    return (
        <>
            <h1>
                Hello Adventurer!<span> </span>
                <FontAwesomeIcon icon={faPersonHiking} />
                <span> </span>
                {/* <FontAwesomeIcon icon={faPersonWalking} /> */}
            </h1>
            <div>
                <h2 className="homeHeaders">Go on a Scavenger Hunt!</h2>
                <div className="homeCardContainer">
                    <div className="homeCard">
                        <p>COLORS</p>
                    </div>

                    <Link to="/animals" className="homeCard">
                        <p>ANIMALS</p>
                    </Link>
                </div>

                <h2 className="homeHeaders">Play Bingo!</h2>
                <div className="homeCardContainer">
                    <div className="homeCard">
                        <p>SEEING</p>
                    </div>
                    <div className="homeCard">
                        <p>HEARING</p>
                    </div>
                </div>

                <h2 className="homeHeaders">ABC's & 123's!</h2>
                <div className="homeCardContainer">
                    <Link to="/abc" className="homeCard">
                        <p>ABC's</p>
                    </Link>
                    <div className="homeCard">
                        <p>123's</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserHome;
