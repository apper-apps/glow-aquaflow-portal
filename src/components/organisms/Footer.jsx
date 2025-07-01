import { Link } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const quickLinks = [
    { to: '/tariffs', label: 'Water Rates' },
    { to: '/faq', label: 'FAQs' },
    { to: '/contact', label: 'Contact Us' },
    { to: '/register', label: 'Register Account' },
  ]
  
  const services = [
    { to: '/projects', label: 'Current Projects' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Report Issues' },
  ]
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-lg">
                <ApperIcon name="Droplets" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AquaFlow Portal</h3>
                <p className="text-sm text-gray-300">Water Authority</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Providing reliable water services to our community with transparency, 
              efficiency, and environmental responsibility.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.to}>
                  <Link 
                    to={service.to}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" size={16} className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-300">Customer Service</p>
                  <p className="text-sm font-medium">(555) 123-4568</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="AlertTriangle" size={16} className="text-red-400" />
                <div>
                  <p className="text-sm text-gray-300">Emergency</p>
                  <p className="text-sm font-medium">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" size={16} className="text-gray-400" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <p className="text-sm font-medium">info@aquaflow.gov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AquaFlow Portal - Water Authority. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <ApperIcon name="Facebook" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <ApperIcon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              <ApperIcon name="Instagram" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer