import userModel from '../models/userModel.js'

//Add items to user cart
const addToCart = async (req, res) => {
    try {

        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData

        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, message: 'Ajouté au panier !' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Une erreur est survenue' })
    }
}

//Remove items from user cart
const removeFromCart = async (req, res) => {
    try {

        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData

        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, message: 'Retiré du panier !' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Une erreur est survenue' })
    }
}

//Fetch user cart data
const getCart = async (req, res) => {
    try {

        let userData = await userModel.findById(req.body.userId)
        let cartData = await userData.cartData

        res.json({ success: true, cartData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Une erreur est survenue' })
    }
}

export { addToCart, removeFromCart, getCart }