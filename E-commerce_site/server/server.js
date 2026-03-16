import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static('../client/dist')) // Serve React build

// Basic routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'E-Commerce API is running!' })
})

app.get('/', (req, res) => {
  res.send('E-Commerce API - Use /api/* endpoints')
})

// Routes
// import productRoutes from './routes/products.js'
// import authRoutes from './routes/auth.js'
// app.use('/api/products', productRoutes)
// app.use('/api/auth', authRoutes)

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err))

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
