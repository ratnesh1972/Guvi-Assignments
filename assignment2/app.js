const api_key = '2d08737bd80c1425af5223986169f4ea';

function getCityData() {
    //Create an XMLHTTPRequest obj.
    const http = new XMLHttpRequest();

    //Open request
    http.open('GET', 'https://restcountries.eu/rest/v2/all', true);

    //Setup onload function
    http.onload = function () {

        const data = JSON.parse(this.responseText);
        data.forEach(country => {
            //Pass country and co-ordinates to function.
            getWeatherData(country.name, ...country.latlng);
        });
    }

    //Send request.
    http.send();
}



//Fetch weather data using country name, lattitude and longitude.
function getWeatherData(country, lat, lon) {

    //Create a request obj
    const http = new XMLHttpRequest();

    //Open request
    http.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`, true);

    //Setup onload function.
    http.onload = function () {
        try {
            const data = JSON.parse(this.response);
            console.log(`${country} : ${data.main.temp}`);
        } catch (e) {
            console.log('Invalid co-ordinates for ' + country + e.message);
        }
    }

    //Send request
    http.send();

}

getCityData();