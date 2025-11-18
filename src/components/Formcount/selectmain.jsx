import { useEffect, useState } from "react";

function Selectcount({ onClose, onSelect }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(onClose, 300);
  };

  const handleSelect = (type) => {
    setShow(false);
    setTimeout(() => onSelect(type), 300);
  };

  return (
    <div
      onClick={handleClose}
      className={`fixed w-full h-full top-0 left-0 bg-gray-900/70 flex items-center justify-center z-50
        ${show ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`rounded w-full max-w-[450px] p-6 bg-white
          ${show ? "scale-100" : "scale-90"} transition-transform duration-300`}
      >
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 font-bold text-black"
        >
          x
        </button>

        <h3 className="text-black mb-4 text-center">Qual tipo de conta?</h3>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="bg-gray-400 p-3 rounded-md hover:scale-110"
            onClick={() => handleSelect("cpf")}
          >
            CPF
          </button>

          <button
            className="bg-gray-400 p-3 rounded-md hover:scale-110"
            onClick={() => handleSelect("cnpj")}
          >
            CNPJ
          </button>
        </div>
      </div>
    </div>
  );
}

export default Selectcount;
