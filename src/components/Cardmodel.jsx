import modelo1 from '../assets/model1.png'
import modelo2 from '../assets/model2.png'
import modelo3 from '../assets/model3.png'
import modelo4 from '../assets/model4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Reveal from './Reveal'

const cards =[
    {id:1 , title:'COLECAO PRIMAVERA', image: modelo1},
    {id:2 , title:'ALTA COSTURA', image: modelo2},
    {id:3 , title:'MODA CASUAL', image: modelo3},
    {id:4 , title:'ACESSORIOS', image: modelo4}
]

function Cardmodel({ image, title }) {
  return (
    <div className='bg-[#D9D9D9] rounded-xl p-3 w-[180px] shrink-0 transition-all duration-700 hover:opacity-80 hover:scale-105'>
      <img
        src={image}
        alt={title}
        className='h-40 w-full object-cover rounded-lg transition-opacity duration-700 hover:opacity-75'
      />
      <h3 className='text-center mt-2 text-sm font-semibold'>{title}</h3>
      <button className='bg-[#2675EA] mt-2 px-3 py-1 rounded text-white text-sm w-full hover:bg-blue-600 transition-colors duration-300'>
        Ver mais
      </button>
    </div>
  )
}

function Carousel() {
  return (
    <Reveal className="w-full max-w-5xl mx-auto py-6">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10 "
      >
        {cards.map((c) => (
          <SwiperSlide key={c.id}>
            <Cardmodel image={c.image} title={c.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Reveal>
  )
}
export default Carousel
