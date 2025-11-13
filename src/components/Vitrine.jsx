function Vitrine() {
    const produtos = [
        { id: 1, name: 'Produto A', price: 99.99, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Produto B', price: 149.99, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Produto C', price: 79.99, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Produto D', price: 199.99, image: 'https://via.placeholder.com/150' },
    ];
    return(
        <>
        <section className="bg-white py-12">
  <h2 className="text-center text-2xl font-semibold mb-6">Produtos em Destaque</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
    {produtos.map((p) => (
      <div key={p.id} className="bg-gray-100 p-3 rounded-lg hover:shadow-lg transition">
        <img src={p.image} alt={p.name} className="rounded-md mb-2" />
        <h3 className="font-medium">{p.name}</h3>
        <p className="text-green-600 font-semibold">R$ {p.price}</p>
      </div>
    ))}
  </div>
</section>

        </>
    )
}
export default Vitrine