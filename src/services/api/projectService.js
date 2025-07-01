export const getProjects = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const projects = [
    {
      Id: 1,
      title: 'Downtown Water Main Replacement',
      description: 'Replacing aging water mains along Main Street to improve reliability and reduce maintenance costs. This project will affect approximately 500 customers.',
      status: 'in-progress',
      startDate: '2024-01-15',
      endDate: '2024-03-30',
      location: 'Main Street, Downtown',
      impact: 'Temporary service interruptions during construction hours'
    },
    {
      Id: 2,
      title: 'Westside Treatment Plant Upgrade',
      description: 'Modernizing treatment equipment and installing new filtration systems to increase capacity and improve water quality.',
      status: 'in-progress',
      startDate: '2023-11-01',
      endDate: '2024-04-15',
      location: 'Westside Treatment Facility',
      impact: 'No service interruptions expected'
    },
    {
      Id: 3,
      title: 'Residential Meter Replacement Program',
      description: 'Installing smart water meters in residential areas to improve billing accuracy and help customers monitor usage.',
      status: 'planned',
      startDate: '2024-02-01',
      endDate: '2024-12-31',
      location: 'Residential areas citywide',
      impact: 'Brief service interruptions during meter installation'
    },
    {
      Id: 4,
      title: 'Emergency Water Storage Tank',
      description: 'Construction of a new 2-million-gallon water storage tank to ensure adequate supply during peak demand and emergencies.',
      status: 'planned',
      startDate: '2024-03-01',
      endDate: '2024-09-30',
      location: 'Hillside Reservoir Site',
      impact: 'Improved water pressure and reliability'
    },
    {
      Id: 5,
      title: 'Northside Pipeline Extension',
      description: 'Extending water service to newly developed areas in the north side of the city to serve 200 new residential units.',
      status: 'completed',
      startDate: '2023-08-01',
      endDate: '2023-12-15',
      location: 'Northside Development Area',
      impact: 'New service connections available'
    },
    {
      Id: 6,
      title: 'Water Quality Monitoring System',
      description: 'Installing automated water quality monitoring stations throughout the distribution system for real-time quality assurance.',
      status: 'completed',
      startDate: '2023-06-01',
      endDate: '2023-10-31',
      location: 'Multiple locations citywide',
      impact: 'Enhanced water quality monitoring and faster response times'
    },
    {
      Id: 7,
      title: 'Industrial District Infrastructure',
      description: 'Upgrading water infrastructure in the industrial district to support increased demand from new manufacturing facilities.',
      status: 'delayed',
      startDate: '2023-10-01',
      endDate: '2024-02-28',
      location: 'Industrial District',
      impact: 'Delayed due to permit issues, new timeline being determined'
    },
    {
      Id: 8,
      title: 'Leak Detection Program',
      description: 'Comprehensive system-wide leak detection using advanced acoustic technology to identify and repair hidden leaks.',
      status: 'in-progress',
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      location: 'Distribution system citywide',
      impact: 'Reduced water loss and improved system efficiency'
    }
  ]
  
  return [...projects]
}

export const getProjectById = async (id) => {
  const projects = await getProjects()
  return projects.find(project => project.Id === parseInt(id))
}

export const createProject = async (projectData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  const projects = await getProjects()
  const newId = Math.max(...projects.map(p => p.Id)) + 1
  return { Id: newId, ...projectData }
}

export const updateProject = async (id, projectData) => {
  await new Promise(resolve => setTimeout(resolve, 400))
  return { Id: parseInt(id), ...projectData }
}

export const deleteProject = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 300))
  return { success: true }
}