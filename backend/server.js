import express from 'express'
import cors from 'cors'

//App configuration
const app = express()
const port = 4000

//Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is working !')
})

app.listen(port, (req, res) => {
    console.log(`Server started on http://localhost:${port}`)
})