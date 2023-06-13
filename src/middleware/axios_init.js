import axios from 'axios'


let Axios = axios.create({
    baseURL: "http://localhost:4000/api",
    timeout: 10000,
})


export { Axios }