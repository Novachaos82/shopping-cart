import { useEffect, useState } from "react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";

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
    <div className="flex flex-row mt-12 gap-20">
      <div className="w-2/6 text-right p-4">
        <div>Shop/</div>
        <div className="text-4xl">{title}</div>
        <div className="mt-52 font-semibold text-xl">
          <ul>
            <li id="keyboard" onClick={changeItems} className="cursor-pointer">
              Keyboards
            </li>
            <li id="cpu" onClick={changeItems} className="cursor-pointer">
              Processors
            </li>
            <li id="gpu" onClick={changeItems} className="cursor-pointer">
              Graphics Cards
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row  items-start justify-start gap-5 flex-wrap w-3/6">
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className=" bg-gray-200 p-4 rounded-lg drop-shadow-lg h-72"
            >
              <Link to={`/shop/${item.id}`}>
                <div>
                  <div>
                    <img src={item.image} alt={item.id} className="w-52 " />
                  </div>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ShopPage };
