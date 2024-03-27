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
                <div className="scavengerImgContainer">
                    <img src="/src/assets/Scav.png" className="scavengerImg" />
                </div>
            </div>
        </>
    );
};

export default Plants;
