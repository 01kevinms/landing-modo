import { useState } from "react"
import ProductsGrid from "../components/colection/products"

import {
    acessorios, calca, calcados, camiseta, destaque,
    feminino, fitness, masculino, shorts
} from "../types/Productsgrid"

function Collections() {

    const [filter, setFilter] = useState("todos")
    const [visible, setVisible] = useState(true)

    const products = {
        feminino,
        masculino,
        calcados,
        acessorios,
        calca,
        fitness,
        destaque,
        camiseta,
        shorts,
        todos: [
            ...feminino, ...masculino, ...calcados, ...acessorios,
            ...calca, ...fitness, ...destaque, ...camiseta, ...shorts
        ]
    }

    const filters = [
        "todos",
        "feminino",
        "masculino",
        "calcados",
        "acessorios",
        "fitness",
        "calca",
        "camiseta",
        "shorts"
    ]

    const formatTitle = (t) =>
        t.charAt(0).toUpperCase() + t.slice(1)

    const navigate = () => {
       window.location.href="/landing-modo"
    }
    return (
       <div className="pb-12 p-5 max-w-7xl mx-auto">

  {/* HOME BUTTON */}
  <button
    onClick={navigate}
    className="w-max bg-[#4851EF] text-white px-4 py-2 rounded hover:bg-blue-600 transition"
  >
    Home
  </button>

  {/* FILTROS */}
  <div className="grid  md:grid-cols-2 mt-10 items-start gap-6">

    {/* TÍTULO + BOTÃO */}
    <div className="flex flex-col gap-3 items-center md:items-start">
      <h3 className="text-lg font-semibold">Filtrar por Categoria</h3>

      <button
        className="bg-black text-white hover:scale-105 cursor-pointer rounded-md px-4 py-2 transition"
        onClick={() => setVisible(!visible)}
      >
        {visible ? "Esconder Filtros" : "Mostrar Filtros"}
      </button>
    </div>

    {/* BOTÕES DE FILTRO */}
    {visible && (
      <div className="flex flex-wrap gap-3 justify-center md:justify-start transition-all duration-300">
        {filters.map((tipo) => (
          <button
            key={tipo}
            onClick={() => setFilter(tipo)}
            className={`
              px-3 py-2 rounded-full border transition cursor-pointer
              hover:scale-105 text-sm md:text-base
              ${
                filter === tipo
                  ? "bg-gray-800 text-white"
                  : "bg-white text-black border-gray-300 hover:bg-gray-200"
              }
            `}
          >
            {formatTitle(tipo).toUpperCase()} ({products[tipo].length})
          </button>
        ))}
      </div>
    )}

  </div>

  {/* PRODUTOS */}
  <div className="transition-opacity duration-500 mt-10" key={filter}>
    {filter === "todos" ? (
      filters
        .filter((t) => t !== "todos")
        .map((t) => (
          <ProductsGrid
            key={t}
            title={formatTitle(t)}
            items={products[t]}
          />
        ))
    ) : (
      <ProductsGrid
        title={formatTitle(filter)}
        items={products[filter]}
      />
    )}
  </div>

</div>

    )
}

export default Collections
