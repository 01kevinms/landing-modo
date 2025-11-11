import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import aspas from '../assets/aspas.png'
import perfil from '../assets/perfil.png'

const cards = [
  { id: 1, coment: 'Nossas vendas aumentaram muito!', shope: 'Loja Alpha' },
  { id: 2, coment: 'Qualidade muito alta e entrega rápida.', shope: 'Boutique Ômeg' },
  { id: 3, coment: 'Sempre compro aqui, recomendo!', shope: 'Asm Model' },
  { id: 4, coment: 'Melhor loja da região!', shope: 'Rest Shope' },
  { id: 5, coment: 'Atendimento excelente!', shope: 'Store Beta' },
]

const groupCards = (cards, size = 3) => {
  const grouped = []
  for (let i = 0; i < cards.length; i += size) {
    grouped.push(cards.slice(i, i + size))
  }
  return grouped
}

function Cardcomments({ coment, shope }) {
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <div className="flex gap-2">
          <img src={aspas} className="h-6" />
          <img src={perfil} className="h-10" />
        </div>
        <div>
          <h2>{coment}</h2>
          <p className="text-gray-400">- {shope}</p>
        </div>
      </div>
    </div>
  )
}

function Commentcarousel() {
  // agrupa e duplica para manter o loop com fade
  const groupedCards = groupCards(cards, 3)
  const loopedGroups = [...groupedCards, ...groupedCards]

  return (
    <div className="w-full py-6">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="transition-opacity duration-1000"
      >
        {loopedGroups.map((group, i) => (
          <SwiperSlide key={i}>
            <div className="flex justify-center gap-6">
              {group.map((c) => (
                <Cardcomments key={c.id + '-' + i} coment={c.coment} shope={c.shope} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Commentcarousel
