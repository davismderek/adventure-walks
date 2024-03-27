import { useState } from "react";
import bg2 from "../assets/bg2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTree,
    faHouseChimney,
    faDog,
    faLeaf,
    faBug,
    faPlane,
    faCarSide,
    faSun,
    faFlagUsa,
    faCrow,
    faTruck,
} from "@fortawesome/free-solid-svg-icons";

const NumbersCard = ({ number, fact, icon, iconName }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = (number) => {
        setFlipped(flipped === number ? null : number);
    };

    return (
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
                            {/* <p>{iconName}: Fun Fact </p>{" "} */}
                            <p>Did you find {number}? </p>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <p>{fact}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Numbers = () => {
    return (
        <>
            <div
                className="bgs"
                style={{
                    backgroundImage: `url(${bg2})`,
                }}
            >
                <h1 className="chelsea-market-regular">Numbers</h1>
                <div className="introText">
                    <p>
                        On our Number Adventure, try to find the object and
                        matching number on each card and learn a fun fact after
                        you do!
                    </p>
                </div>
                <div className="number-cards">
                    <NumbersCard
                        number="1"
                        icon={faPlane}
                        iconName="Plane"
                        fact="Planes have toilets onboard that can flush even while flying high in the sky, making them like magical potties with wings! 🚽 ✨"
                    />
                    <NumbersCard
                        number="2"
                        icon={faBug}
                        iconName="Bugs"
                        fact="Some bugs, like ants and bees, live and work together in big groups called colonies. It's a big bug party with all their friends! 🐝 🎉"
                    />
                    <NumbersCard
                        number="3"
                        icon={faDog}
                        iconName="Dogs"
                        fact="Dogs have about 18 muscles in each ear, helping them with super-sonic hearing!  🐶 👂"
                    />

                    <NumbersCard
                        number="4"
                        icon={faCrow}
                        iconName="Birds"
                        fact="Birds have special feathers that help them fly, but did you know they also use them to stay warm? It's like wearing a cozy jacket all the time! 🐦 🧥"
                    />

                    <NumbersCard
                        number="5"
                        iconName="Trucks"
                        icon={faTruck}
                        fact="Some trucks are so strong they can carry as much weight as 50 elephants, making them like super-powered giants on wheels! 🐘 🚛"
                    />
                    <NumbersCard
                        number="6"
                        icon={faFlagUsa}
                        iconName="Flags"
                        fact="Flags can be really big or super tiny! The largest flag ever flown measured as big as three football fields, while some tiny flags are no bigger than a postage stamp! 🚩🏈"
                    />

                    <NumbersCard
                        number="7"
                        iconName="Cars"
                        icon={faCarSide}
                        fact="Cars have super special eyes called headlights that help them see in the dark, just like flashlights for cars! 🚗 🔦"
                    />

                    <NumbersCard
                        number="8"
                        icon={faLeaf}
                        iconName="Leaves"
                        fact="Leaves are like factories that make food for plants! They use sunlight, water, and air to create yummy snacks called sugars, helping plants grow big and strong! 🌞 💧"
                    />
                    <NumbersCard
                        number="9"
                        icon={faHouseChimney}
                        iconName="Houses"
                        fact="Did you know that the world's smallest house is about the size of a parking space? It's like living in your very own cozy clubhouse! 🏠 🚗"
                    />

                    <NumbersCard
                        number="10"
                        icon={faTree}
                        iconName="Trees"
                        fact="Trees have a special drink called sap that flows through them like yummy juice! It's like their very own energy drink to help them grow big and tall! 🌳 🥤"
                    />
                </div>
                <div className="scavengerImgContainer">
                    <img src="/src/assets/Scav.png" className="scavengerImg" />
                </div>
            </div>
        </>
    );
};

export default Numbers;
