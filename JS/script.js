async function getWeather() {
    const apiKey = '1fd6775f7dc6e47c23cf9f95dfc44086';
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }
    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey};
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        document.getElementById('weather').innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        alert(error.message);
    }
}