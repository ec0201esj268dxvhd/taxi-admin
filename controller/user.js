import userschema from "../models/userschema.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
    const { name, phone, email, password } = req.body;

    const user = new userschema({
        name : name,
        phone: phone,
        email: email,
        password: password
    })

    const existuser = await userschema.findOne({ phone });
    if (existuser) {
        return res.status(400).send({ message: "User already exists" });
    }
    
    await user.save();
    res.redirect('/admin');

}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = userschema.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.redirect('/admin');
    }

}

export { signup, login };