import Reveal from "./Reveal";

function Vitrine() {
   const produtos = [
        { 
            id: 1, 
            name: 'Camisa Premium Masculina', 
            price: 99.99, 
            image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80' 
        },
        { 
            id: 2, 
            name: 'Vestido Elegante Feminino', 
            price: 149.99, 
            image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80' 
        },
        { 
            id: 3, 
            name: 'Tênis Casual Unissex', 
            price: 79.99, 
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80' 
        },
        { 
            id: 4, 
            name: 'Jaqueta Premium', 
            price: 199.99, 
            image: 'https://images.unsplash.com/photo-1641943632479-3798ef1e14c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGphcXVldGElMjBwcmVtaXVufGVufDB8fDB8fHww' 
        },
    ];
    return(
        <>
        <Reveal className="bg-white py-12">
  <h2 className="text-center text-2xl font-semibold mb-6">Produtos em Destaque</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
    {produtos.map((p) => (
      <div key={p.id} className="bg-gray-100 p-3 rounded-lg hover:shadow-lg transition">
        <img src={p.image} className="rounded-md mb-2 h-70 w-full" />
        <h3 className="font-medium">{p.name}</h3>
        <p className="text-green-600 font-semibold">R$ {p.price}</p>
      </div>
    ))}
  </div>
</Reveal>

        </>
    )
}
export default Vitrine