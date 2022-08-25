const CartItems = ({ id, image, price, name, qty, changeQty, deleteItem }) => {
  const deleteHandler = () => deleteItem(id);
  const increaseQtyHandler = () => changeQty(id, +1);
  const decreaseQtyHandler = () => changeQty(id, -1);
  //{
  //  cartObjects.map((items) => {
  //    items.map((obj) => {
  //      console.log(obj.id);
  //    });
  //  });
  //}
  return (
    <div>
      <div>{name}</div>
      <div>{qty}</div>
      <button onClick={increaseQtyHandler}>increase</button>
      <button onClick={decreaseQtyHandler}>decrease</button>
      <div>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </div>
  );
};

export { CartItems };
