export const getWeatherData = async (location = 'La Vega') => {
    let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=baf91d611713492c854134715203012&q=${location}`, {
      mode: 'cors',
    })
    res = await res.json();
    return res;
}