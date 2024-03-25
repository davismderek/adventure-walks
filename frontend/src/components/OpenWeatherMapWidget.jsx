import React, { useEffect } from "react";

const OpenWeatherMapWidget = ({ latitude, longitude, apiKey }) => {
    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.charset = "utf-8";
        script.src =
            "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
        script.onload = () => {
            if (window.myWidgetParam) {
                window.myWidgetParam.push({
                    id: 5,
                    lat: latitude,
                    lon: longitude,
                    appid: apiKey,
                    units: "imperial",
                    containerid: "openweathermap-widget-5",
                });
            }
        };
        const s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(script, s);

        return () => {
            document.getElementById("openweathermap-widget-5").innerHTML = ""; // Clean up when component unmounts
        };
    }, [latitude, longitude, apiKey]);

    return <div id="openweathermap-widget-5"></div>;
};

export default OpenWeatherMapWidget;
