import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = ({ showCart }) => {
  //const location = useLocation();
  //const [storing, setStoring] = useState([]);

  //useEffect(() => {
  //  setData();
  //}, []);

  //const setData = () => {
  //  setStoring((prev) => [...prev, location.state.name]);
  //};

  return (
    <div>
      <div>oh the cart {showCart}</div>
    </div>
  );
};

export { Cart };
