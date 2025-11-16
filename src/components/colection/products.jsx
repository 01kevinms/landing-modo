import { useWishlist } from "../../hook/wishlist";
import Reveal from "../Reveal";


function HeartIcon({ filled = false, size = 20 }) {
  const fill = filled ? "#ef4444" : "none"; // vermelho quando ativo
  const stroke = filled ? "#ef4444" : "#6b7280"; // cinza quando inativo
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.8 7.2c-1.3-3-4.2-4.1-7.2-2.8l-.6.3-.6-.3C8.9 3.1 6 4.2 4.7 7.2c-1.3 3 0 6.6 3 8.1L12 20.5l3.3-5.2c3-1.5 4.3-5.1 3.5-8.1z" />
    </svg>
  );
}


function ProductsGrid({ title, items }) {
  const { wishlist, toggle } = useWishlist();

  return (
    <>
      <Reveal className="bg-white py-12">
        <h2 className="text-center text-2xl font-semibold mb-6">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((p) => {
              const isFav = wishlist.some((item) => item.id === p.id);

              return (
                <div
                  key={p.id}
                  className="relative bg-gray-100 p-3 rounded-lg hover:shadow-lg transition"
                >
                  <button
                    onClick={() => toggle(p)}
                    className={`absolute top-2 right-2 hover:animate-pulse hover:scale-110 transition ${
                      isFav ? "text-red-500" : "text-gray-400"
                    }`}
                  > <HeartIcon filled={isFav} size={22} />                   
                  </button>

                  <img
                    src={p.image}
                    alt={p.name}
                    className="rounded-md mb-2 w-full h-40 object-cover"
                  />

                  <h3 className="font-medium">{p.name}</h3>

                  <p className="text-green-600 font-semibold">
                    R$ {p.price}
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-center w-full col-span-full text-gray-500">
              Nenhum produto encontrado.
            </p>
          )}
        </div>
      </Reveal>
    </>
  );
}

export default ProductsGrid;
