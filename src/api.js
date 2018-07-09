import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: `http://mpmapi.test:8080`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
