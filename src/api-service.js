import axios from "axios";
import {base,apikey,otpBaseUrl} from './App'
// const base="kalamlabs/"
// const base="http://127.0.0.1:8000/kalamlabs/"
// const apikey = 'f8753847-ffd5-11ea-9fa5-0200cd936042'
// const otpBaseUrl = 'https://2factor.in/API/V1/'
const sms = 'SMS'
// const sms = 'VOICE'
const csrfToken = document.cookie['csrftoken']
// axios.defaults.xsrfHeaderName = "X-CSRFToken";
export default class API {
    static async register(body) {
        let res =await axios.create({baseURL: base}).post("register/",body,{headers:{'Content-Type':'application/json',
            'X-CSRFToken':csrfToken }});
        return res
    }
    static async bookTrial(body) {
        console.log('trial',body)
        let res =await axios.create({baseURL: base}).post("book_trial/", body,{headers:{'Content-Type':'application/json',
                'X-CSRFToken':csrfToken }});
        return res
    }
    static async sendMail(body) {

        let res =await axios.create({baseURL: base}).post("Payment/sendMail/", body,{headers:{'Content-Type':'application/json',
                'X-CSRFToken':csrfToken }});
        return res
    }
    static async couponVerification(body) {

        let res =await axios.create({baseURL: base}).post(`Payment/${body}/couponVerification/`, body,{headers:{'Content-Type':'application/json',
                'X-CSRFToken':csrfToken }});
        return res
    }
    static async getInTouch(body) {

        let res =await axios.create({baseURL: base}).post("get_in_touch/", body,{headers:{'Content-Type':'application/json',
                'X-CSRFToken':csrfToken }});
        return res
    }
    static async verifySignature(body) {
                console.log(body)
        let res =await axios.create({baseURL: base}).post("Payment/verifySignature/", body,
            {headers:{'Content-Type':'application/json',
                'X-CSRFToken':csrfToken }});
        return res
    }

    static async sendOtp(body) {
        let res =await axios.create({baseURL: otpBaseUrl}).get(`${apikey}/${sms}/${body}/AUTOGEN/Kalam Labs OTP`);
        return res
    }
    static async getOrderId(body) {
        let res =await axios.create({baseURL: base}).post('Payment/getOrderId/',body,{headers:{'Content-Type':'application/json',
                'X-CSRFToken':csrfToken }});
        return res
    }
    static async verifyOtp(body) {

        let res =await axios.create({baseURL: otpBaseUrl}).get(`${apikey}/${sms}/VERIFY/${body['sessionId']}/${body['otp']}`);
        return res
    }
}

