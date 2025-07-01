import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const NewsUpdates = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Water Treatment Plant Opens',
      summary: 'Our new state-of-the-art water treatment facility begins operations this month, increasing capacity by 30%.',
      date: '2024-01-15',
      category: 'Infrastructure',
      urgent: false
    },
    {
      id: 2,
      title: 'Scheduled Maintenance - Downtown Area',
      summary: 'Planned maintenance on main water lines will affect service in downtown area from 2 AM to 6 AM on January 20th.',
      date: '2024-01-18',
      category: 'Maintenance',
      urgent: true
    },
    {
      id: 3,
      title: 'Water Quality Report Released',
      summary: 'Annual water quality report shows continued excellence in all safety and purity metrics.',
      date: '2024-01-10',
      category: 'Quality',
      urgent: false
    }
  ]
  
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed about service updates, maintenance schedules, and improvements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  {item.urgent && (
                    <div className="flex items-center space-x-1 text-red-600">
                      <ApperIcon name="AlertTriangle" size={16} />
                      <span className="text-xs font-medium">URGENT</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                  {item.summary}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <ApperIcon name="Calendar" size={16} />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <span className="flex items-center space-x-1">
                      <span>Read More</span>
                      <ApperIcon name="ArrowRight" size={14} />
                    </span>
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

export default NewsUpdates