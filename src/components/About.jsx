import aboutus from '../assets/aboutus.png'
import Reveal from './Reveal'

export default function About() {
  return (
    <Reveal className="bg-white py-10 px-6 grid md:grid-cols-2 gap-8 items-center">
      <img src={aboutus} alt="sobre nós" className="rounded-lg shadow-md" loading="lazy" />
      <div>
        <h2 className="text-2xl font-semibold mb-4">✨ SOBRE A MODO</h2>
        <p className="text-gray-700 leading-relaxed mb-4">         
        Unimos elegância, tecnologia e propósito para redefinir o jeito de vestir — seja para marcas, criadores ou pessoas que amam moda.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4"> Na Modo, acreditamos que a moda é mais do que tendência — é expressão, cultura e inovação.
        Trabalhamos com marcas e consumidores para oferecer peças que unem estilo, conforto e responsabilidade.</p>
        <p className="text-gray-700 leading-relaxed mb-4">
        Atuamos tanto no varejo quanto no mercado corporativo — oferecendo soluções em moda para empresas, influenciadores e consumidores que buscam exclusividade.
        </p>
      </div>
    </Reveal>
  )
}
