import { motion } from "framer-motion";

const CartItems = ({ id, image, price, name, qty, changeQty, deleteItem }) => {
  const deleteHandler = () => deleteItem(id);
  const increaseQtyHandler = () => changeQty(id, +1);
  const decreaseQtyHandler = () => changeQty(id, -1);

  return (
    <div className="flex px-4 gap-10 items-center border-b w-full p-2 last:border-b-0">
      <div className=" rounded-md w-full">
        <img className="w-full h-40 p-2 object-contain" src={image} alt="" />
      </div>
      <div className="flex  justify-center w-full">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-xl font-bold">{name}</div>
          <div>
            <span className="font-semibold capitalize text-lg">price:</span>$
            {price}
          </div>

          <div className="flex justify-center gap-4 items-center">
            <div>
              <button
                className="quantityButton rounded-l-full"
                onClick={decreaseQtyHandler}
                disabled={qty < 2}
              >
                -
              </button>
            </div>

            <div>{qty}</div>
            <div>
              <button
                className="quantityButton rounded-r-full"
                onClick={increaseQtyHandler}
              >
                +
              </button>
            </div>
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.0 }}
              whileTap={{ scale: 0.9 }}
            >
              <button
                className="border-black border px-6 py-0 hover:bg-red-400 hover:border-red-400 hover:text-white font-semibold drop-shadow-2xl transition-all duration-500"
                onClick={deleteHandler}
              >
                delete
              </button>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CartItems };
