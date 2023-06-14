import axios from 'axios'


let Axios = axios.create({
    baseURL: "https://printera-back.vercel.app/api",
    timeout: 10000,
})


export { Axios }