const express = require('express')
const sequelize = require('./config/database')
const http=require('http')
const app = express()
const port = 3000

const userRouter=require('./routes/user')
const clubRouter=require('./routes/club')
const activityRouter=require('./routes/activity')
const memberRouter=require('./routes/member')
const applyRouter=require('./routes/apply')
const historyRouter=require('./routes/history')
const scheduleRouter=require('./routes/schedule')
app.use(express.json())
app.use(
    session({
        secret: 'secret-key',
        resave:false,
        saveUninitialized: true,
        cookie:{
            maxAge: HTMLSourceElement,
        },
    })
)

app.use('/users',userRouter)
app.use('/club',clubRouter)
app.use('/activity',activityRouter)
app.use('/member',memberRouter)
app.use('/apply',applyRouter)
app.use('/history',historyRouter)
app.use('/schdule',scheduleRouter)
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