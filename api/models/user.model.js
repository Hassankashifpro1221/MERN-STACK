import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar:{
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4KGHb0zM_ceTNV3g8PCaW5UEyuYQU954ZCA&s"   
    },
}, 

{timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;