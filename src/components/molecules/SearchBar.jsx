import { useState } from 'react'
import ApperIcon from '@/components/ApperIcon'

const SearchBar = ({ 
  placeholder = "Search...", 
  onSearch, 
  className = '' 
}) => {
  const [query, setQuery] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(query)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <ApperIcon 
          name="Search" 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20} 
        />
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>
    </form>
  )
}

export default SearchBar