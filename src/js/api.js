export const getWeatherData = async (location = 'La Vega') => {
    try {
        let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=baf91d611713492c854134715203012&q=${location}`, {
            mode: 'cors',
        })
        if (res.status === 400) throw new Error('Not found');
        res = await res.json();
        return res;
    } catch (error) {
        return getWeatherData()
    }
}