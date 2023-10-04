import express from 'express'
import cors from 'cors'
import  connection  from './Database/DB.js'
import User from './Schema/UserSchema.js'
import product from './Schema/ProductSchema.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


// these all the API callings 
app.post('/login', async (req, res)=>{
    const { email, password } = req.body
    const findUser = await User.findOne({ email: email })
    try{
        if(findUser){
            if(password === findUser.password){
                res.status(201).json({ message: "Succesfully login into your account", user: findUser._id })
            }else{
                res.status(400).json({ message: "password is invalid" })
            }
        }else{
            res.status(401).json({message: "User not found"})
        }
    }catch(err){
        console.log(err);
    }
})

app.post('/register', async (req, res)=>{
    const { name, email, password } = req.body
    const findUser = await User.findOne({ email: email })

    try{
        if(findUser){
            res.status(401).json({ message: "User already registered plese login" })
        }else{
            const newUser = new User({
                name: name,
                email: email,
                password: password
            })
            await newUser.save()
            res.status(200).json({ message: "User succesfully registered please login" })
        }
    }catch(err){
        res.send({ message: err })
    }
})



connection()

const PORT = 8000

app.listen(PORT, ()=>{ console.log(`Server is running on the ${PORT}`) })