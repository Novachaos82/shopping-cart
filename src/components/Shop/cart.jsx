import { CartItems } from "./cartItems";
const Cart = ({ showCart, changeQty, deleteItem }) => {
  const total = showCart
    .map((item) => item.price * item.qty)
    .reduce((acc, currValue) => acc + currValue, 0);

  const items = showCart.map((items) => (
    <CartItems
      key={items.id}
      {...items}
      changeQty={changeQty}
      deleteItem={deleteItem}
    />
  ));

  return (
    <div className="flex  h-screen bg-gray-100 justify-center">
      {items.length > 0 ? (
        <div className="flex flex-col items-center">{items}</div>
      ) : (
        <div>Cart is empty</div>
      )}
      <div className="w-1/2">Subtotal: ${total} </div>
    </div>
  );
};

export { Cart };
