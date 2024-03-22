import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTree,
    faHouseChimney,
    faDog,
    faCloud,
    faLeaf,
    faBug,
    faPlane,
    faCarSide,
    faSun,
    faFlagUsa,
    faDove,
    faCrow,
    faTruck,
} from "@fortawesome/free-solid-svg-icons";

const NumbersCard = ({ number, fact, icon, iconName }) => {
    const [flipped, setFlipped] = useState(false);

    // const handleClick = () => {
    //     setFlipped(!flipped);
    // };

    const handleClick = (number) => {
        setFlipped(flipped === number ? null : number);
    };

    return (
        // <div
        //     className={`flip-container-numbers ${flipped ? "flippedA" : ""}`}
        //     onClick={handleClick}
        // >
        <div
            className={`flip-container-numbers ${
                flipped === number ? "flippedA" : ""
            }`}
            onClick={() => handleClick(number)}
        >
            <div className="cardNumbers">
                <div className="frontNumbers">
                    <p>{number}</p>
                    <div className="numFrontIcon">
                        <FontAwesomeIcon icon={icon} />
                        <p>{iconName}</p>
                    </div>
                </div>
                <div className="backNumbers">
                    <div className="numBackText">
                        <div className="numBackHeading">
                            <p>{iconName}: Fun Fact </p>{" "}
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <p>{fact}</p>
                        <p>Did you find {number}? </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Numbers = () => {
    return (
        <>
            <h1>Numbers</h1>
            <div className="introText">
                <p>Here is the numbers page.....</p>
            </div>
            <div className="number-cards">
                <NumbersCard
                    number="1"
                    iconName="Sun"
                    icon={faSun}
                    fact="trucks are big"
                />
                <NumbersCard
                    number="2"
                    icon={faPlane}
                    iconName="Planes"
                    fact="trees are big"
                />
                <NumbersCard
                    number="3"
                    iconName="Trucks"
                    icon={faTruck}
                    fact="trucks are big"
                />
                <NumbersCard
                    number="4"
                    icon={faHouseChimney}
                    iconName="Houses"
                    fact="trees are big"
                />
                <NumbersCard
                    number="5"
                    icon={faDog}
                    iconName="Dogs"
                    fact="trees are big"
                />
                <NumbersCard
                    number="5"
                    icon={faFlagUsa}
                    iconName="Flags"
                    fact="trees are big"
                />
                <NumbersCard
                    number="6"
                    icon={faBug}
                    iconName="Bugs"
                    fact="trees are big"
                />
                <NumbersCard
                    number="7"
                    iconName="Cars"
                    icon={faCarSide}
                    fact="trucks are big"
                />
                <NumbersCard
                    number="8"
                    icon={faCloud}
                    iconName="Clouds"
                    fact="trees are big"
                />
                <NumbersCard
                    number="9"
                    icon={faDove}
                    iconName="Birds"
                    fact="trees are big"
                />
                <NumbersCard
                    number="9"
                    icon={faCrow}
                    iconName="Birds"
                    fact="trees are big"
                />
                <NumbersCard
                    number="9"
                    icon={faLeaf}
                    iconName="Leaves"
                    fact="trees are big"
                />
                <NumbersCard
                    number="10"
                    icon={faTree}
                    iconName="Trees"
                    fact="trees are big"
                />
            </div>
        </>
    );
};

export default Numbers;
