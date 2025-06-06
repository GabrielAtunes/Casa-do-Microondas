import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BrandsSection from '../components/BrandsSection'
import ServicesSection from '../components/ServicesSection'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Locations from '../components/LocationsSections'
import Delivery from '../components/DeliverySection'
import GallerySection from '../components/GallerySection'

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Locations />
      <Delivery />
      <BrandsSection />
      <ServicesSection />
      <GallerySection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default Home
