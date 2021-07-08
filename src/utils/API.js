import axios from "axios";
const google = {
    BASEURL: 'https://maps.googleapis.com/maps/api/geocode/json?address=',
    APIKEY: '&key=AIzaSyDzw75WtngqfIV3n-TT86ObXsC7aGzjgd0'
}

const openweather = {
    BASEURL: 'http://api.openweathermap.org/data/2.5/forecast?',
    APIKEY: 'cnt=10&units=imperial&appid=9d4cd5d4d8f7ff93e056ff8b08335fff'
}
export default {

    getGeocode: function (zip) {
        return axios.get(google.BASEURL + zip + google.APIKEY);
    },

    oneCall: function(long, lat) {
        
        let latitude = `lat=${lat}&`
        let longitude = `lon=${long}&`;
        // console.log(openweather.BASEURL + latitude + longitude + openweather.APIKEY);
        return axios.get(openweather.BASEURL + latitude + longitude + openweather.APIKEY);
    }
}