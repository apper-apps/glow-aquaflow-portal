import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  title = 'No data available', 
  description = 'There are no items to display at this time.',
  icon = 'Search',
  actionLabel,
  onAction
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-12"
    >
      <div className="max-w-md mx-auto">
        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <ApperIcon name={icon} size={32} className="text-primary-500" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        {actionLabel && onAction && (
          <Button onClick={onAction} className="flex items-center space-x-2 mx-auto">
            <ApperIcon name="Plus" size={16} />
            <span>{actionLabel}</span>
          </Button>
        )}
      </div>
    </motion.div>
  )
}

export default Empty