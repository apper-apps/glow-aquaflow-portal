import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Water,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">
                  Our Priority
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access your water services, view rates, manage your account, and stay informed 
                about projects in your area. Reliable service, transparent information.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex items-center space-x-2">
                <Link to="/register" className="flex items-center space-x-2">
                  <ApperIcon name="UserPlus" size={20} />
                  <span>Register Account</span>
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="flex items-center space-x-2">
                <Link to="/tariffs" className="flex items-center space-x-2">
                  <ApperIcon name="Calculator" size={20} />
                  <span>View Rates</span>
                </Link>
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50K+</div>
                <div className="text-sm text-gray-600">Customers Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">99.9%</div>
                <div className="text-sm text-gray-600">Service Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-gray-600">Emergency Support</div>
              </div>
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <ApperIcon name="Droplets" size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Water Quality</h3>
                    <p className="text-sm text-gray-600">Excellent - 99.8% purity</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <ApperIcon name="CheckCircle" size={24} className="text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Status</h3>
                    <p className="text-sm text-gray-600">All systems operational</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-info/10 p-3 rounded-lg">
                    <ApperIcon name="Clock" size={24} className="text-info" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Response Time</h3>
                    <p className="text-sm text-gray-600">Average 2 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent-400 to-primary-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-400 to-accent-500 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection