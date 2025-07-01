export const getFAQs = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const faqs = [
    {
      Id: 1,
      category: 'billing',
      question: 'How do I read my water bill?',
      answer: 'Your water bill shows your usage in gallons, the rate per unit, and any applicable fees. The bill is calculated based on tiered pricing, where higher usage results in higher rates per gallon. You can find detailed explanations of each charge on the back of your bill.',
      views: 245,
      lastUpdated: '2024-01-15'
    },
    {
      Id: 2,
      category: 'billing',
      question: 'When is my water bill due?',
      answer: 'Water bills are due on the 15th of each month. If the 15th falls on a weekend or holiday, the due date is the next business day. Late payments may incur additional fees after the due date.',
      views: 189,
      lastUpdated: '2024-01-10'
    },
    {
      Id: 3,
      category: 'service',
      question: 'How do I report a water leak?',
      answer: 'To report a water leak, call our emergency line at (555) 123-4567 available 24/7. For non-emergency leaks, you can also submit a report through our online portal or call customer service during business hours.',
      views: 156,
      lastUpdated: '2024-01-12'
    },
    {
      Id: 4,
      category: 'service',
      question: 'What should I do if my water pressure is low?',
      answer: 'Low water pressure can be caused by several factors including pipe blockages, valve issues, or high demand periods. First, check if other neighbors are experiencing similar issues. If the problem persists, contact our technical support team for assistance.',
      views: 134,
      lastUpdated: '2024-01-08'
    },
    {
      Id: 5,
      category: 'quality',
      question: 'Is my tap water safe to drink?',
      answer: 'Yes, our water meets or exceeds all federal and state safety standards. We conduct regular testing and publish annual water quality reports. If you have concerns about taste or odor, please contact us for assistance.',
      views: 298,
      lastUpdated: '2024-01-14'
    },
    {
      Id: 6,
      category: 'quality',
      question: 'Why does my water sometimes taste or smell different?',
      answer: 'Occasional changes in taste or smell can result from seasonal variations, maintenance activities, or changes in the water source. These are typically harmless, but if you notice persistent issues, please contact our water quality team.',
      views: 167,
      lastUpdated: '2024-01-11'
    },
    {
      Id: 7,
      category: 'account',
      question: 'How do I set up automatic payments?',
      answer: 'You can set up automatic payments through our online customer portal or by calling customer service. We accept automatic payments from checking accounts, savings accounts, and credit cards.',
      views: 201,
      lastUpdated: '2024-01-09'
    },
    {
      Id: 8,
      category: 'account',
      question: 'How do I change my account information?',
      answer: 'Account information changes can be made through our online portal, by calling customer service, or by visiting our office. You may need to provide identification and proof of address for certain changes.',
      views: 143,
      lastUpdated: '2024-01-13'
    },
    {
      Id: 9,
      category: 'emergency',
      question: 'What constitutes a water emergency?',
      answer: 'Water emergencies include major leaks, burst pipes, water main breaks, complete loss of water service, or contamination concerns. For emergencies, call (555) 123-4567 immediately.',
      views: 178,
      lastUpdated: '2024-01-16'
    },
    {
      Id: 10,
      category: 'emergency',
      question: 'What should I do during a water outage?',
      answer: 'During a water outage, avoid using water unnecessarily, check our website or social media for updates, and ensure you have emergency water supplies. We will restore service as quickly as possible and provide regular updates.',
      views: 156,
      lastUpdated: '2024-01-07'
    }
  ]
  
  return [...faqs]
}

export const getFAQById = async (id) => {
  const faqs = await getFAQs()
  return faqs.find(faq => faq.Id === parseInt(id))
}

export const createFAQ = async (faqData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  const faqs = await getFAQs()
  const newId = Math.max(...faqs.map(f => f.Id)) + 1
  return { Id: newId, views: 0, lastUpdated: new Date().toISOString().split('T')[0], ...faqData }
}

export const updateFAQ = async (id, faqData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { Id: parseInt(id), lastUpdated: new Date().toISOString().split('T')[0], ...faqData }
}

export const deleteFAQ = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { success: true }
}