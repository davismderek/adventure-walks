import { Form } from "react-router-dom";
import React, { useState, useEffect } from "react";
import bg1 from "../assets/bg1.png";

const Letters = () => {
    const [letterFound, setLetterFound] = useState({ data: [] });
    const [expandedCard, setExpandedCard] = useState(null);

    const fetchData = async () => {
        try {
            const url = "http://localhost:8000/letterinput/getLetterFound";
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
                setLetterFound(data);
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

    const handleCardClick = (letter) => {
        setExpandedCard(expandedCard === letter ? null : letter);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userFound = formData.get("userFound");
        const letter = formData.get("letter");

        try {
            const url = `${import.meta.env.VITE_SOURCE_URL}/letterinput`;
            const access_token = localStorage.getItem("access_token");
            const user_id = localStorage.getItem("user_id");

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`,
                },
                body: JSON.stringify({ user_id, userFound, letter }),
            });

            if (response.ok) {
                console.log("Data inserted successfully");
                // Refetch the letterFound data after successful submission
                fetchData();
            } else {
                console.error("Failed to insert data");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const renderStars = (letter) => {
        if (!letterFound || !letterFound.data) return "";

        const letterData = letterFound.data.find(
            (item) => item.letter === letter
        );
        if (letterData) {
            if (letterData.userFound) {
                return (
                    <p style={{ fontSize: "20px", margin: "0px" }}>
                        ⭐ {letterData.userFound} ⭐
                    </p>
                );
            }
            return <p style={{ fontSize: "20px" }}>⭐ {letterData.stars} ⭐</p>;
        }
        return "";
    };

    const letters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
    ];

    return (
        <>
            <div
                className="bgs"
                style={{
                    backgroundImage: `url(${bg1})`,
                }}
            >
                <h1>ABC's </h1>
                <div className="introText">
                    <p>
                        On today's adventure, find something that begins with
                        each letter of the alphabet. See if you can collect all
                        the gold stars at the end! ⭐
                    </p>
                </div>

                <div className="abcBody">
                    {letters.map((letter) => (
                        <div className="flip-container" key={letter}>
                            <div
                                className={`card ${
                                    expandedCard === letter ? "expanded" : ""
                                }`}
                                onClick={() => handleCardClick(letter)}
                            >
                                <div className="front">
                                    <p style={{ margin: "0px" }}>{letter}</p>

                                    {renderStars(letter)}
                                </div>

                                <div className="back" id="back">
                                    <Form onSubmit={handleSubmit}>
                                        <label>
                                            <p>
                                                What did you find that starts
                                                with the letter{" "}
                                                <span
                                                    style={{
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    {letter}
                                                </span>
                                                ?
                                            </p>
                                            <input
                                                type="text"
                                                name="userFound"
                                            />
                                            <input
                                                type="hidden"
                                                value={letter}
                                                name="letter"
                                            />
                                        </label>
                                        <button type="submit">Submit</button>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Letters;
