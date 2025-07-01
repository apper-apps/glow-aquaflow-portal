import { useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import ApperIcon from '@/components/ApperIcon'
import { createContactInquiry } from '@/services/api/contactService'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const departments = [
    { value: '', label: 'Select Department' },
    { value: 'customer-service', label: 'Customer Service' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'emergency', label: 'Emergency Services' },
    { value: 'new-service', label: 'New Service Connections' },
    { value: 'general', label: 'General Inquiries' }
  ]
  
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Customer Service',
      details: '(555) 123-4568',
      subtitle: 'Mon-Fri, 8AM-6PM',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: 'AlertTriangle',
      title: 'Emergency Services',
      details: '(555) 123-4567',
      subtitle: '24/7 Emergency Line',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      details: 'info@aquaflow.gov',
      subtitle: 'Response within 24 hours',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: 'MapPin',
      title: 'Main Office',
      details: '123 Water Authority Blvd',
      subtitle: 'Cityville, ST 12345',
      color: 'text-purple-600 bg-purple-100'
    }
  ]
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await createContactInquiry(formData)
      toast.success('Your inquiry has been submitted successfully!')
      setFormData({
        name: '',
        email: '',
        phone: '',
        department: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      toast.error('Failed to submit inquiry. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with our team for support, inquiries, or to report service issues. 
          We're here to help with all your water service needs.
        </p>
      </div>
      
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="text-center">
              <div className={`w-16 h-16 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4`}>
                <ApperIcon name={info.icon} size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-lg font-medium text-gray-800 mb-1">{info.details}</p>
              <p className="text-sm text-gray-600">{info.subtitle}</p>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Contact Form and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send us a Message
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Department <span className="text-error">*</span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                >
                  {departments.map((dept) => (
                    <option key={dept.value} value={dept.value}>
                      {dept.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="form-input"
                placeholder="Please describe your inquiry or issue..."
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <ApperIcon name="Send" size={20} />
                  <span>Send Message</span>
                </span>
              )}
            </Button>
          </form>
        </Card>
        
        {/* Office Location */}
        <Card>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Visit Our Office
          </h2>
          
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ApperIcon name="MapPin" size={48} className="text-primary-500 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">123 Water Authority Blvd</p>
              </div>
            </div>
            
            {/* Office Hours */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
            
            {/* Department Directory */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Department Directory</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <ApperIcon name="Users" size={20} className="text-gray-500" />
                  <div>
                    <p className="font-medium text-sm">Customer Service</p>
                    <p className="text-xs text-gray-600">Front desk, billing inquiries</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <ApperIcon name="Wrench" size={20} className="text-gray-500" />
                  <div>
                    <p className="font-medium text-sm">Technical Support</p>
                    <p className="text-xs text-gray-600">Service issues, repairs</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <ApperIcon name="FileText" size={20} className="text-gray-500" />
                  <div>
                    <p className="font-medium text-sm">Administration</p>
                    <p className="text-xs text-gray-600">General inquiries, permits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Contact