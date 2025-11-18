import { useNavigate } from "react-router-dom"

function Faqpage() {
    
const navigate=useNavigate()
    return(
        <div className="min-h-screen bg-gray-100 p-8">
            <button onClick={()=> navigate("/landing-modo/")} className="bg-[#4851EF] text-white px-4 py-2 rounded hover:bg-blue-600 transition">Home</button>
        <h1 className="text-3xl font-bold mb-6 text-center mt-10">Perguntas Frequentes</h1>       
        <div className="bg-[#d8d8d8] w-max-full p-6 rounded-lg shadow-md space-y-4 text-center">
            <h3 className="font-bold">Como Posso me Cadastrar</h3>
            <p className="capitalize ">Para se cadastrar, clique no botão "Explorar agora" na página inicial e preencha o formulário de registro com suas informações ou no fim da pagina clique em "quero começar".</p>
        </div>
        </div>
    )
}

export default Faqpage