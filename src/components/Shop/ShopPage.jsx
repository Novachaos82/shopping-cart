import { useEffect, useState } from "react";
import { products } from "../../data/products";

const ShopPage = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("All products");
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

  const changeItems = (e) => {
    console.log(e.target.id);
    titleSelection(e.target.textContent);
    const newArr = products.filter((x) => x.category === e.target.id);
    setItems(newArr);
  };

  const titleSelection = (title) => {
    setTitle(title);
  };

  return (
    <div className="flex flex-row mt-12">
      <div className="w-2/6 text-right p-4">
        <div>Shop/</div>
        <div className="text-4xl">{title}</div>
        <div className="mt-52 font-semibold text-xl">
          <ul>
            <li id="keyboard" onClick={changeItems}>
              Keyboards
            </li>
            <li id="cpu" onClick={changeItems}>
              Processors
            </li>
            <li id="gpu" onClick={changeItems}>
              Graphics Cards
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row  items-center justify-center gap-5 flex-wrap w-3/6">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className=" bg-gray-200 p-4 rounded-lg drop-shadow-lg h-72"
            >
              <div>
                <img src={item.image} alt={item.id} className="w-52 " />
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
