import { Axios } from '../axios_init';

async function pricelist_items(object_id) {
    try {
        let a = await Axios.get('/pricelist/'+ object_id)        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function update_pricelist_item(item) {
    try {
        let a = await Axios.patch('/pricelist/', item)        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function add_pricelist_item(item) {
    try {
        let a = await Axios.post('/pricelist/', item)        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function delete_pricelist_item(item) {
    try {
        let a = await Axios.delete('/pricelist/' + item._id)        
        return a  
    } catch (error) {
        throw error.response;
    }
}

async function calculation(params) {
    try {
        let a = await Axios.post('/calculator/', params)        
        return a  
    } catch (error) {
        throw error.response;
    }
}


export {pricelist_items, update_pricelist_item, add_pricelist_item, delete_pricelist_item, calculation}