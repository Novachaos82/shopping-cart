import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";

const ProductPage = ({ addingToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  console.log(parseInt(id, 10) + "params");

  useEffect(() => {
    getProductData();
  }, []);
  //product.map((obj) => {
  //  console.log(obj.image);
  //});
  //  console.log(product[0]);
  const transferingData = () => {
    navigate("/cart", { state: { id: 1, name: "sabaoon" } });
  };
  const getProductData = () => {
    const newProductArr = products.filter((x) => x.id === parseInt(id, 10));
    setProduct(newProductArr);
  };

  return (
    <div>
      nigga u in da product page
      <div>
        {product.map((obj, index) => {
          return (
            <div key={index}>
              <div>{obj.name}</div>
              <img src={obj.image} alt={obj.id} />

              <div id="buttons">
                <div>
                  <button
                    onClick={() => {
                      addingToCart(obj.name);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button>Buy now</button>
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
