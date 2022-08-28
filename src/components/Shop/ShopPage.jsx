import { useEffect, useState } from "react";
import { products } from "../../data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//import { ImageToggleOnMouseOver } from "./imageToggleOnMouseOver";

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

  const animations = {
    initial: { opacity: 0, x: -150 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { x: { type: "spring", duration: 0.9, bounce: 0.4 } },
    },
    exit: {
      opacity: 0,
      x: 150,
      transition: { x: { type: "tween", duration: 0.4, bounce: 0.3 } },
    },
  };

  return (
    //<motion.div
    //  initial={{ opacity: 0, scale: 0.5 }}
    //  animate={{ opacity: 1, scale: 1 }}
    //  transition={{ duration: 0.5 }}
    //>

    <div className=" flex flex-row mt-12 gap-20">
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
      {/*<div className="flex flex-row  items-start justify-start gap-10 flex-wrap w-3/6">*/}
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex flex-row  items-start justify-start gap-10 flex-wrap w-3/6"
      >
        {items.map((item) => {
          return (
            <div key={item.id}>
              <div className="">
                <div>
                  <div>
                    <Link to={`/shop/${item.id}`}>
                      <div className="w-72 h-72 object-contain flex justify-center bg-shop-cards items-center p-4">
                        <img src={item.image} alt={item.id} className="" />
                        {/*<img src={item.preview} alt={item.id} className="" />*/}
                      </div>
                    </Link>
                    {/*<ImageToggleOnMouseOver
                        primaryImg={item.image}
                        secondaryImg={item.preview}
                        alt={item.id}
                      />*/}
                  </div>
                  <div className="font-bold text-start text-lg">
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                  </div>
                  <div className="text-start text-md">${item.price}</div>
                </div>
              </div>
            </div>
          );
        })}
        {/*</div>*/}
      </motion.div>
    </div>
  );
};

export { ShopPage };
