import { useState } from "react";

const AnimalCard = ({ imageSrc, facts, animal }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`flip-container-animals ${flipped ? "flippedA" : ""}`}
            onClick={handleClick}
        >
            <div className="cardAnimals frontAnimals">
                <img className="dogImg" src={imageSrc} alt="Animal" />
            </div>
            <div className="cardAnimals backAnimals">
                <h3>Fun Facts about {animal}!</h3>
                <p>{facts}</p>
            </div>
        </div>
    );
};

const Numbers = () => {
    return (
        <>
            <h1>Animal Fun Facts</h1>
            <div className="animal-cards">
                <AnimalCard
                    animal="dog"
                    imageSrc="src/assets/dog.jpg"
                    facts="1. Super Smellers, 2. Different Bark Languages, 3. Tail Wagging"
                />
                <AnimalCard
                    animal="cat"
                    imageSrc="src/assets/cat.jpg"
                    facts="1. Excellent Jumpers, 2. Purring, 3. Sharp Claws"
                />
                {/* Add more AnimalCard components for other animals */}
            </div>
        </>
    );
};

export default Numbers;

// import { useState } from "react";

// const Numbers = () => {
//     const [expandedCard, setExpandedCard] = useState(null);

//     const handleCardClick = (animalCard) => {
//         setExpandedCard(expandedCard === animalCard ? null : animalCard);
//     };

//     const animalCards = [
//         <img className="dogImg" src="src/assets/dog.jpg" />,
//         <img className="dogImg" src="src/assets/cat.jpg" />,
//     ];

//     return (
//         <>
//             <h1>123</h1>
//             <p>Numbers Page</p>

//             <div className="abcBody">
//                 <div className="animalCardsContainer">
//                     {animalCards.map((animalCard) => (
//                         <div
//                             className="flip-container-animals"
//                             key={animalCard}
//                         >
//                             <div
//                                 className={`card ${
//                                     expandedCard === animalCard
//                                         ? "expanded"
//                                         : ""
//                                 }`}
//                                 onClick={() => handleCardClick(animalCard)}
//                             >
//                                 <div className="front">
//                                     <p>
//                                         {animalCard}
//                                     </p>
//                                 </div>
//                                 <div className="back" id="back">
//                                     <p>Fun Facts about DOGS!</p>
//                                     <ol>
//                                         <li>Super Smellers</li>
//                                         <li>Different Bark Languages</li>
//                                         <li> Tail Wagging</li>
//                                     </ol>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Numbers;
