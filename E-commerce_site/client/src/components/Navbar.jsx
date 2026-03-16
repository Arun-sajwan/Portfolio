import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCartIcon, Bars3Icon, XMarkIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const location = useLocation()

  useEffect(() => {
    // Mock cart count - replace with real context
    setCartCount(3)
  }, [])

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Shopify
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`py-2 px-3 border-b-2 font-medium ${location.pathname === '/' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              Home
            </Link>
            <Link to="/products" className={`py-2 px-3 border-b-2 font-medium ${location.pathname === '/products' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
              Products
            </Link>
            <Link to="/cart" className="relative group">
              <ShoppingCartIcon className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link to="/login">
              <UserIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link to="/" className="block px-3 py-2 text-gray-900 font-medium">Home</Link>
            <Link to="/products" className="block px-3 py-2 text-gray-900 font-medium">Products</Link>
            <Link to="/cart" className="block px-3 py-2 text-gray-900 font-medium">Cart</Link>
            <Link to="/login" className="block px-3 py-2 text-gray-900 font-medium">Login</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
