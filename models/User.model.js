import mongoose from "mongoose";
import { type } from "os";
const UserSchema=new mongoose.Schema(
    {
        username:
        {
            type: String,
            required: true,
            unique: true,

        },
        email:
        {
            type: String,
            required: true,

            },
        password:
        {
            type:String,
            required:true,
        }
        

    }
)

const UserModel=mongoose.model("user",UserSchema);
export default UserModel
