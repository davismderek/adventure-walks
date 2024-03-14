// import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

// const element = <FontAwesomeIcon icon={faHouse} />;

import { Link, useLocation } from "react-router-dom";
import UserHome from "../routes/UserHome";
const Navigation = () => {
    const location = useLocation();

    console.log("location:", location);
    return (
        <nav>
            <div className="homeNavIcon">
                {location.pathname.includes("userhome") ? (
                    <Link to="/account">
                        <FontAwesomeIcon icon={faUser} size="xl" />
                    </Link>
                ) : (
                    <Link to="/userhome">
                        <FontAwesomeIcon icon={faHouse} size="xl" />
                    </Link>
                )}
            </div>
        </nav>
    );
};

// Navigation.propTypes = {
//     navItems: PropTypes.array,
// };
export default Navigation;
