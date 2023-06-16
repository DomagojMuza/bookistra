import axios from 'axios'


let Axios = axios.create({
    baseURL: "https://printera-back.vercel.app/api",
    // baseURL: "http://localhost:4000/api",
    timeout: 10000,
    headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`
    }
})


export { Axios }