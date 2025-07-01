export const getTariffs = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const tariffs = [
    {
      Id: 1,
      category: 'Residential',
      tierName: 'Basic Tier',
      usageRange: '0-5000',
      ratePerUnit: 2.50,
      effectiveDate: '2024-01-01'
    },
    {
      Id: 2,
      category: 'Residential',
      tierName: 'Standard Tier',
      usageRange: '5001-10000',
      ratePerUnit: 3.25,
      effectiveDate: '2024-01-01'
    },
    {
      Id: 3,
      category: 'Residential',
      tierName: 'High Usage Tier',
      usageRange: '10001+',
      ratePerUnit: 4.00,
      effectiveDate: '2024-01-01'
    },
    {
      Id: 4,
      category: 'Commercial',
      tierName: 'Small Business',
      usageRange: '0-15000',
      ratePerUnit: 3.75,
      effectiveDate: '2024-01-01'
    },
    {
      Id: 5,
      category: 'Commercial',
      tierName: 'Large Business',
      usageRange: '15001+',
      ratePerUnit: 4.50,
      effectiveDate: '2024-01-01'
    },
    {
      Id: 6,
      category: 'Industrial',
      tierName: 'Manufacturing',
      usageRange: '0-50000',
      ratePerUnit: 5.00,
      effectiveDate: '2024-01-01'
    },
    {
      Id: 7,
      category: 'Industrial',
      tierName: 'Heavy Industry',
      usageRange: '50001+',
      ratePerUnit: 6.25,
      effectiveDate: '2024-01-01'
    }
  ]
  
  return [...tariffs]
}

export const getTariffById = async (id) => {
  const tariffs = await getTariffs()
  return tariffs.find(tariff => tariff.Id === parseInt(id))
}

export const createTariff = async (tariffData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  const tariffs = await getTariffs()
  const newId = Math.max(...tariffs.map(t => t.Id)) + 1
  return { Id: newId, ...tariffData }
}

export const updateTariff = async (id, tariffData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { Id: parseInt(id), ...tariffData }
}

export const deleteTariff = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { success: true }
}