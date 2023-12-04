"use strict";
// add effie
    (() => {
// Replace with your OpenWeatherMap API key
        const weatherApiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
// Replace with your Mapbox API key
        const mapboxApiKey = MB_KEY;

// Function to create forecast cards
        function createForecastCards(coordinates) {
            // Implement the logic to create forecast cards based on the provided coordinates
            // You can use the coordinates to fetch weather data and update the UI
            fetchWeatherData(coordinates.lat, coordinates.lng);
        }

// Function to get weather data based on coordinates
        async function getWeatherData(lat, lon) {
            const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;
            const response = await fetch(weatherUrl);
            const data = await response.json();
            return data;
        }

// Function to update the weather forecast UI
        function updateForecastUI(data) {
            // Implement the code to update the forecast UI with the received data
            // You can access specific weather information from the 'data' object
            console.log(data);
        }

// Function to fetch weather data based on coordinates
        function fetchWeatherData(lat, lon) {
            // Update the API endpoint with the correct format
            const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`;

            fetch(weatherUrl)
                .then(response => response.json())
                .then(data => {
                    // Process the data and update the forecast UI
                    updateForecastUI(data);
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        }

// Function to update the forecast when the map is clicked
        function updateForecast(lat, lon) {
            fetchWeatherData(lat, lon);
        }

// Initialize Mapbox
        mapboxgl.accessToken = mapboxApiKey;
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-98.48948239256946, 29.426825118534886], // Default center (longitude, latitude)
            zoom: 9
        });

// Event listener for when the map is clicked
        map.on('click', (e) => {
            const { lng, lat } = e.lngLat;
            // Update the forecast when the map is clicked
            updateForecast(lat, lng);
        });

// Add Mapbox Geocoder for location search
        const geocoder = new MapboxGeocoder({
            accessToken: mapboxApiKey,
            mapboxgl: mapboxgl
        });

// Add the geocoder to your page
        document.getElementById('map').appendChild(geocoder.onAdd(map));

// Optional: You may want to initialize the forecast with your current location
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            // Update the forecast for the initial location
            createForecastCards({ lat: latitude, lng: longitude });
        });

    })();

