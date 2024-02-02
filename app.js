const express = require('express')
const sequelize = require('./config/database')
const http=require('http')
const app = express()
const port = 3000

const userRouter=require('./routes/user')
app.use(express.json())

app.use('/users',userRouter)

app.get('/', (req, res) => {
    res.send('CrewMate')
})


sequelize.sync()
    .then(() => {
        console.log('Database synced')
    })
    .catch((err) => {
        console.error('Error syncing database:', err)
    });


app.get('/', (req, res) => {
    res.send('CrewMate')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})