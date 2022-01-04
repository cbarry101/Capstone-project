const bcrypt = require('bcryptjs')

const users = []

const cart = []


module.exports = {
    login: (req,res) => {
       const {userName, passWord} = req.body

       const [user] = users.filter(element => element.userName === userName)
       
       if (!user){
           return res.status(401).send('Doesnt match any account')
       }
       const workingPassword = bcrypt.compareSync(passWord,user.passHash)

       if (!workingPassword){
           return res.status(401).send('Doesnt match any account')
       }
       
       res.status(200).send(user.userName)
    },
    register: (req,res) => {
        const {userName, passWord} = req.body
        let salt = bcrypt.genSaltSync(5)
        let passHash = bcrypt.hashSync(passWord,salt)

        let user = {
            userName,
            passHash
        }
        users.push(user)
        res.status(200).send(user.userName)
    },

    addToCart: (req,res) => {
        console.log(req.body)
        const {name,price} = req.body
        let newItem = {
            name,
            price
        }
        cart.push(newItem)
        res.status(200).send(cart)
    },

    getBuild: (req,res) => {
        res.status(200).send(cart)
    }
}