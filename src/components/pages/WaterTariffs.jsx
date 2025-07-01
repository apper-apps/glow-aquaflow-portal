import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import TariffCard from '@/components/molecules/TariffCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import ApperIcon from '@/components/ApperIcon'
import { getTariffs } from '@/services/api/tariffService'

const WaterTariffs = () => {
  const [tariffs, setTariffs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [usage, setUsage] = useState('')
  const [calculatedBill, setCalculatedBill] = useState(null)
  
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' }
  ]
  
  useEffect(() => {
    loadTariffs()
  }, [])
  
  const loadTariffs = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getTariffs()
      setTariffs(data)
    } catch (err) {
      setError('Failed to load tariffs. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  const filteredTariffs = selectedCategory === 'all' 
    ? tariffs 
    : tariffs.filter(tariff => tariff.category.toLowerCase() === selectedCategory)
  
  const calculateBill = () => {
    if (!usage || isNaN(usage)) return
    
    const usageAmount = parseFloat(usage)
    const residential = tariffs.filter(t => t.category.toLowerCase() === 'residential')
    
    if (residential.length === 0) return
    
    let totalBill = 0
    let remainingUsage = usageAmount
    
    // Sort by usage range to apply tiered pricing
    const sortedTiers = residential.sort((a, b) => {
      const aMax = parseInt(a.usageRange.split('-')[1] || '999999')
      const bMax = parseInt(b.usageRange.split('-')[1] || '999999')
      return aMax - bMax
    })
    
    for (const tier of sortedTiers) {
      const [min, max] = tier.usageRange.split('-').map(n => parseInt(n) || 999999)
      const tierUsage = Math.min(remainingUsage, max - min + 1)
      
      if (tierUsage > 0) {
        totalBill += tierUsage * tier.ratePerUnit
        remainingUsage -= tierUsage
      }
      
      if (remainingUsage <= 0) break
    }
    
    setCalculatedBill(totalBill.toFixed(2))
  }
  
  if (loading) return <Loading type="cards" />
  if (error) return <Error message={error} onRetry={loadTariffs} />
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Water Rates & Billing
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transparent pricing structure for all customer categories. 
          Use our calculator to estimate your monthly bill.
        </p>
      </div>
      
      {/* Rate Calculator */}
      <Card className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Bill Calculator
            </h2>
            <div className="space-y-4">
              <Input
                label="Monthly Usage (gallons)"
                type="number"
                value={usage}
                onChange={(e) => setUsage(e.target.value)}
                placeholder="Enter your monthly water usage"
              />
              <Button onClick={calculateBill} className="w-full">
                <ApperIcon name="Calculator" size={20} className="mr-2" />
                Calculate Bill
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            {calculatedBill ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl"
              >
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Estimated Monthly Bill
                </h3>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  ${calculatedBill}
                </div>
                <p className="text-sm text-gray-600">
                  Based on {usage} gallons usage
                </p>
              </motion.div>
            ) : (
              <div className="text-center text-gray-500">
                <ApperIcon name="Calculator" size={64} className="mx-auto mb-4 opacity-50" />
                <p>Enter usage to calculate your bill</p>
              </div>
            )}
          </div>
        </div>
      </Card>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
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
      
      {/* Tariff Cards */}
      {filteredTariffs.length === 0 ? (
        <Empty 
          title="No tariffs found"
          description="No tariffs match your selected category."
          icon="Search"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTariffs.map((tariff) => (
            <TariffCard key={tariff.Id} {...tariff} />
          ))}
        </div>
      )}
      
      {/* Download Section */}
      <Card className="mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Download Rate Schedules
          </h2>
          <p className="text-gray-600 mb-6">
            Get detailed rate schedules and billing information in PDF format.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary">
              <ApperIcon name="Download" size={20} className="mr-2" />
              Residential Rates
            </Button>
            <Button variant="secondary">
              <ApperIcon name="Download" size={20} className="mr-2" />
              Commercial Rates
            </Button>
            <Button variant="secondary">
              <ApperIcon name="Download" size={20} className="mr-2" />
              Industrial Rates
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default WaterTariffs