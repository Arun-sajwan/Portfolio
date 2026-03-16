import mongoose from 'mongoose'
import Product from './models/Product.js'
import dotenv from 'dotenv'

dotenv.config()

const seedProducts = [
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Premium noise-cancelling headphones with 30 hours battery life.',
    price: 99.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&w=800&q=80',
    stock: 50,
    featured: true
  },
  {
    name: 'Smart Fitness Watch',
    description: 'Track heart rate, steps, sleep with personalized insights.',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&w=800&q=80',
    stock: 30,
    featured: true
  },
  // Add more from client data...
]

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce')
    console.log('🌱 Connected to MongoDB')

    await Product.deleteMany({})
    console.log('🗑️ Cleared products collection')

    for (let product of seedProducts) {
      await new Product(product).save()
    }
    
    console.log(`✅ Seeded ${seedProducts.length} products`)
    process.exit(0)
  } catch (error) {
    console.error('❌ Seed error:', error)
    process.exit(1)
  }
}

seedDB()
