import logo from '../assets/image.png'
import Hero from '../components/hero.jsx'
import Partners from '../components/partners.jsx'
import Testimonials from '../components/testimonials.jsx'
import CollectionsCarousel from '../components/collectionCarousel.jsx'
import About from '../components/about.jsx'
import Footer from '../components/Footer.jsx'
import Benefits from '../components/Benefits.jsx'
import Vitrine from '../components/Vitrine.jsx'
import FormContact from '../components/FormContact.jsx'
import { useState } from 'react'
import BlogSection from '../api/Blognot.jsx'
import Selectcount from '../components/Formcount/selectmain.jsx'
import Countshop from '../components/Formcount/cnpj.jsx'
import Countpeople from '../components/Formcount/cpf.jsx'

function Home() {
const [showForm, setShowForm] = useState(false);
const [openSelect, setOpenSelect] = useState(false);
const [type, setType] = useState(null);
const handleForm = () => setShowForm(true);
const closeForm = () => setShowForm(false);
const handleSelect=(selectedtype)=>setType(selectedtype)
const handleCloseAll = ()=>{
  setOpenSelect(false);
  setType(null)
}
   
  return (
    <div  className="bg-[#B4B4B4] min-h-screen overflow-x-hidden">
      <div className="bg-[#E4E4E4] mx-auto shadow-lg">
        {/* HEADER */}
        <header className="bg-white h-20 flex justify-between items-center px-8 shadow-sm">
      <img className="h-12" src={logo}  alt="logo" />

      <div>
        <button
          onClick={handleForm}
          className="border w-xs h-10 rounded-xl text-white bg-[#4851EF] hover:bg-blue-600 transition"
        >
          Fale Conosco
        </button>

        {showForm && <FormContact onClose={closeForm} />}
      </div>
    </header>

        {/* SECTIONS */}
        <div className='flex flex-col gap-5'>
        <Hero />
        <Benefits />
        <Vitrine />
        <CollectionsCarousel />
        <Testimonials />
        <Partners />
        <About />        
        <BlogSection/>      
        </div>

        <div>
<section className="bg-[#18429b] text-white text-center py-10">
  <h2 className="text-3xl font-bold mb-3">Pronto para transformar sua loja?</h2>
  <p className="mb-5">Cadastre-se agora e descubra o poder da Moda Global.</p>
  <button onClick={()=>setOpenSelect(true)}
   className="bg-white text-[#183b9b] px-6 py-2 rounded font-semibold hover:bg-gray-100">
    Quero começar
  </button>
  {openSelect && <Selectcount onClose={()=> setOpenSelect(false)} onSelect={handleSelect}/>}
  {type ==="cpf" &&(
     <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
          <Countpeople onFinish={handleCloseAll} />
        </div>
  )}
  {type ==="cnpj" &&(
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center justify-center">
          <Countshop onFinish={handleCloseAll} />
        </div>
  )}
</section>

        <Footer />      
        </div>
      
      </div>
    </div>
  )
}

export default Home
