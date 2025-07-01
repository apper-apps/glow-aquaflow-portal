import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const TariffCard = ({ category, tierName, usageRange, ratePerUnit, effectiveDate }) => {
  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'residential':
        return 'Home'
      case 'commercial':
        return 'Building'
      case 'industrial':
        return 'Factory'
      default:
        return 'Droplets'
    }
  }
  
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'residential':
        return 'text-green-600 bg-green-100'
      case 'commercial':
        return 'text-blue-600 bg-blue-100'
      case 'industrial':
        return 'text-purple-600 bg-purple-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }
  
  return (
    <Card hover className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg ${getCategoryColor(category)}`}>
            <ApperIcon name={getCategoryIcon(category)} size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{tierName}</h3>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-primary-600">${ratePerUnit}</p>
          <p className="text-sm text-gray-500">per unit</p>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Usage Range:</span>
          <span className="font-medium">{usageRange}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Effective Date:</span>
          <span className="font-medium">{new Date(effectiveDate).toLocaleDateString()}</span>
        </div>
      </div>
    </Card>
  )
}

export default TariffCard