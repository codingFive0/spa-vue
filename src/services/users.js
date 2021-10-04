import {http} from "./config";

export default {
    save:(user) => {
        return http.post('/create-user', user)
    },

    login:(user) => {
        return http.post('/login-user', user)
    }
}