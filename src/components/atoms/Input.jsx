const Input = ({ 
  label, 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  error = '', 
  required = false,
  className = '',
  ...props 
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`form-input ${error ? 'border-error focus:ring-error' : ''} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-sm text-error">{error}</p>
      )}
    </div>
  )
}

export default Input