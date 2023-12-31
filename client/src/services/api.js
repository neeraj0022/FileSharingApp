
import axios from 'axios';

const API_URL= 'http://localhost:8000';

export const uploadFile = async (data) =>{

    //axios returns an object - which consist of 
    try {
        let response= await axios.post(`${API_URL}/upload`, data);
        return response.data;
        
    } catch (error) {
        console.log('Error while calling the API', error.message);
    }
}

