import { useState } from 'react'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import ApperIcon from '@/components/ApperIcon'
import { createCustomerRegistration } from '@/services/api/registrationService'

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    accountType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceAddress: '',
    mailingAddress: '',
    startDate: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const steps = [
    { id: 1, title: 'Account Type', icon: 'UserCheck' },
    { id: 2, title: 'Personal Info', icon: 'User' },
    { id: 3, title: 'Address Details', icon: 'MapPin' },
    { id: 4, title: 'Review & Submit', icon: 'CheckCircle' }
  ]
  
  const accountTypes = [
    {
      value: 'residential',
      title: 'Residential',
      description: 'For homes and apartments',
      icon: 'Home',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      value: 'commercial',
      title: 'Commercial',
      description: 'For businesses and offices',
      icon: 'Building',
      color: 'text-green-600 bg-green-100'
    },
    {
      value: 'industrial',
      title: 'Industrial',
      description: 'For manufacturing and large facilities',
      icon: 'Factory',
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
  
  const handleAccountTypeSelect = (type) => {
    setFormData(prev => ({
      ...prev,
      accountType: type
    }))
  }
  
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }
  
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  const handleSubmit = async () => {
    setIsSubmitting(true)
    
    try {
      await createCustomerRegistration(formData)
      toast.success('Registration submitted successfully! We will contact you within 2 business days.')
      
      // Reset form
      setFormData({
        accountType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceAddress: '',
        mailingAddress: '',
        startDate: ''
      })
      setCurrentStep(1)
    } catch (error) {
      toast.error('Failed to submit registration. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.accountType !== ''
      case 2:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 3:
        return formData.serviceAddress && formData.mailingAddress && formData.startDate
      default:
        return true
    }
  }
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Select Account Type
              </h2>
              <p className="text-gray-600">
                Choose the type of water service account you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accountTypes.map((type) => (
                <motion.div
                  key={type.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAccountTypeSelect(type.value)}
                  className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-200 ${
                    formData.accountType === type.value
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-full ${type.color} flex items-center justify-center mx-auto mb-4`}>
                      <ApperIcon name={type.icon} size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Personal Information
              </h2>
              <p className="text-gray-600">
                Please provide your contact information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                value={formData.lastName}
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
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Address Information
              </h2>
              <p className="text-gray-600">
                Provide service and billing address details.
              </p>
            </div>
            
            <div className="space-y-6">
              <Input
                label="Service Address"
                name="serviceAddress"
                value={formData.serviceAddress}
                onChange={handleInputChange}
                placeholder="123 Main Street, City, State 12345"
                required
              />
              <Input
                label="Mailing Address"
                name="mailingAddress"
                value={formData.mailingAddress}
                onChange={handleInputChange}
                placeholder="Same as service address or different"
                required
              />
              <Input
                label="Preferred Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        )
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Review Your Information
              </h2>
              <p className="text-gray-600">
                Please review your details before submitting.
              </p>
            </div>
            
            <div className="space-y-4">
              <Card padding="sm">
                <h3 className="font-semibold text-gray-900 mb-3">Account Type</h3>
                <p className="text-gray-600 capitalize">{formData.accountType}</p>
              </Card>
              
              <Card padding="sm">
                <h3 className="font-semibold text-gray-900 mb-3">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Name:</span>
                    <span className="ml-2 font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Email:</span>
                    <span className="ml-2 font-medium">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Phone:</span>
                    <span className="ml-2 font-medium">{formData.phone}</span>
                  </div>
                </div>
              </Card>
              
              <Card padding="sm">
                <h3 className="font-semibold text-gray-900 mb-3">Address Information</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-500">Service Address:</span>
                    <span className="ml-2 font-medium">{formData.serviceAddress}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Mailing Address:</span>
                    <span className="ml-2 font-medium">{formData.mailingAddress}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Start Date:</span>
                    <span className="ml-2 font-medium">{new Date(formData.startDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )
        
      default:
        return null
    }
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Water Service Registration
        </h1>
        <p className="text-xl text-gray-600">
          Register for new water service in just a few simple steps.
        </p>
      </div>
      
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                currentStep >= step.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {currentStep > step.id ? (
                  <ApperIcon name="Check" size={20} />
                ) : (
                  <ApperIcon name={step.icon} size={20} />
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 mx-2 ${
                  currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
          </span>
        </div>
      </div>
      
      {/* Form Content */}
      <Card className="mb-8">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderStepContent()}
        </motion.div>
      </Card>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
          className="flex items-center space-x-2"
        >
          <ApperIcon name="ChevronLeft" size={20} />
          <span>Back</span>
        </Button>
        
        {currentStep < 4 ? (
          <Button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex items-center space-x-2"
          >
            <span>Next</span>
            <ApperIcon name="ChevronRight" size={20} />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <ApperIcon name="Send" size={20} />
                <span>Submit Registration</span>
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}

export default Registration