import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import modelo1 from '../assets/model1.png'
import modelo2 from '../assets/model2.png'
import modelo3 from '../assets/model3.png'
import modelo4 from '../assets/model4.png'

const cards = [
  { id: 1, title: 'COLEÇÃO PRIMAVERA', image: modelo1 },
  { id: 2, title: 'ALTA COSTURA', image: modelo2 },
  { id: 3, title: 'MODA CASUAL', image: modelo3 },
  { id: 4, title: 'ACESSÓRIOS', image: modelo4 },
]

function Card({ image, title }) {
  return (
    <div className="bg-[#D9D9D9] rounded-xl p-3 w-[180px] mx-auto transition-transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover rounded-lg mb-2"
        loading="lazy"
      />
      <h3 className="text-center text-sm font-semibold mb-1">{title}</h3>
      <button className="bg-[#2675EA] px-3 py-1 rounded text-white text-sm w-full hover:bg-blue-600 transition">
        Ver mais
      </button>
    </div>
  )
}

export default function CollectionsCarousel() {
  return (
    <section className="bg-white py-10">
      <h2 className="text-xl font-semibold px-8 mb-6">COLEÇÕES</h2>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((c) => (
          <SwiperSlide key={c.id}>
            <Card image={c.image} title={c.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
