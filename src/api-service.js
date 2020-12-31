
import axios from "axios";


export default class API {
    static async reverseGeocode(lat,lng) {
        const params = {
            access_key: 'ed4d9c782201a1cad205d9177d205534',
            query: `${lat},${lng}`
        }
        let res = await axios.
        get("http://api.positionstack.com/v1/reverse",

            {
                params
            }
        );
        return res
    }
    static async weathers(lat,lng){
        const params = {
            appid : '7c401344c3d2d8101a87f8c62812a0d8',
            lat: lat,
            lon: lng,
            exclude: 'hourly,minutely,alerts'
        }
        let res = await axios.get('https://api.openweathermap.org/data/2.5/onecall',
            {params}
        );
        return res
    }
    static async currency_code(country_code){
        let res = await axios.get(`https://restcountries.eu/rest/v2/alpha/${country_code}`);
        return res
    }
    static async exchange_rate(currency_code){

        let res = await axios.get(`https://data.fixer.io/api/latest?access_key=117b8ac21dfc496109ee16072d23ee4c&symbols=${currency_code}&format=1`);
        return res
    }
}
