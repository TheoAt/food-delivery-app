import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://theod3v:MiamChef38!@cluster0.7cbbbti.mongodb.net/miam-chef').then(() => console.log('DB Connected'))
}