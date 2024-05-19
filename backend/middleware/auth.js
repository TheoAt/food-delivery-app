import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {

    const { token } = req.headers

    if (!token) {
        return res.json({ success: false, message: "Vous ne pouvez pas acceder à ces informations..." })
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.body.userId = token_decode.id
        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Une erreur est survenue' })
    }

}

export default authMiddleware