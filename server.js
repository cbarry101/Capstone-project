const express = require('express')
const cors = require('cors')
const app = express()

const ctrl = require('./controller.js')

app.use(cors())
app.use(express.json())


app.post('/api/users/', ctrl.login)
app.post('/api/register/', ctrl.register)

app.post('/api/cart', ctrl.addToCart)

app.get('/api/cart', ctrl.getBuild)

app.listen(3000, () => console.log('Take us to warp 3000!'))