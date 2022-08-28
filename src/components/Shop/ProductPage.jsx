import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";

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
    <div className="bg-hero-pattern">
      <div className="flex justify-center h-screen">
        {product.map((obj, index) => {
          return (
            <div
              key={index}
              className=" bg-black1  flex flex-row gap-8 items-center mt-10 w-3/6 h-5/6"
            >
              <div className="  flex justify-center w-full h-full">
                <img
                  className="w-96 h-full object-contain"
                  src={obj.image}
                  alt={obj.id}
                />
              </div>

              <div
                id="buttons"
                className="bg-addCart-back flex justify-center w-full h-full text-white items-center"
              >
                <div>
                  <div className="text-xl font-semibold mb-3 text-center">
                    {obj.name}
                  </div>
                  <div className="text-center">${obj.price}</div>
                  <div>
                    <button
                      onClick={() => {
                        addingToCart(obj);
                      }}
                      className="button"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div>
                    <button className="button">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ProductPage };
