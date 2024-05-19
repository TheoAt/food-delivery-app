import userModel from "../models/userModel.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

//Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body

    try {

        const user = await userModel.findOne({ email })

        if (!user) {
            return res.json({ success: false, message: "Cet utilisateur n'existe pas..." })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ success: false, message: "Le mot de passe est invalide..." })
        }

        const token = createToken(user._id)
        res.json({ success: true, token})

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: "Une erreur est survenue" })
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body

    try {

        //check if user is already registered
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: 'Cet email est déjà utilisé...' })
        }

        //validate email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Merci d'entrer un mail valide !" })
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Merci d'entrer un mot de passe plus long !" })
        }

        //hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Une erreur est survenue" })
    }
}


export { loginUser, registerUser }