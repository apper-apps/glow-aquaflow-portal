import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import ProjectCard from '@/components/molecules/ProjectCard'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import ApperIcon from '@/components/ApperIcon'
import { getProjects } from '@/services/api/projectService'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [viewMode, setViewMode] = useState('list')
  const [statusFilter, setStatusFilter] = useState('all')
  
  const statusOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'planned', label: 'Planned' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'delayed', label: 'Delayed' }
  ]
  
  useEffect(() => {
    loadProjects()
  }, [])
  
  const loadProjects = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await getProjects()
      setProjects(data)
    } catch (err) {
      setError('Failed to load projects. Please try again.')
    } finally {
      setLoading(false)
    }
  }
  
  const filteredProjects = statusFilter === 'all' 
    ? projects 
    : projects.filter(project => project.status.toLowerCase() === statusFilter)
  
  const getStatusStats = () => {
    const stats = {
      total: projects.length,
      planned: projects.filter(p => p.status.toLowerCase() === 'planned').length,
      'in-progress': projects.filter(p => p.status.toLowerCase() === 'in-progress').length,
      completed: projects.filter(p => p.status.toLowerCase() === 'completed').length,
      delayed: projects.filter(p => p.status.toLowerCase() === 'delayed').length
    }
    return stats
  }
  
  if (loading) return <Loading type="cards" />
  if (error) return <Error message={error} onRetry={loadProjects} />
  
  const stats = getStatusStats()
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Current Projects
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed about ongoing infrastructure improvements, maintenance projects, 
          and future developments in your area.
        </p>
      </div>
      
      {/* Project Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <Card padding="sm" className="text-center">
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
          <div className="text-sm text-gray-600">Total Projects</div>
        </Card>
        <Card padding="sm" className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{stats.planned}</div>
          <div className="text-sm text-gray-600">Planned</div>
        </Card>
        <Card padding="sm" className="text-center">
          <div className="text-2xl font-bold text-blue-600">{stats['in-progress']}</div>
          <div className="text-sm text-gray-600">In Progress</div>
        </Card>
        <Card padding="sm" className="text-center">
          <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
          <div className="text-sm text-gray-600">Completed</div>
        </Card>
        <Card padding="sm" className="text-center">
          <div className="text-2xl font-bold text-red-600">{stats.delayed}</div>
          <div className="text-sm text-gray-600">Delayed</div>
        </Card>
      </div>
      
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        {/* Status Filter */}
        <div className="flex flex-wrap gap-2">
          {statusOptions.map((option) => (
            <Button
              key={option.value}
              variant={statusFilter === option.value ? 'primary' : 'outline'}
              onClick={() => setStatusFilter(option.value)}
              size="sm"
            >
              {option.label}
            </Button>
          ))}
        </div>
        
        {/* View Mode Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'list' ? 'primary' : 'outline'}
            onClick={() => setViewMode('list')}
            size="sm"
          >
            <ApperIcon name="List" size={16} />
          </Button>
          <Button
            variant={viewMode === 'map' ? 'primary' : 'outline'}
            onClick={() => setViewMode('map')}
            size="sm"
          >
            <ApperIcon name="Map" size={16} />
          </Button>
        </div>
      </div>
      
      {/* Content based on view mode */}
      {viewMode === 'list' ? (
        // List View
        <>
          {filteredProjects.length === 0 ? (
            <Empty 
              title="No projects found"
              description="No projects match your selected filter."
              icon="Search"
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.Id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          )}
        </>
      ) : (
        // Map View
        <Card className="h-96">
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <ApperIcon name="Map" size={48} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Project Map
              </h3>
              <p className="text-gray-600 mb-4">
                View all projects on an interactive map showing their locations and status.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Planned</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>In Progress</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Completed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span>Delayed</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
      
      {/* Project Updates Subscription */}
      <Card className="mt-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive notifications about project updates that may affect your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button>
              <ApperIcon name="Bell" size={20} className="mr-2" />
              Subscribe to Updates
            </Button>
            <Button variant="secondary">
              <ApperIcon name="Mail" size={20} className="mr-2" />
              Email Notifications
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Projects