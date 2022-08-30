import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../../data/products";
import { motion } from "framer-motion";
import { AiTwotoneStar } from "react-icons/ai";

const ProductPage = ({ addingToCart }) => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  console.log(parseInt(id, 10) + "params");

  useEffect(() => {
    getProductData();
    // eslint-disable-next-line
  }, []);
  //product.map((obj) => {
  //  console.log(obj.image);
  //});
  //  console.log(product[0]);

  const getProductData = () => {
    const newProductArr = products.filter((x) => x.id === parseInt(id, 10));
    setProduct(newProductArr);
  };

  return (
    <motion.div
      className=""
      initial={{ y: 200, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-center h-screen ">
        {product.map((obj, index) => {
          return (
            <div
              key={index}
              className=" bg-black1  flex flex-row gap-8 items-center mt-10 w-4/6 h-5/6 rounded-lg"
            >
              <div className=" flex justify-center w-full h-full">
                <img
                  className="w-4/6 h-full object-contain"
                  src={obj.image}
                  alt={obj.id}
                />
              </div>

              <div
                id="buttons"
                className="bg-black flex justify-center w-full h-full text-white items-center rounded-lg p-8"
              >
                <div>
                  <div className="border-b border-gray-500 flex justify-between items-center ">
                    <div className="text-6xl font-semibold mb-3  p-2">
                      {obj.name}
                    </div>
                    <div className=" text-lg p-4  font-thin">
                      <span className="font-bold capitalize">price</span>:$
                      {obj.price}
                    </div>
                  </div>
                  <div className=" border-b border-gray-500 p-4">
                    <div className="font-bold text-xl font-mono  italic">
                      About
                    </div>
                    <div className="font-extralight">{obj.description}</div>
                  </div>
                  <div className="flex flex-row p-4 items-center gap-1">
                    {[...Array(5)].map((el, index) => (
                      <p key={index}>
                        {" "}
                        <AiTwotoneStar />
                      </p>
                    ))}
                    <span className="font-light ml-2 text-gray-400 font-serif underline text-sm cursor-pointer">
                      reviews out of 7897 ratings
                    </span>
                  </div>

                  <div className="mt-44 flex flex-col justify-center items-center font-mono ">
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          addingToCart(obj);
                        }}
                        className="button"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                    <div>
                      <Link to="/cart">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.9 }}
                          //transition={{ type: "tween" }}
                          className="button"
                          onClick={() => {
                            addingToCart(obj);
                          }}
                        >
                          Buy now
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export { ProductPage };
