import { useEffect, useState } from "react";
import { products } from "../../data/products";

const ShopPage = () => {
  const [items, setItems] = useState([]);

  //products.map((product, index) => {
  //  console.log(product.id + " u calling me twice, dawg?");
  //});

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    products.forEach((product, index) => {
      setItems((prev) => [...prev, product]);
    });
  };

  return (
    <div>
      <h1>this is ShopPage</h1>
      <div className="flex flex-col  items-center justify-center gap-5">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className=" bg-gray-200 p-4 rounded-lg drop-shadow-lg "
            >
              <div>
                <img src={item.image} alt={item.id} className="w-52" />
              </div>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ShopPage };
