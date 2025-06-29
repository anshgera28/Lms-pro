
import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req,res) => {

    try{

        const {name,email,password} = req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"All fields are required", success:false});
        }

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exists", success:false});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            name,
            email,
            password:hashedPassword
        })

        return res.status(200).json({message:"Account created successfully", success:true});
        
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"failed to create account", success:false});
    }
}

export const login = async (req,res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required", success:false});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User does not exist", success:false});
        }

        const isPasswordMatched = await bcrypt.compare(password,user.password);
        if(!isPasswordMatched){
            return res.status(400).json({message:"Incorrect password", success:false});
        }
        generateToken(res, user, `Welcome back ${user.name}`);

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"failed to login", success:false});
    }
}