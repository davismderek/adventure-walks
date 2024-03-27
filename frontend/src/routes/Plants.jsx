import bg2 from "../assets/bg2.png";
import "ai-taxonomist";

const API_KEY = "2b1025PBLdu6XF4ZOCpLBj7O";

const Plants = () => {
    return (
        <>
            <div
                className="bgs"
                style={{
                    backgroundImage: `url(${bg2})`,
                }}
            >
                <h1 className="chelsea-market-regular">What's this Plant?</h1>
                <div className="introText">
                    <p>
                        Do you see a plant or flower that you like? Do you want
                        to know what it is? Upload a picture and learn more
                        about it!
                    </p>
                </div>
                <div className="apiContainer">
                    <ai-taxonomist
                        removePlantNetBranding="true"
                        apiUrl="https://my-api.plantnet.org/v2/identify/all"
                        apiKey="2b1025PBLdu6XF4ZOCpLBj7O"
                    ></ai-taxonomist>
                </div>
            </div>
        </>
    );
};

export default Plants;

// apiKey={API_KEY}
// const identify = async () => {
//     const fileInput = document.getElementsByClassName("picture");
//     const images = fileInput.files;
//     if (images.length === 0) {
//         console.error("choose a file");
//         return false;
//     }

//     const form = new FormData();
//     for (let i = 0; i < images.length; i += 1) {
//         form.append("organs", "auto");
//         form.append("images", images[i]);
//     }
// };
{
    /* <Form id="plantApi">
                        <label>Input File:</label>
                        <input className="picture" type="file" />
                        <button type="submit">Identify Plant</button>
                        <input type="submit" value="Identify" />
                    </Form> */
}
{
    /* apiUrl="https://my-api.plantnet.org/v2/identify/all" */
}

{
    /* <div>
                        <pre
                            id="results"
                            style="white-space: break-spaces;"
                        ></pre>
                    </div> */
}

{
    /* <p>
                        Here are some of the most common animals you'll see if
                        you're adventuring around your neighborhood, playing at
                        the beach, or on a mountain hike! If you tap the
                        picture, you'll learn some fun facts about the animal!
                    </p> */
}

// import { useState } from "react";
// import bg2 from "../assets/bg2.png";

// const AnimalCard = ({ imageSrc, fact1, fact2, fact3, animal }) => {
//     const [flipped, setFlipped] = useState(false);

//     const handleClick = () => {
//         setFlipped(!flipped);
//     };

//     return (
//         <div
//             className={`flip-container-animals ${flipped ? "flippedA" : ""}`}
//             onClick={handleClick}
//         >
//             <div className="cardAnimals">
//                 <div className=" frontAnimals">
//                     <img className="dogImg" src={imageSrc} alt={animal} />
//                 </div>
//                 <div className=" backAnimals">
//                     <h3>Fun Facts about {animal}s!</h3>
//                     <p>1. {fact1}</p>
//                     <p>1. {fact2}</p>
//                     <p>3. {fact3}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Animals = () => {
//     return (
//         <>
//             <div
//                 className="bgs"
//                 style={{
//                     backgroundImage: `url(${bg2})`,
//                 }}
//             >
//                 <h1 className="chelsea-market-regular">Animal Fun Facts</h1>
//                 <div className="introText">
//                     <Form id="plantApi">
//                         <input id="picture" type="file" />
//                         <button type="submit">Identify Plant</button>
//                         {/* <input type="submit" value="Identify" /> */}
//                     </Form>
//                     <div>
//                         <pre
//                             id="results"
//                             style="white-space: break-spaces;"
//                         ></pre>
//                     </div>
//                     <p>
//                         Here are some of the most common animals you'll see if
//                         you're adventuring around your neighborhood, playing at
//                         the beach, or on a mountain hike! If you tap the
//                         picture, you'll learn some fun facts about the animal!
//                     </p>
//                 </div>
//                 <div className="animal-cards">
//                     <AnimalCard
//                         animal="dog"
//                         imageSrc="src/assets/dog.jpg"
//                         fact1="Super Smellers"
//                         fact2="Different Bark Languages"
//                         fact3="Tail Wagging"
//                     />
//                     <AnimalCard
//                         animal="cat"
//                         imageSrc="src/assets/cat.jpg"
//                         fact1="Excellent Jumpers"
//                         fact2="They Purrrrr"
//                         fact3="Thay have nine lived!"
//                     />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Animals;
