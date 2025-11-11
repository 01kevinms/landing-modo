import logo from './assets/image.png'
import model from './assets/model.png'
import aboutus from './assets/aboutus.png'
import xt from './assets/x.png'
import inst from './assets/inst.png'
import linke from './assets/linke.png'
import padlock from './assets/padlock.png'
import Carousel from './components/Cardmodel'
import Commentcarousel from './components/Cardscomments'



function App() {
  const language=`
    relative text-lg font-semibold text-gray-800
    after:content-[''] after:absolute after:left-1/2 after:bottom-[-8px]
    after:h-[3px] after:w-0 after:bg-[#189b20]
    after:-translate-x-1/2 after:transition-all after:duration-500
    hover:after:w-full
  `
  return (
    <div className="bg-[#B4B4B4] h-full place-items-center-safe py-10">
      <div className="bg-[#E4E4E4] h-full  relative">
        <header className="bg-white h-20 flex justify-around items-center"> 
          <img className='h-15'src={logo} /> 
          <button className='border w-[25%] h-10 rounded-xl text-white bg-[#4851EF]'>butao</button>
        </header>
        
        {/* card background */}
        <div className='relative'> 
          <div className='absolute z-1 flex flex-col h-full w-full  justify-center gap-2'>
          <h3 className='text-gray-100 px-10 text-2xl w-[300px]'>Moda Global Para o Seu Negocio</h3>
          <p className='text-gray-100 px-10'>descubra colecoes exclusivas para o seu sucesso</p>
          </div>
          <img className='relative' src={model}/>
        </div>

        {/* card feats */}
        <div className='bg-white my-4 h-35 grid'>
          <h2 className='px-10 py-3'>MARCAS PARCEIRAS</h2>
          <div className='grid grid-cols-4 text-center justify-items-center-safe'>
            <h2 className='w-30'><span className='font-bold'>URBAN </span>THREADS</h2>
            <h2 className='w-max'>NOVA CHIC</h2>
            <h2 className='w-max'><span className='font-bold'>ECLIPSE</span> STYLE</h2>
            <h2 className='w-max'>RENEZZA</h2>
          </div>
        </div>

        {/* card of comments */}
        <div  className='bg-white my-4 h-35 grid grid-cols-1'>
          <Commentcarousel/>
        </div>

        {/* cards of coletions */}
        <div className='bg-white my-4 h-[340px] grid'>
          <h2 className='px-8 py-2'>COLECOES</h2>
          <div className='grid px-4 gap-4'>
          <Carousel/>
          </div>
        </div>
        
          {/* card of description shop */}
        <div className='bg-white my-4 h-[300px] grid'>
        <h2 className='px-10 py-4'>SOBRE NOS</h2>
        <div className='grid grid-cols-2 gap-20'>
        <div className='flex gap-10 px-10'>
        <img src={aboutus} className='h-50' />
        <p>aaaa</p>
        </div>
        <div>          
            <input type="text" placeholder='nome da loja' className='bg-gray-300 rounded p-2' />
        </div>
        </div>
        </div>

        {/* foot */}
        <footer className='bg-white my-4 h-[110px] grid grid-cols-3 items-center'>
<div className='grid w-max h-max gap-2 p-6'>
  <h3>NOSSAS REDES SOCIAIS</h3>
  <div className='flex gap-2  w-max h-max'>
  <img src={xt} className='h-8 hover:scale-115 cursor-pointer' />
  <img src={inst} className='h-8 hover:scale-115 cursor-pointer' />
  <img src={linke} className='h-8 hover:scale-115 cursor-pointer' />
  </div>
</div>
 <div className='grid'>
  <h2>AJUDA</h2>
  <br />
  <p>PERGUNTAS FREQUENTES</p>
  <p>LICENÇA</p>
 </div>
 <div className='flex gap-5 w-max h-max cursor-pointer items-center relative'>
  {/* improvement idea for padlock open if mouse are in other language */}
  <img src={padlock} className='h-5 left-3 relative'/>
  <p className={language}>Portugues</p>
  <p className={language}>English</p>
  <p className={language}>Espanhol</p>
 </div>
        </footer>
      </div>  
    </div>
  )
}

export default App
