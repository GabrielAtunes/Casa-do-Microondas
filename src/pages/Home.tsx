import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BrandsSection from '../components/BrandsSection'
import ServicesSection from '../components/ServicesSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Locations from '../components/LocationsSections'

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Locations />
      <BrandsSection />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home
