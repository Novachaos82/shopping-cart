import { CartItems } from "./cartItems";
import { motion } from "framer-motion";

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
    <div className="bg-gray-200 min-h-screen">
      <div className=" h-fit   flex justify-center px-8">
        <div className="  gap-10 bg-white w-2/6 min-w-fit rounded-lg mt-10 mb-10 ">
          <div className="">
            {items.length > 0 ? (
              <div className=" flex justify-center flex-col items-center">
                <div className="mt-10 flex flex-col gap-16  px-4">{items}</div>
                <div className="border-t border-gray-300 w-5/6 justify-center flex flex-col  border-b p-2 font-mono text-xl">
                  <div>Shipping: Free </div>
                  <div>Subtotal: ${total} </div>
                </div>
                <div className="p-2 ">
                  <div className="text-center text-2xl mb-2">
                    Total: ${total}
                  </div>
                  <motion.button
                    className="checkout-btn  rounded-lg"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Checkout
                  </motion.button>
                </div>
              </div>
            ) : (
              <div className="h-44 flex justify-center items-center font-mono font-bold text-4xl px-4">
                <div>Cart is empty</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cart };
