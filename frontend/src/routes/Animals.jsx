import { useState } from "react";

const AnimalCard = ({ imageSrc, fact1, fact2, fact3, animal }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`flip-container-animals ${flipped ? "flippedA" : ""}`}
            onClick={handleClick}
        >
            <div className="cardAnimals">
                <div className=" frontAnimals">
                    <img className="dogImg" src={imageSrc} alt="Animal" />
                </div>
                <div className=" backAnimals">
                    <h3>Fun Facts about {animal}s!</h3>
                    <p>1. {fact1}</p>
                    <p>1. {fact2}</p>
                    <p>3. {fact3}</p>
                </div>
            </div>
        </div>
    );
};

const Animals = () => {
    return (
        <>
            <h1>Animal Fun Facts</h1>
            <div className="introText">
                <p>
                    Here are some of the most common animals you'll see if
                    you're adventuring around your neighborhood, playing at the
                    beach, or on a mountain hike! If you tap the picture, you'll
                    learn some fun facts about the animal!
                </p>
            </div>
            <div className="animal-cards">
                <AnimalCard
                    animal="dog"
                    imageSrc="src/assets/dog.jpg"
                    fact1="Super Smellers"
                    fact2="Different Bark Languages"
                    fact3="Tail Wagging"
                />
                <AnimalCard
                    animal="cat"
                    imageSrc="src/assets/cat.jpg"
                    fact1="Excellent Jumpers"
                    fact2="They Purrrrr"
                    fact3="Thay have nine lived!"
                />
                <AnimalCard
                    animal="dog"
                    imageSrc="src/assets/dog.jpg"
                    fact1="Super Smellers"
                    fact2="Different Bark Languages"
                    fact3="Tail Wagging"
                />
                <AnimalCard
                    animal="cat"
                    imageSrc="src/assets/cat.jpg"
                    fact1="Excellent Jumpers"
                    fact2="They Purrrrr"
                    fact3="Thay have nine lived!"
                />
                <AnimalCard
                    animal="dog"
                    imageSrc="src/assets/dog.jpg"
                    fact1="Super Smellers"
                    fact2="Different Bark Languages"
                    fact3="Tail Wagging"
                />
                <AnimalCard
                    animal="cat"
                    imageSrc="src/assets/cat.jpg"
                    fact1="Excellent Jumpers"
                    fact2="They Purrrrr"
                    fact3="Thay have nine lived!"
                />
            </div>
        </>
    );
};

export default Animals;
