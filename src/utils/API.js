import axios from "axios";

const google = {
    BASEURL: process.env.REACT_APP_googleURL,
    APIKEY: process.env.REACT_APP_googleKEY
}

const openweather = {
    BASEURL: process.env.REACT_APP_openweatherURL,
    APIKEY: process.env.REACT_APP_openweatherKEY
}
const API = {

    getGeocode: function (zip) {
        return axios.get(google.BASEURL + zip + google.APIKEY);
    },

    oneCall: function (long, lat) {
        let latitude = `lat=${lat}&`
        let longitude = `lon=${long}&`;
        return axios.get(openweather.BASEURL + latitude + longitude + openweather.APIKEY);
    }

}

export default API;