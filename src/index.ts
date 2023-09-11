import express from 'express'

import DiaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) //  middleware que transforma la req.body a json

const PORT = 5000

app.get('/ping', (_req, res) => {
    console.log ('someone pinged here' + new Date().toLocaleDateString())
    res.send('pong')
})

app.use ('/api/diaries', DiaryRouter)

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
