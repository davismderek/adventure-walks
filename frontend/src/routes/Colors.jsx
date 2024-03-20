import { Form, useLoaderData } from "react-router-dom";
import React, { useState } from "react";

export async function loader() {
    const url = "http://localhost:8000/colors/getColorFound";
    const access_token = localStorage.getItem("access_token");

    const tableData = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
    }).then((response) => response.json());

    return { tableData };
}

const Colors = () => {
    const { tableData } = useLoaderData();
    const colorData =
        tableData.data.length > 0 ? tableData.data[0].userFound : "";

    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (colorName) => {
        if (expandedCard === colorName) {
            setExpandedCard(null);
        } else {
            setExpandedCard(colorName);
        }
    };

    const getColorUserFound = (colorName) => {
        const colorData = tableData.data.find(
            (item) => item.color === colorName
        );
        return colorData ? colorData.userFound : ""; // If colorData is found, return userFound, else return empty string
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const colorNa = event.target[0].name;
        // console.log(colorNa);
        const formData = new FormData(event.target);
        const color = formData.get("color");
        const userFound = formData.get("userFound");
        // const colorName = event.target[0].value;
        // console.log({ colorName });
        try {
            const url = `${import.meta.env.VITE_SOURCE_URL}/colorsinput`;
            const access_token = localStorage.getItem("access_token");

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
            } else {
                console.error("Failed to insert data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const user_id = localStorage.getItem("user_id");

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
            <h1>Colors Page</h1>
            <div className="introText">
                <p>
                    On today's adventure, we're hunting for colors! Tell us what
                    you can find that matches the color.
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
                                </p>
                                {getColorUserFound(colorName) && (
                                    <p style={{ fontSize: "20px" }}>
                                        You found: {colorName}{" "}
                                        {getColorUserFound(colorName)}
                                    </p>
                                )}
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
