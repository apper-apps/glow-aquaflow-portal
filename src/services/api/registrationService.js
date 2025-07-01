export const getCustomerRegistrations = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const registrations = [
    {
      Id: 1,
      accountType: 'residential',
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@email.com',
      phone: '(555) 123-4567',
      serviceAddress: '123 Main Street, Cityville, ST 12345',
      mailingAddress: '123 Main Street, Cityville, ST 12345',
      startDate: '2024-02-01'
    },
    {
      Id: 2,
      accountType: 'commercial',
      firstName: 'Robert',
      lastName: 'Wilson',
      email: 'robert.wilson@business.com',
      phone: '(555) 987-6543',
      serviceAddress: '456 Business Ave, Cityville, ST 12345',
      mailingAddress: 'PO Box 789, Cityville, ST 12345',
      startDate: '2024-01-15'
    }
  ]
  
  return [...registrations]
}

export const getCustomerRegistrationById = async (id) => {
  const registrations = await getCustomerRegistrations()
  return registrations.find(registration => registration.Id === parseInt(id))
}

export const createCustomerRegistration = async (registrationData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  const registrations = await getCustomerRegistrations()
  const newId = Math.max(...registrations.map(r => r.Id)) + 1
  
  const newRegistration = {
    Id: newId,
    ...registrationData
  }
  
  return newRegistration
}

export const updateCustomerRegistration = async (id, registrationData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { Id: parseInt(id), ...registrationData }
}

export const deleteCustomerRegistration = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { success: true }
}