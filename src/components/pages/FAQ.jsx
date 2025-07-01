import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import SearchBar from '@/components/molecules/SearchBar'
import FAQItem from '@/components/molecules/FAQItem'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import ApperIcon from '@/components/ApperIcon'
import { getFAQs } from '@/services/api/faqService'

const FAQ = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'service', label: 'Water Service' },
    { value: 'quality', label: 'Water Quality' },
    { value: 'account', label: 'Account Management' },
    { value: 'emergency', label: 'Emergency' }
  ]
  
  useEffect(() => {
    loadFAQs()
  }, [])
  
  const loadFAQs = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getFAQs()
      setFaqs(data)
    } catch (err) {
      setError('Failed to load FAQs. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category.toLowerCase() === selectedCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })
  
  // Popular FAQs (sorted by views)
  const popularFAQs = [...faqs].sort((a, b) => b.views - a.views).slice(0, 3)
  
  if (loading) return <Loading type="cards" />
  if (error) return <Error message={error} onRetry={loadFAQs} />
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about our water services, billing, 
          and account management.
        </p>
      </div>
      
      {/* Search and Popular FAQs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <SearchBar
            placeholder="Search FAQs..."
            onSearch={setSearchQuery}
            className="mb-6"
          />
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'primary' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Popular FAQs Sidebar */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Most Popular
          </h2>
          <div className="space-y-3">
            {popularFAQs.map((faq) => (
              <div key={faq.Id} className="p-3 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-sm text-gray-900 mb-1">
                  {faq.question}
                </h3>
                <div className="flex items-center text-xs text-gray-500">
                  <ApperIcon name="Eye" size={12} className="mr-1" />
                  <span>{faq.views} views</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      
      {/* FAQ List */}
      {filteredFAQs.length === 0 ? (
        <Empty 
          title="No FAQs found"
          description="No FAQs match your search criteria. Try adjusting your search or category filter."
          icon="Search"
        />
      ) : (
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.Id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <FAQItem 
                question={faq.question}
                answer={faq.answer}
              />
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Contact Support */}
      <Card className="mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Contact our customer support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              <ApperIcon name="Phone" size={20} className="mr-2" />
              Call Support
            </Button>
            <Button variant="secondary">
              <ApperIcon name="Mail" size={20} className="mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default FAQ