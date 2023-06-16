import { Axios } from '../axios_init';

async function login(form){
    try {
        return await Axios.post('/user/login', form)
    } catch (error) {
        throw error.response;
    }
}

export { login }