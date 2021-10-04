import {http} from "./config";

export default {
    login: (account) => {
        return http.post('/account-login', account)
    },

    getAccount: (account) => {
        return http.get('/account-data/' + account)
    },

    addCredit: (data) => {
        return http.post('/account-add-credit', data)
    },

    removeCredit: (data) => {
        return http.post('/account-remove-credit', data)
    }
}