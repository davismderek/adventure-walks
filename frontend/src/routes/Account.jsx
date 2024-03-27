import { Link, useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from "react";
import bg2 from "../assets/bg2.png";

// import OpenWeatherMapWidget from "../components/OpenWeatherMapWidget";

export async function loader() {
    const url = "http://localhost:8000/email/";
    const access_token = localStorage.getItem("access_token");

    const userEmail = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
        },
    }).then((response) => response.json());

    return { userEmail };
}

const Account = () => {
    // const [weatherData, setWeatherData] = useState(null);
    // const API_KEY = "21b5686be3d220d9da56b12080eba64b";
    const [playgrounds, setPlaygrounds] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://data.openupstate.org/map/geojson/playgrounds/"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setPlaygrounds(data.features); // Assuming "features" holds playground data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // useEffect(() => {
    //     fetchDataWeather();
    // }, []);

    // const fetchDataWeather = async () => {
    //     try {
    //         const response = await fetch(
    //             `https://api.openweathermap.org/data/2.5/weather?q=Greenville,US&appid=${API_KEY}&units=imperial`
    //         );
    //         const data = await response.json();
    //         setWeatherData(data);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };

    // const formatTime = (timestamp) => {
    //     const date = new Date(timestamp * 1000);
    //     return date.toLocaleTimeString();
    // };

    // const map = L.map("map").setView([34.864625, -82.375214], 13);

    // L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //     maxZoom: 19,
    //     attribution: `&copy; ${(
    //         <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>
    //     )}`,
    // }).addTo(map);

    const { userEmail } = useLoaderData();
    const email = userEmail.data.length > 0 ? userEmail.data[0].email : "";
    return (
        <>
            <div
                className="bgs"
                style={{
                    backgroundImage: `url(${bg2})`,
                }}
            >
                <h1 className="chelsea-market-regular">Account Page</h1>

                <div className="accountPage">
                    <p>
                        Hello Adventure Leaders,
                        <br></br>
                        <br></br> We hope this app connects your little
                        adventurers to the outdoors in a fun, mindful, and
                        educational way. Please use this app to teach them about
                        colors, have them learn letter association through the
                        alphabet, discover some fun facts, dive into botanical
                        curiosity with the plants arounds us and so much more.
                        If you are enjoying what we have and want more, email us
                        at{" "}
                        <a
                            style={{
                                textDecoration: "underline",
                                color: "darkgreen",
                                fontWeight: "500",
                            }}
                            href="mailto:hello@AdventureWalks.com"
                        >
                            hello@AdventureWalks.com
                        </a>
                        .
                    </p>
                    <p>Your Account: {email}</p>
                    <button>
                        <Link to="/logout">Sign Out</Link>
                    </button>
                </div>

                {/* <OpenWeatherMapWidget
                latitude={34.8526}
                longitude={-82.394}
                apiKey={API_KEY}
            /> */}

                {/* {weatherData && (
                <div>
                    <p>Temperature: {weatherData.main.temp}°F</p>
                    <p>Weather: {weatherData.weather[0].main}</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                    <p>Sunrise: {formatTime(weatherData.sys.sunrise)}</p>
                    <p>Sunset: {formatTime(weatherData.sys.sunset)}</p>
                </div>
            )} */}

                {/* <div>
                <h1>Playgrounds</h1>
                <div className="map">{map}</div>
                <ul>
                    {playgrounds.map((playground, index) => (
                        <li key={index}>{playground.properties.name}</li> // Adjust according to your JSON structure
                    ))}
                </ul>
            </div> */}
            </div>
        </>
    );
};

export default Account;
