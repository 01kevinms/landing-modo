import aboutus from '../assets/aboutus.png'

export default function About() {
  return (
    <section className="bg-white py-10 px-6 grid md:grid-cols-2 gap-8 items-center">
      <img src={aboutus} alt="sobre nós" className="rounded-lg shadow-md" loading="lazy" />
      <div>
        <h2 className="text-2xl font-semibold mb-4">SOBRE NÓS</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Somos uma plataforma que conecta marcas e lojistas às tendências globais da moda.
          Nossa missão é impulsionar o sucesso do seu negócio com qualidade, rapidez e estilo.
        </p>
        <input
          type="text"
          placeholder="Nome da loja"
          className="bg-gray-200 p-2 rounded w-full md:w-[80%] focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>
    </section>
  )
}
