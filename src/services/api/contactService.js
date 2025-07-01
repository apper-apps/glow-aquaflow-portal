export const getContactInquiries = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const inquiries = [
    {
      Id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      department: 'billing',
      subject: 'Billing Question',
      message: 'I have a question about my recent water bill charges.',
      timestamp: '2024-01-15T10:30:00Z'
    },
    {
      Id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '(555) 987-6543',
      department: 'technical',
      subject: 'Low Water Pressure',
      message: 'My water pressure has been consistently low for the past week.',
      timestamp: '2024-01-14T14:20:00Z'
    }
  ]
  
  return [...inquiries]
}

export const getContactInquiryById = async (id) => {
  const inquiries = await getContactInquiries()
  return inquiries.find(inquiry => inquiry.Id === parseInt(id))
}

export const createContactInquiry = async (inquiryData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 400))
  
  const inquiries = await getContactInquiries()
  const newId = Math.max(...inquiries.map(i => i.Id)) + 1
  
  const newInquiry = {
    Id: newId,
    timestamp: new Date().toISOString(),
    ...inquiryData
  }
  
  return newInquiry
}

export const updateContactInquiry = async (id, inquiryData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { Id: parseInt(id), ...inquiryData }
}

export const deleteContactInquiry = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { success: true }
}