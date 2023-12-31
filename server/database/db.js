
// Database Connection...

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection= async() =>{
    
    const URL = process.env.DB_URI ;

    try {
        await mongoose.connect(URL, {useNewUrlParser:true });
        console.log("DB Connected Succesfully..👍");
        
    } catch (error) {

        console.log("Error while connecting..", error.message);
    }
}

export default DBConnection;