import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import foto1 from '../assets/foto1.jpg'
import foto2 from '../assets/foto2.jpg'
import foto3 from '../assets/foto3.jpg'

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Estrutura</h2>
        
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-lg"
        >
          {[foto1, foto2, foto3].map((foto, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex justify-center">
                <img
                  src={foto}
                  alt={`Foto ${idx + 1} da loja`}
                  className="h-64 w-auto rounded-lg shadow object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default GallerySection
