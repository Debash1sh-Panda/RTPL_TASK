import React, { useEffect, useState } from "react";
import Cards from "./Cards";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const allProducts = data.categories.flatMap(
          (category) => category.category_products
        );
        setProducts(allProducts);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-950">
          RTPL STORE
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (
            <Cards products={products} />
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
