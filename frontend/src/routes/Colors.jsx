import { Form } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const Colors = () => {
    const [colorFound, setColorFound] = useState({ data: [] });
    const [expandedCard, setExpandedCard] = useState(null);
    const [animationPlayed, setAnimationPlayed] = useState(false);

    const fetchData = async () => {
        try {
            const url = "http://localhost:8000/colors/getColorFound";
            const access_token = localStorage.getItem("access_token");

            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setColorFound(data);
            } else {
                console.error("Failed to fetch letterFound data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleCardClick = (colorName) => {
        if (expandedCard === colorName) {
            setExpandedCard(null);
        } else {
            setExpandedCard(colorName);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const color = formData.get("color");
        const userFound = formData.get("userFound");

        try {
            const url = `${import.meta.env.VITE_SOURCE_URL}/colorsinput`;
            const access_token = localStorage.getItem("access_token");
            const user_id = localStorage.getItem("user_id");

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`,
                },
                body: JSON.stringify({
                    user_id,
                    color,
                    userFound,
                }),
            });

            if (response.ok) {
                console.log("Data inserted successfully");
                fetchData();
                setAnimationPlayed(true);
            } else {
                console.error("Failed to insert data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const renderStars = (colorName) => {
        if (!colorFound || !colorFound.data) return "";

        const colorData = colorFound.data.filter(
            (item) => item.color === colorName
        );
        // console.log("Data:", colorData);
        if (colorData.length) {
            const userData = colorData.map((data) => {
                console.log(data);
                if (data.userFound) {
                    return (
                        <p
                            style={{
                                fontSize: "22px",
                                textAlign: "center",
                                fontWeight: "500",
                                margin: "5px",
                            }}
                        >
                            ✓ {data.userFound}
                        </p>
                    );
                }
            });
            return userData;

            // return <p style={{ fontSize: "20px" }}>✓ {colorData.stars} </p>;
        }
        return "";
    };

    const colors = [
        { colorName: "red", color: "#FF0000" },
        { colorName: "orange", color: "#FFA500" },
        { colorName: "yellow", color: "#FFFF00" },
        { colorName: "green", color: "#008000" },
        { colorName: "blue", color: "#0000FF" },
        { colorName: "purple", color: "#800080" },
        { colorName: "pink", color: "#FFC0CB" },
        { colorName: "brown", color: "#964B00" },
        { colorName: "black", color: "#000000" },
        { colorName: "white", color: "#FFFFFF" },
    ];

    return (
        <>
            {animationPlayed && (
                <Lottie
                    animationDataUrl="https://lottie.host/f9ce69d8-99fb-4b7e-aeb0-32468068f077/LKzzVUFLW3.json"
                    autoplay={true}
                    loop={false}
                    style={{ width: 200, height: 200 }}
                />
            )}
            <h1>Colors </h1>
            <div className="introText">
                <p>
                    On today's adventure, we're hunting for colors! Tell us what
                    you can found that matches the color and then look for the
                    checkmark. ✓
                </p>
            </div>

            <div className="colorsBody">
                {colors.map(({ colorName, color }) => (
                    <div className="flip-container-colors" key={colorName}>
                        <div
                            className={`card ${
                                expandedCard === colorName
                                    ? "expandedColors"
                                    : ""
                            }`}
                            onClick={() => handleCardClick(colorName)}
                        >
                            <div
                                className="front"
                                style={{
                                    backgroundColor: color,
                                    color:
                                        color === "#FFFFFF"
                                            ? "#000000"
                                            : undefined,
                                    display: "flex",
                                    margin: "0",
                                    flexDirection: "column",
                                }}
                            >
                                <p style={{ margin: "0" }}>
                                    {colorName.toUpperCase()}
                                    {renderStars(colorName)}
                                </p>
                            </div>
                            <div
                                className="back"
                                id="back"
                                style={{
                                    backgroundColor: color,
                                    color:
                                        color === "#FFFFFF"
                                            ? "#000000"
                                            : undefined,
                                }}
                            >
                                <Form onSubmit={handleSubmit}>
                                    <label>
                                        What did you find on your adventure that
                                        was{" "}
                                        <span style={{ fontWeight: "600" }}>
                                            {colorName}
                                        </span>
                                        ?
                                        <input type="text" name="userFound" />
                                        <input
                                            type="hidden"
                                            value={colorName}
                                            name="color"
                                        />
                                    </label>
                                    <button
                                        style={{ margin: "5px" }}
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </Form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Colors;
