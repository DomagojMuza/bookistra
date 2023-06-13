import { Axios } from '../axios_init';


async function reservations_find(params = {}) {
    try {
        let a = await Axios.get('/reservation', {params})        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function reservations(object_id) {
    try {
        let a = await Axios.get('/reservation/'+ object_id)        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function update_reservation(item) {
    try {
        let a = await Axios.patch('/reservation/', item)        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function add_reservation(item) {
    try {
        let a = await Axios.post('/reservation/', item)        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function delete_reservation(_id) {
    try {
        let a = await Axios.delete('/reservation/' + _id)        
        return a  
    } catch (error) {
        throw error.response;
    }
}



export {reservations_find, reservations, update_reservation, add_reservation, delete_reservation }