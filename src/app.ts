import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import refreshToken from './controllers/refreshToken.controller'

const app = express()

// Settings
app.set('port', process.env.PORT || 4000)

 // Middlewares
 app.use(cors({
    origin: process.env.ORIGIN || "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())

// Routes 
app.post('/refresh_token', refreshToken)

export default app