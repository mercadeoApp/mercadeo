import express from 'express'
import morgan from 'morgan'
import indexRoutes from './Routes/index'
import path from 'path'

const app = express()

app.set('port',process.env.PORT || 4000)

app.use(morgan('dev'))
app.use(express.json())
app.use('/api',indexRoutes)
app.use('/UPLOADS',express.static(path.resolve('UPLOADS')))

export default app;