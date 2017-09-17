var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=d0dc21b46f7ac107e9eae97ce51a00f0&units=metric';


//d0dc21b46f7ac107e9eae97ce51a00f0
module.exports = {
  getTemp: function(location){
    var encodeLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return  axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err){
      throw new Error(err.response.data.message);
    });
  }
}
