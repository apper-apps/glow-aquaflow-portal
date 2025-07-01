import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavigationItem = ({ to, children, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <NavLink
        to={to}
        className={({ isActive }) =>
          `nav-link ${isActive ? 'active' : ''} ${className}`
        }
      >
        {children}
      </NavLink>
    </motion.div>
  )
}

export default NavigationItem