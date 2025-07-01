import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="max-w-md mx-auto">
        <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <ApperIcon name="AlertTriangle" size={32} className="text-red-500" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Oops! Something went wrong
        </h3>
        
        <p className="text-gray-600 mb-6">
          {message}
        </p>
        
        {onRetry && (
          <Button onClick={onRetry} className="flex items-center space-x-2 mx-auto">
            <ApperIcon name="RefreshCw" size={16} />
            <span>Try Again</span>
          </Button>
        )}
      </div>
    </motion.div>
  )
}

export default Error