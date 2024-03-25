import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const StarAnimation = () => {
    const playerRef = useRef(null);

    return (
        <Player
            className="colorsAnimation"
            autoplay={true}
            loop={false}
            src="https://lottie.host/2d7273df-74ec-4722-acb2-8face58fcc7f/ASPt2ZXKso.json"
            style={{ height: "300px", width: "300px" }}
            ref={playerRef}
        />
    );
};

export default StarAnimation;
