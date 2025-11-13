import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'

const testimonials = [
  { id: 1, coment: 'Nossas vendas aumentaram muito!', shope: 'Loja Alpha' },
  { id: 2, coment: 'Qualidade muito alta e entrega rápida.', shope: 'Boutique Ômeg' },
  { id: 3, coment: 'Sempre compro aqui, recomendo!', shope: 'Asm Model' },
  { id: 4, coment: 'Melhor loja da região!', shope: 'Rest Shope' },
  { id: 5, coment: 'Atendimento excelente!', shope: 'Store Beta' },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-12">
      <h2 className="text-center text-xl font-semibold mb-6">O QUE DIZEM NOSSOS CLIENTES</h2>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="flex flex-col items-center text-center px-6">
              <p className="text-lg italic max-w-lg">“{t.coment}”</p>
              <span className="text-gray-500 mt-2">– {t.shope}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
