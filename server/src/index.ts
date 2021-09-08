import 'express-async-errors'
import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.json('test'))

app.listen(port, () => console.log(`http://localhost:${port}`))
