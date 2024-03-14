import { Form } from "react-router-dom";
import React, { useState } from "react";

const Letters = () => {
    const [isFlipped, setIsFlipped] = useState({});

    // Define handleCardClick function
    const handleCardClick = (letter) => {
        setIsFlipped((prevState) => ({
            ...prevState,
            [letter]: !prevState[letter],
        }));
        if (expandedCard === letter) {
            // If the clicked card is already expanded, collapse it
            setExpandedCard(null);
        } else {
            // If the clicked card is not expanded, expand it
            setExpandedCard(letter);
        }
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
            <h1>ABC Page</h1>
            <p>
                On today's adventure, find something that begins with each
                letter of the alphabet. See if you can collect all 26 gold stars
                at the end!
            </p>

            <div className="abcBody">
                {letters.map((letter) => (
                    <div className="flip-container" key={letter}>
                        <div
                            className={`card ${
                                isFlipped[letter] ? "isflipped" : ""
                            }`}
                            onClick={() => handleCardClick(letter)}
                        >
                            <div className="front">
                                <p>{letter}</p>
                            </div>
                            <div className="back" id="back">
                                <Form>
                                    <label>
                                        What did you find that starts with the
                                        letter {letter}?
                                        <input type="text" name="userInput" />
                                    </label>
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
