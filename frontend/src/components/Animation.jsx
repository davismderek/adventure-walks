import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const Animation = () => {
    const playerRef = useRef(null);

    return (
        <Player
            className="colorsAnimation"
            autoplay={true}
            loop={false}
            src="https://lottie.host/cdb89c7a-af84-47a5-8e5e-f259966805da/H2ILE4B8Ym.json"
            style={{ height: "300px", width: "300px" }}
            ref={playerRef}
        />
    );
};

export default Animation;
