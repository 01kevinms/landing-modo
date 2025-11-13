import model from '../assets/model.png'

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] flex items-center justify-start">
      <img
        src={model}
        alt="model"
        className="w-full h-full object-cover brightness-75"
        loading="lazy"
      />
      <div className="absolute left-10 text-white max-w-md">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">
          Moda Global Para o Seu Negócio
        </h1>
        <p className="text-lg mb-4">
          Descubra coleções exclusivas que impulsionam suas vendas.
        </p>
        <button className="px-6 py-2 bg-[#18219b] rounded-md hover:bg-[#2f56c0] transition text-white font-medium">
          Explorar agora
        </button>
      </div>
    </section>
  )
}
