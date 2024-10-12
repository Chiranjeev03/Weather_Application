const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '4ab2c7f4c9mshcc4e07c0be510b0p1d6d64jsn870c56a70556', // 
    'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
  }
};

async function fetchWeatherData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json(); 

    const temperature = result.current.temp_c;
    const condition = result.current.condition.text;
    const wind = result.current.wind_kph;
    const humidity = result.current.humidity;


    document.getElementById('temperature').textContent = temperature;
    document.getElementById('condition').textContent = condition;
    document.getElementById('wind-speed').textContent = wind;
    document.getElementById('humidity').textContent = humidity;
    
  } catch (error) {
    console.error(error);
  }
}

fetchWeatherData();
