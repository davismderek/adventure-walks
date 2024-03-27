// import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
const Navigation = () => {
    const location = useLocation();

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

export default Navigation;
