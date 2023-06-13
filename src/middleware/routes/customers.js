import { Axios } from '../axios_init';


async function customers_find(params = {}) {
    try {
        let a = await Axios.get('/customers', {params})        
        return a  
    } catch (error) {
        throw error.response;
    }
}

// Axios update customer on /customers
async function update_customer(data){
    try {
        let a = await Axios.patch('/customers', data)        
        return a  
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}

// Axios delete customer on /customers
async function delete_customer(_id){
    try {
        let a = await Axios.delete('/customers/'+ _id)        
        return a  
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}

// Axios add customer on /customers
async function add_customer(newObject){
    try {
        let a = await Axios.post('/customers/', newObject)        
        return a  
    } catch (error) {
        console.log(error);
        throw error.response;
    }
}

export {customers_find, update_customer, delete_customer, add_customer}