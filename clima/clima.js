const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=13cd67a481c8f14802f8d5c963df41db&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}