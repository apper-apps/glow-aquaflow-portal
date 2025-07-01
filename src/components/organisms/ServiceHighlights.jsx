import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const ServiceHighlights = () => {
  const services = [
    {
      icon: 'Calculator',
      title: 'Water Rates & Billing',
      description: 'View current water rates, calculate your bill, and understand our transparent pricing structure.',
      link: '/tariffs',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: 'HelpCircle',
      title: 'Frequently Asked Questions',
      description: 'Find answers to common questions about water services, billing, and account management.',
      link: '/faq',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: 'Building',
      title: 'About Our Authority',
      description: 'Learn about our organization, leadership team, strategic plans, and service commitments.',
      link: '/about',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: 'Wrench',
      title: 'Current Projects',
      description: 'Stay informed about infrastructure projects, improvements, and planned maintenance in your area.',
      link: '/projects',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: 'Phone',
      title: 'Contact & Support',
      description: 'Get in touch with our customer service team or report service issues and emergencies.',
      link: '/contact',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: 'UserPlus',
      title: 'Account Registration',
      description: 'Register for a new water service account and manage your service preferences online.',
      link: '/register',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ]
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your water services and stay informed about 
            our community's water infrastructure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-lg ${service.color}`}>
                    <ApperIcon name={service.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4">
                  <Button variant="secondary" className="w-full">
                    <Link to={service.link} className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ApperIcon name="ArrowRight" size={16} />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceHighlights