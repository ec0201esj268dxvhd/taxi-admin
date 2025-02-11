import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const schema = mongoose.Schema;

const user = new schema({
    name: { type: String },
    phone: { type: Number },
    email: { type: String },
    password: { type: String }
})

user.methods.comparePassword = async function(password){
    try{
        return await bcrypt.compare(password, this.password)
    }catch(err){
        throw err;
    }
}

user.pre('save', async function(next) {
    try{
        if(!this.isModified('password')){
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);
        this.password = hashedPassword;
        next()
    } catch(err){
        next(err)
    }
})

const userschema = mongoose.model('User', user);



export default userschema