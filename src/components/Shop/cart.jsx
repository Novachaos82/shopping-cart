import { useEffect, useState } from "react";

const Cart = ({ showCart, changeQty }) => {
  //const location = useLocation();
  //const [storing, setStoring] = useState([]);

  //useEffect(() => {
  //  setData();
  //}, []);

  //const setData = () => {
  //  setStoring((prev) => [...prev, location.state.name]);
  //};
  //{
  //  console.log(showQuantity.qty);
  //}
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart((prev) => [...prev, showCart]);
  }, []);

  console.log(cart);
  return (
    <div>
      {cart.map((items) => {
        return items.map((item, index) => {
          return (
            <div key={index}>
              {item.name}
              {item.qty}
            </div>
          );
        });
      })}
    </div>
  );
};

export { Cart };
