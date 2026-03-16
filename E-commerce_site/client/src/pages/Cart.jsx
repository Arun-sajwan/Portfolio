import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // Mock cart data - replace with context/state management
    setCartItems([
      { id: 1, name: 'Wireless Headphones', price: 99.99, quantity: 2, image: '/vite.svg' },
      { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1, image: '/vite.svg' },
    ])
  }, [])

  const updateQuantity = (id, quantity) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ))
  }

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (cartItems.length === 0) {
    return (
      <div className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center py-24">
          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
            🛒
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-xl text-gray-600 mb-8">Looks like you haven't added anything yet.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 px-4 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items */}
        <div className="lg:w-3/4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-2xl font-bold text-indigo-600">${item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="font-semibold text-lg min-w-[2rem] text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/4">
          <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span className="text-green-600 font-semibold">FREE</span>
              </div>
              <div className="flex justify-between text-2xl font-bold pt-2 border-t">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-indigo-600 text-white py-4 px-6 rounded-xl text-lg font-semibold text-center block hover:bg-indigo-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Secure checkout. 30-day returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

