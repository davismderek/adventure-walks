import { Form, useLoaderData } from "react-router-dom";
import { useState } from "react";

export async function loader() {
    const url = "http://localhost:8000/letterinput/getuserFound";
    const access_token = localStorage.getItem("access_token");

    const letterFound = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
    }).then((response) => response.json());

    return { letterFound };
}

const Letters = () => {
    const { letterFound } = useLoaderData();
    // const displayItemFound =
    //     letterFound.data.length > 0 ? letterFound.data[0].userFound : "";

    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (letter) => {
        setExpandedCard(expandedCard === letter ? null : letter);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userFound = formData.get("userFound");
        const tables_id = formData.get("tables_id");

        try {
            const url = `${import.meta.env.VITE_SOURCE_URL}/letterinput`;
            const access_token = localStorage.getItem("access_token");

            const tables_id_str = tables_id.toString();

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`,
                },
                body: JSON.stringify({ user_id: tables_id, userFound }),
                // body: JSON.stringify({ user_id: user_id_str, userFound }),
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

    const tables_id = localStorage.getItem("user_id");

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
            <h1>ABC Page</h1>
            <div className="introText">
                <p>
                    On today's adventure, find something that begins with each
                    letter of the alphabet. See if you can collect all 26 gold
                    stars at the end!
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
                                <p>{letter}</p>
                            </div>

                            <div className="back" id="back">
                                <Form onSubmit={handleSubmit}>
                                    <input
                                        type="hidden"
                                        name="tables_id"
                                        value={tables_id}
                                    />
                                    <label>
                                        What did you find that starts with the
                                        letter {letter}?
                                        <input type="text" name="userFound" />
                                    </label>

                                    <button type="submit">Submit</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Letters;

/* {displayItemFound &&
                                displayItemFound.startsWith(
                                    letter.toLowerCase()
                                ) ? (
                                    <p>You found a {displayItemFound}!</p>
                                ) : (
                                    <p>{letter}</p>
                                )} */

// import { Form } from "react-router-dom";
// import React, { useState } from "react";

// export const action = async ({ request }) => {
//     const formData = await request.formData();
//     const letter = formData.get({ letter });
//     const letterData = { letter };

//     const url = `${import.meta.env.VITE_SOURCE_URL}/login`;
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginData),
//     });
// };

// const { data, error } = await supabase
//     .from("abcs")
//     .insert([{ some_column: "someValue", other_column: "otherValue" }])
//     .select();

// const Letters = () => {
//     const [expandedCard, setExpandedCard] = useState(null);

//     // Define handleCardClick function
//     const handleCardClick = (letter) => {
//         if (expandedCard === letter) {
//             // If the clicked card is already expanded, collapse it
//             setExpandedCard(null);
//         } else {
//             // If the clicked card is not expanded, expand it
//             setExpandedCard(letter);
//         }
//     };

//     const letters = [
//         "A",
//         "B",
//         "C",
//         "D",
//         "E",
//         "F",
//         "G",
//         "H",
//         "I",
//         "J",
//         "K",
//         "L",
//         "M",
//         "N",
//         "O",
//         "P",
//         "Q",
//         "R",
//         "S",
//         "T",
//         "U",
//         "V",
//         "W",
//         "X",
//         "Y",
//         "Z",
//     ];

//     return (
//         <>
//             <h1>ABC Page</h1>
//             <p>
//                 On today's adventure, find something that begins with each
//                 letter of the alphabet. See if you can collect all 26 gold stars
//                 at the end!
//             </p>

//             <div className="abcBody">
//                 {letters.map((letter) => (
//                     <div className="flip-container" key={letter}>
//                         <div
//                             className={`card ${
//                                 expandedCard === letter ? "expanded" : ""
//                             }`}
//                             onClick={() => handleCardClick(letter)}
//                         >
//                             <div className="front">
//                                 <p>{letter}</p>
//                             </div>
//                             <div className="back" id="back">
//                                 <Form method="PUT">
//                                     <label>
//                                         What did you find that starts with the
//                                         letter {letter}?
//                                         <input type="text" name={letter} />
//                                     </label>
//                                     <button type="submit">Submit</button>
//                                 </Form>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Letters;

// const { data, error } = await supabase
//     .from("abcs")
//     .insert([{ some_column: "someValue", other_column: "otherValue" }])
//     .select();

// const Letters = () => {
//     const [isFlipped, setIsFlipped] = useState({});

//     // Define handleCardClick function
//     const handleCardClick = (letter) => {
//         setIsFlipped((prevState) => ({
//             ...prevState,
//             [letter]: !prevState[letter],
//         }));
//         if (expandedCard === letter) {
//             // If the clicked card is already expanded, collapse it
//             setExpandedCard(null);
//         } else {
//             // If the clicked card is not expanded, expand it
//             setExpandedCard(letter);
//         }
//     };

//     const letters = [
//         "A",
//         "B",
//         "C",
//         "D",
//         "E",
//         "F",
//         "G",
//         "H",
//         "I",
//         "J",
//         "K",
//         "L",
//         "M",
//         "N",
//         "O",
//         "P",
//         "Q",
//         "R",
//         "S",
//         "T",
//         "U",
//         "V",
//         "W",
//         "X",
//         "Y",
//         "Z",
//     ];

//     return (
//         <>
//             <h1>ABC Page</h1>
//             <p>
//                 On today's adventure, find something that begins with each
//                 letter of the alphabet. See if you can collect all 26 gold stars
//                 at the end!
//             </p>

//             <div className="abcBody">
//                 {letters.map((letter) => (
//                     <div className="flip-container" key={letter}>
//                         <div
//                             className={`card ${
//                                 isFlipped[letter] ? "isflipped" : ""
//                             }`}
//                             onClick={() => handleCardClick(letter)}
//                         >
//                             <div className="front">
//                                 <p>{letter}</p>
//                             </div>
//                             <div className="back" id="back">
//                                 <Form>
//                                     <label>
//                                         What did you find that starts with the
//                                         letter {letter}?
//                                         <input type="text" name="userInput" />
//                                     </label>
//                                 </Form>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Letters;

// const letters = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
// ];

// const letterCard = "<div className='flex-ul'>";

// letters.forEach((letter) => {
//     letterCard += `
//         <div className='flip-container'>
//             <div className='card'>
//                 <div className='front'>
//                     <p>${letter}</p>
//                 </div>
//                 <div className='back' id='back'>
//                 <p>${letter} back</p>
//                 </div>
//             </div>
//      </div>`;
// });

// letterCard += `</div>`;
// document.getElementById(letterCards).innerHTML = letterCard;

// const card = document.querySelectorAll(".card");

// card.forEach((cards) => {
//     cards.addEventListener("click", () => {
//         cards.classList.toggle("isflipped");
//     });
//     cards.removeEventListener("click", cards);
// });

// const ABCs = () => {
//     return (
//         <>
//             <h1>ABC Page</h1>

//             <div className="abcBody">
//                 <p id="letterCards"></p>
//             </div>
//         </>
//     );
// };

// export default ABCs;

{
    /* <img className='liste-img' src='img/${letter}.jpg'></img> */
}
{
    /* <img className='liste-img' src='img/back/${letter}.jpg'></img> */
}
