import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import NavigationItem from '@/components/molecules/NavigationItem'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const navigationItems = [
    { to: '/', label: 'Home' },
    { to: '/tariffs', label: 'Rates & Billing' },
    { to: '/about', label: 'About Us' },
    { to: '/projects', label: 'Projects' },
    { to: '/faq', label: 'FAQs' },
    { to: '/contact', label: 'Contact' },
  ]
  
  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-accent-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <ApperIcon name="AlertTriangle" size={16} />
            <span>Emergency: 24/7 Water Service - Call (555) 123-4567</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <ApperIcon name="Phone" size={16} />
            <span>Customer Service: (555) 123-4568</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-lg">
                <ApperIcon name="Droplets" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AquaFlow Portal</h1>
                <p className="text-xs text-gray-600">Water Authority</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <NavigationItem key={item.to} to={item.to}>
                  {item.label}
                </NavigationItem>
              ))}
            </nav>
            
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="secondary" size="sm">
                <Link to="/register">Register Account</Link>
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <ApperIcon name={isMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navigationItems.map((item) => (
                  <NavigationItem 
                    key={item.to} 
                    to={item.to}
                    className="block py-2"
                  >
                    {item.label}
                  </NavigationItem>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Button variant="primary" className="w-full">
                    <Link to="/register">Register Account</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

export default Header