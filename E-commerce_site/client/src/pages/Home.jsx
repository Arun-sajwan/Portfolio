import ProductCard from '../components/ProductCard'
import { featuredProducts } from '../data/products'

const Home = () => {
  const handleAddToCart = (product) => {
    // Mock add to cart
    console.log('Added to cart:', product.name)
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Products */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our best sellers and new arrivals
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronics', 'Clothing', 'Home', 'Sports'].map((category) => (
              <div key={category} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    📱
                  </div>
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home

