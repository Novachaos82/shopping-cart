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

  const total = cart.map((item) =>
    item
      .map((obj) => obj.price * obj.qty)
      .reduce((acc, prevVal) => acc + prevVal, 0)
  );

  return (
    <div>
      {cart.map((items) => {
        return items.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.image} alt="" />
              {item.name}
              {item.qty}
              {total}
            </div>
          );
        });
      })}
    </div>
  );
};

export { Cart };
