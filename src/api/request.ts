import axios from "react-native-axios";

const instance = axios.create({
    // FIXME: Change to config file
    baseURL: 'https://api.devptt.site:3457'
})

export default {
    get: async function (path: string, headers: object = null, params: object = null) {
        return instance.get(path, {headers, params})
    }
}