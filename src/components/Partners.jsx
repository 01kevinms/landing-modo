import face from '../assets/faceh.png'
import sifrao from '../assets/sifrao.png'
import arrow from '../assets/arrow.png'
import bottomshop from '../assets/bottomshop.png'
import tampashop from '../assets/tampashop.png'
import './styles/emoji.css';
import Reveal from './Reveal'

export default function Partners() {


  return (
    <Reveal className="bg-white py-10 text-center">
      <h2 className="text-xl font-semibold mb-4">ESTATISTICAS</h2>
<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 place-items-center'>

                {/* numbers of stores */}
        <div className="border h-[200px] w-[200px] p-1 rounded-full">
          <div 
          className="border h-full w-full p-15 rounded-full grid justify-center content-center relative">
          <img src={tampashop}   className='h-2 bottom-3 mx-auto relative px-1 shwiggle'/>
          <img src={bottomshop}  className='h-10 bottom-5 mx-auto relative '/>
           <div className='relative bottom-2'>
           <p>+120</p>
           <p className="w-max">Lojas Parceiras</p>           
           </div>
          </div>
        </div> 

                  {/* clients satisfied */}
        <div className="border h-[200px] w-[200px] p-1 rounded-full">
          <div 
          className="border h-full w-full p-15 rounded-full grid justify-center content-center relative">
          <img src={face} alt="emoji de loja" 
          className={`h-10 bottom-5 mx-auto relative wiggleX`}/>
           <div className='relative bottom-2'>
           <p>4.9/5</p>
           <p className="w-max">Clientes Satisfeitos</p>           
           </div>
          </div>
        </div> 

        {/* number of sold products */}
        <div className="border h-[200px] w-[200px] p-1 rounded-full">
          <div 
          className="border h-full w-full p-15 rounded-full grid justify-center content-center relative">
          <img src={sifrao} alt="emoji de loja" className='h-10 money-glow bottom-5 mx-auto relative'/>
           <div className='relative bottom-2'>
           <p>+5000</p>
           <p className="w-max">Produtos Vendidos</p>           
           </div>
          </div>
        </div>

         <div className="border h-[200px] w-[200px] p-1 rounded-full">
          <div 
          className="border h-full w-full p-15 rounded-full grid justify-center content-center relative">
          <img src={arrow} alt="emoji de loja" className='h-10 rotate-180 bottom-5 mx-auto relative arrowwig'/>
           <div className='relative bottom-2'>
            <p>+50%</p>        
           <p className="w-30">Aumento Medio Das Leads</p>           
           </div>
          </div>
        </div>
            </div>
    </Reveal>
  )
}
