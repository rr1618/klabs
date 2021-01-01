
import axios from "axios";


export default class API {
    static async reverseGeocode(lat,lng) {
        let res = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C+${lng}&key=8817c0ae0d9845a0ab914e95ac3f9a01&pretty=1`,
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
    static async exchange_rate_usd(currency_code){

        let res = await axios.get(`https://api.exchangeratesapi.io/latest?symbols=${currency_code}&base=USD`);
        return res
    }
    static async exchange_rate_eur(currency_code){

        let res = await axios.get(`https://api.exchangeratesapi.io/latest?symbols=${currency_code}&base=EUR`);
        return res
    }
    static async exchange_rate_day_before(currency_code){
        let iso_today,iso_yesterday
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed-864e5)
        iso_today  = today.toISOString().slice(0,10)
        const yesterday = new Date(timeElapsed- 2*864e5)
        iso_yesterday  = yesterday.toISOString().slice(0,10)
        console.log(iso_today,iso_yesterday)
        let res_usd = await axios.get(`https://api.exchangeratesapi.io/history?start_at=${iso_yesterday}&end_at=${iso_today}&base=USD&symbols=${currency_code}`);
        let res_eur = await axios.get(`https://api.exchangeratesapi.io/history?start_at=${iso_yesterday}&end_at=${iso_today}&base=EUR&symbols=${currency_code}`);

        let change1,data1,col1='green',sign1='+',diff
        data1 = res_usd.data.rates

        diff = (data1[iso_today].INR -data1[iso_yesterday].INR)/data1[iso_yesterday].INR
        change1=Math.round(((diff)*100)*100)/100
        if(change1<0)
        {
            sign1=''
            col1='red'
        }

        let change2,data2,col2='green',sign2='+',diff2
        data2 = res_eur.data.rates

        diff2 = (data2[iso_today].INR -data2[iso_yesterday].INR)/data2[iso_yesterday].INR
        change2=Math.round(((diff2)*100)*100)/100
        if(change2<0)
        {
            sign2=''
            col2='red'
        }


        return {usd:change1,sign_usd:sign1,col_usd:col1,sign_eur:sign2,eur:change2,col_eur:col2}
    }
}
