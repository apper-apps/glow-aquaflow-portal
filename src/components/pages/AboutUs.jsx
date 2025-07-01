import { useState } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('overview')
  
  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Building' },
    { id: 'structure', label: 'Organization', icon: 'Users' },
    { id: 'publications', label: 'Publications', icon: 'FileText' },
    { id: 'strategic', label: 'Strategic Plans', icon: 'Target' }
  ]
  
  const leadership = [
    {
      name: 'Sarah Johnson',
      title: 'General Manager',
      department: 'Executive',
      experience: '15 years',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Michael Chen',
      title: 'Operations Director',
      department: 'Operations',
      experience: '12 years',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Customer Services Manager',
      department: 'Customer Relations',
      experience: '8 years',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'David Thompson',
      title: 'Engineering Director',
      department: 'Engineering',
      experience: '20 years',
      image: '/api/placeholder/150/150'
    }
  ]
  
  const publications = [
    {
      title: 'Annual Water Quality Report 2023',
      description: 'Comprehensive analysis of water quality metrics and safety standards.',
      date: '2024-01-15',
      type: 'Report',
      size: '2.3 MB'
    },
    {
      title: 'Community Water Conservation Guide',
      description: 'Tips and strategies for reducing water consumption at home.',
      date: '2023-12-10',
      type: 'Guide',
      size: '1.8 MB'
    },
    {
      title: 'Infrastructure Investment Plan',
      description: 'Five-year plan for water infrastructure improvements.',
      date: '2023-11-20',
      type: 'Plan',
      size: '3.1 MB'
    }
  ]
  
  const strategicGoals = [
    {
      title: 'Water Quality Excellence',
      description: 'Maintain 99.9% water quality standards and exceed regulatory requirements.',
      progress: 95,
      deadline: '2025'
    },
    {
      title: 'Infrastructure Modernization',
      description: 'Upgrade 75% of aging water infrastructure with smart technology.',
      progress: 68,
      deadline: '2026'
    },
    {
      title: 'Environmental Sustainability',
      description: 'Reduce environmental impact by 40% through renewable energy adoption.',
      progress: 42,
      deadline: '2027'
    },
    {
      title: 'Customer Satisfaction',
      description: 'Achieve 95% customer satisfaction rating through improved service delivery.',
      progress: 87,
      deadline: '2024'
    }
  ]
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide safe, reliable, and sustainable water services to our community 
                  while protecting public health and the environment through innovation, 
                  transparency, and exceptional customer service.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Core Values
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ApperIcon name="Check" size={16} className="text-green-500 mr-2" />
                    Safety and public health protection
                  </li>
                  <li className="flex items-center">
                    <ApperIcon name="Check" size={16} className="text-green-500 mr-2" />
                    Environmental stewardship
                  </li>
                  <li className="flex items-center">
                    <ApperIcon name="Check" size={16} className="text-green-500 mr-2" />
                    Transparent operations
                  </li>
                  <li className="flex items-center">
                    <ApperIcon name="Check" size={16} className="text-green-500 mr-2" />
                    Community engagement
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  By the Numbers
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary-600">50,000+</div>
                    <div className="text-sm text-gray-600">Customers Served</div>
                  </div>
                  <div className="text-center p-4 bg-accent-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent-600">250</div>
                    <div className="text-sm text-gray-600">Miles of Pipeline</div>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-lg">
                    <div className="text-2xl font-bold text-success">99.9%</div>
                    <div className="text-sm text-gray-600">Service Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-info/10 rounded-lg">
                    <div className="text-2xl font-bold text-info">24/7</div>
                    <div className="text-sm text-gray-600">Emergency Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        
      case 'structure':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Leadership Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {leadership.map((member) => (
                  <Card key={member.name} className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <ApperIcon name="User" size={32} className="text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-sm text-primary-600 mb-1">{member.title}</p>
                    <p className="text-xs text-gray-500 mb-2">{member.department}</p>
                    <p className="text-xs text-gray-600">{member.experience} experience</p>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Organizational Structure
              </h2>
              <Card>
                <div className="text-center p-8">
                  <div className="bg-primary-100 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-primary-800">Board of Directors</h3>
                    <p className="text-sm text-primary-600">Governance & Oversight</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-accent-50 rounded-lg p-4">
                      <h4 className="font-medium text-accent-800">Operations</h4>
                      <p className="text-sm text-accent-600">Water Treatment & Distribution</p>
                    </div>
                    <div className="bg-success/10 rounded-lg p-4">
                      <h4 className="font-medium text-success">Customer Services</h4>
                      <p className="text-sm text-success/80">Billing & Support</p>
                    </div>
                    <div className="bg-info/10 rounded-lg p-4">
                      <h4 className="font-medium text-info">Engineering</h4>
                      <p className="text-sm text-info/80">Infrastructure & Planning</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )
        
      case 'publications':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Publications & Reports
            </h2>
            <div className="space-y-4">
              {publications.map((pub) => (
                <Card key={pub.title} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg">
                      <ApperIcon name="FileText" size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{pub.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{pub.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>{pub.type}</span>
                        <span>{new Date(pub.date).toLocaleDateString()}</span>
                        <span>{pub.size}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">
                    <ApperIcon name="Download" size={16} className="mr-1" />
                    Download
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )
        
      case 'strategic':
        return (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Strategic Plans & Goals
            </h2>
            <div className="space-y-6">
              {strategicGoals.map((goal) => (
                <Card key={goal.title}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{goal.title}</h3>
                      <p className="text-gray-600">{goal.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{goal.progress}%</div>
                      <div className="text-sm text-gray-500">Target: {goal.deadline}</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )
        
      default:
        return null
    }
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About AquaFlow Water Authority
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Serving our community with reliable water services since 1985. 
          Learn about our mission, leadership, and commitment to excellence.
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'primary' : 'outline'}
            onClick={() => setActiveTab(tab.id)}
            className="flex items-center space-x-2"
          >
            <ApperIcon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </Button>
        ))}
      </div>
      
      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderTabContent()}
      </motion.div>
    </div>
  )
}

export default AboutUs