import { Axios } from '../axios_init';




async function objects_find(params = {}) {
    try {
        let a = await Axios.get('/object', {params})        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function object_image(params) {
    console.log(params);
    let res = await Axios.get('/image', {params});        
    return res;
}

async function update_object(data){
    try {
        let a = await Axios.patch('/object', data)        
        return a  
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}

async function delete_object(_id){
    try {
        let a = await Axios.delete('/object/'+ _id)        
        return a  
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}

async function add_object(newObject){
    try {
        let a = await Axios.post('/object/', newObject)        
        return a  
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}

export {objects_find, object_image, update_object, delete_object, add_object}