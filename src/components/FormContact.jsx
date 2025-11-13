import { useEffect, useState } from "react";

function FormContact({ onClose }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, []);
    const handleClose = () => {
        setShow(false);
        setTimeout(onClose, 300);
    }
  return (
    <div
      onClick={handleClose}
      className={`fixed w-full  h-full top-0 left-0 bg-gray-900/70 flex items-center justify-center z-50 
        ${show ? 'opacity-100 visible transition-opacity duration-300' : 'opacity-0 invisible transition-opacity duration-300'}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded w-full max-w-[450px] relative 
        ${show ? 'scale-100 transition-transform duration-300' : 'scale-90 transition-transform duration-300'}`}
      >
        <section className="bg-[#E4E4E4] py-8 text-center relative rounded-lg p-4">
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 bg-transparent border-none text-lg font-bold cursor-pointer text-black"
          >
            x
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-black">Fale Conosco</h2>
          <p className="text-gray-700 mb-6">
            Quer saber mais? Envie sua mensagem e entraremos em contato.
          </p>

          <form className="flex flex-col gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="p-2 rounded border w-full"
            />
            <input
              type="number"
              placeholder="Seu telefone"
              className="p-2 rounded border w-full"
            />
            <textarea
              placeholder="Sua mensagem"
              className="w-full p-2 rounded border-2 text-sm"
            ></textarea>
            <button
              type="button"
              onClick={handleClose}
              className="bg-[#182c9b] text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default FormContact;
