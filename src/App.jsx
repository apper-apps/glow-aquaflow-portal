import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import Home from '@/components/pages/Home'
import WaterTariffs from '@/components/pages/WaterTariffs'
import FAQ from '@/components/pages/FAQ'
import AboutUs from '@/components/pages/AboutUs'
import Contact from '@/components/pages/Contact'
import Registration from '@/components/pages/Registration'
import Projects from '@/components/pages/Projects'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tariffs" element={<WaterTariffs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  )
}

export default App