import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const ProjectCard = ({ title, description, status, startDate, endDate, location, impact }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'text-green-700 bg-green-100'
      case 'in-progress':
        return 'text-blue-700 bg-blue-100'
      case 'planned':
        return 'text-yellow-700 bg-yellow-100'
      case 'delayed':
        return 'text-red-700 bg-red-100'
      default:
        return 'text-gray-700 bg-gray-100'
    }
  }
  
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'CheckCircle'
      case 'in-progress':
        return 'Clock'
      case 'planned':
        return 'Calendar'
      case 'delayed':
        return 'AlertTriangle'
      default:
        return 'Info'
    }
  }
  
  return (
    <Card hover className="space-y-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          <ApperIcon name={getStatusIcon(status)} size={16} />
          <span>{status}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-500 mb-1">Location</p>
          <p className="font-medium flex items-center">
            <ApperIcon name="MapPin" size={16} className="mr-2 text-gray-400" />
            {location}
          </p>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Timeline</p>
          <p className="font-medium">
            {new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}
          </p>
        </div>
      </div>
      
      {impact && (
        <div className="pt-3 border-t border-gray-100">
          <p className="text-gray-500 text-sm mb-1">Impact</p>
          <p className="text-sm font-medium text-primary-600">{impact}</p>
        </div>
      )}
    </Card>
  )
}

export default ProjectCard