import { CartItems } from "./cartItems";
const Cart = ({ showCart, changeQty, deleteItem }) => {
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
  //const [cart, setCart] = useState([]);

  //useEffect(() => {
  //  setCart((prev) => [...prev, showCart]);
  //}, []);

  const total = showCart
    .map((item) => item.price * item.qty)
    .reduce((acc, currValue) => acc + currValue, 0);
  //{
  //  {
  //    showCart.map((item) => {
  //      console.log(item.id);
  //    });
  //  }
  //}

  const items = showCart.map((items) => (
    <CartItems
      key={items.id}
      {...items}
      //cartObjects={cart}
      //id={obj.id}
      //image={obj.image}
      //price={obj.price}
      //name={obj.name}
      //itemQuanity={obj.qty}
      changeQty={changeQty}
      deleteItem={deleteItem}
    />
  ));

  return (
    <div>
      {/*{cart.map((items) => {
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
      })}*/}
      <div>dawg{items}</div>
      {total}
    </div>
  );
};

export { Cart };
