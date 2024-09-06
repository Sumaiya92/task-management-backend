import mongoose from "mongoose";
 
export const ConnectDB=async()=>
{
    try {
        await mongoose.connect('mongodb://localhost:27017/mernproject')
        console.log('MongoDB Connected...');
        } catch (error) {
            console.error(error.message);
            }
}