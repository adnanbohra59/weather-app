const apiKey = "dcd5bcda991d442ab37144042260407";

async function getWeather() {

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try{

        const response = await fetch(url);
        const data = await response.json();

        if(data.cod != 200){
            alert("City not found!");
            return;
        }

        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temp").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("weather").innerText = data.weather[0].main;
        document.getElementById("humidity").innerText = data.main.humidity + "%";
        document.getElementById("wind").innerText = data.wind.speed + " km/h";

    }

    catch(error){
        alert("Something went wrong!");
    }

}