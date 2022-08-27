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
    <div>
      <div>
        {product.map((obj, index) => {
          return (
            <div key={index} className="flex flex-row gap-8 items-center">
              <img
                className="w-96 h-full object-contain"
                src={obj.image}
                alt={obj.id}
              />

              <div id="buttons" className="">
                <div>{obj.name}</div>
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
          );
        })}
      </div>
    </div>
  );
};

export { ProductPage };
