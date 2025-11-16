import { useState, useEffect } from "react";

export function useWishlist() {

  // Carregar do localStorage sem sobrescrever
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // Atualizar localStorage sempre que a lista mudar
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  function toggle(product) {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id);

      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  }

  function remove(id) {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  }

  return { wishlist, toggle, remove };
}
