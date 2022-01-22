import axios from 'axios';

function getCurrentweather(location) {
return axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1deeb29a01a4a2adb5a44d6604b6e0c1`
);
}
function getForecast(Lat, Lon) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${Lat}&lon=${Lon}&units=imperial&appid=1deeb29a01a4a2adb5a44d6604b6e0c1`
    )
}
export{
    getCurrentweather,
    getForecast
}