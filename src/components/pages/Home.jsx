import HeroSection from '@/components/organisms/HeroSection'
import ServiceHighlights from '@/components/organisms/ServiceHighlights'
import NewsUpdates from '@/components/organisms/NewsUpdates'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServiceHighlights />
      <NewsUpdates />
    </div>
  )
}

export default Home