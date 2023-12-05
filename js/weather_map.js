"use strict";
    // add location
    let lat = 0;
    let lon = 0;
    const codetteMarkerImage = 'img/codette.png';
    let marker;

    // Initialize Mapbox map
    mapboxgl.accessToken = MB_KEY;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-98.48948239256946, 29.426825118534886],
        zoom: 8
    });

    //Adds the zoom control to the map
    map.addControl(new mapboxgl.NavigationControl());
    // Event Listener for the select zoom option
    document.getElementById('zoom-level').addEventListener('change', function (event) {
        const zoomLevel = parseFloat(event.target.value);
        map.setZoom(zoomLevel);
    });
        fetch(`https://api.openweathermap.org/data/2.5/weather?` +
            `lat=29.426825118534886&lon=-98.48948239256946` +
            `&appid=${WM_KEY}`)
            .then( data => console.log(data));

    // Add draggable marker
    marker = new mapboxgl.Marker({
        draggable: true,
        color: 'red',
        element: createCustomMarker(codetteMarkerImage),
    }).setLngLat([-98.48948239256946, 29.426825118534886])
        .addTo(map);

    // Create a custom marker using the custom image
    function createCustomMarker(imageUrl) {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.width = '30px';
        img.style.height = '30px';
        img.style.borderRadius = '50%';
        img.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';

        return img;
    }

    // Create the forecast cards for the original location, calling the createForecastCards function
    createForecastCards(marker.getLngLat());
    //When the marker is dragged, update the forecast cards
        marker.on('dragend', function () {
            createForecastCards(marker.getLngLat());
            console.log(marker.getLngLat());
        });
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WM_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            createForcastCards(lon, lat);
        })
            .catch(error => console.log(error));

    // For the user to search an address and place a marker
    document.getElementById('searchButton').addEventListener('click', function () {
        const userInput = document.getElementById('search').value;
        geocode(userInput, MB_KEY).then(function (result) {
            map.flyTo({ //Moves the center of the map to markers new location
                center: result,
                essential: true
            });
            marker.setLngLat(result);
            createForecastCards(marker.getLngLat());
        //Catching the error if the user inputs an invalid address
        }).catch(function (error) {
            console.error(error);
            alert('Invalid address. Please try again.');
        });
    });

    // Create cards for the forecast based on the location of the marker
    function createForecastCards(lngLat) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WM_KEY}&units=imperial`)
            .then(data => data.json())
            .then(forecast => {
                const weatherInfoCard = document.getElementById('weatherInfoCard');
                weatherInfoCard.innerHTML = '';
                let forecastHTML = '';
                for (let i = 0; i < forecast.list.length; i += 8) {
                    const day = forecast.list[i];
                    const date = new Date(day.dt * 1000).toDateString();
                    const addIcon = day.weather[0].icon;
                    const iconUrl = `https://openweathermap.org/img/wn/${addIcon}@2x.png`;
                    forecastHTML += `
                        <div class="forecast-card">
                            <h3>${date}</h3>
                            <img src=${iconUrl} alt=${day.weather[0].description} />
                            <p>Description: ${day.weather[0].description}</p>
                            <p>Temperature: ${day.main.temp}°F</p>
                            <p>Humidity: ${day.main.humidity}%</p>
                            <p>Pressure: ${day.main.pressure} hPa</p> 
                        </div>
                    `;
                }
                document.getElementById('weatherInfoCard').innerHTML += forecastHTML;
            });
    }
