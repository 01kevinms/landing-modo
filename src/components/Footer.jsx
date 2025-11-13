import xt from '../assets/x.png'
import inst from '../assets/inst.png'
import linke from '../assets/linke.png'
import padlock from '../assets/padlock.png'

export default function Footer() {
  const language = `
    relative text-lg font-semibold text-gray-800
    after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px]
    after:h-[3px] after:w-0 after:bg-[#189b20]
    after:-translate-x-1/2 after:transition-all after:duration-500
    hover:after:w-full
  `
  return (
    <footer className="bg-white py-8 grid grid-cols-1 md:grid-cols-3 text-center md:text-left px-8 gap-8">
      <div>
        <h3 className="font-semibold mb-2">NOSSAS REDES SOCIAIS</h3>
        <div className="flex justify-center md:justify-start gap-3">
          <img src={xt} className="h-6 cursor-pointer hover:opacity-75" />
          <img src={inst} className="h-6 cursor-pointer hover:opacity-75" />
          <img src={linke} className="h-6 cursor-pointer hover:opacity-75" />
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">AJUDA</h3>
        <p className="text-gray-600">Perguntas frequentes</p>
        <p className="text-gray-600">Licença</p>
      </div>

      <div className="flex flex-col items-center md:items-end gap-2">
        <div className="flex gap-5 items-center">
          <img src={padlock} className="h-5" />
          <p className={language}>Português</p>
          <p className={language}>English</p>
          <p className={language}>Espanhol</p>
        </div>
        <p className="text-sm text-gray-500 mt-3">© 2025 Moda Global. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
