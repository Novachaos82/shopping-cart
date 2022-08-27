import { motion } from "framer-motion";

const CartItems = ({ id, image, price, name, qty, changeQty, deleteItem }) => {
  const deleteHandler = () => deleteItem(id);
  const increaseQtyHandler = () => changeQty(id, +1);
  const decreaseQtyHandler = () => changeQty(id, -1);

  return (
    <div className="flex px-4 gap-6 items-center justify-center bg-gray-200 rounded-md mb-5  mt-4 w-full">
      <div>
        <img className="w-40 h-40 object-contain" src={image} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-xl font-semibold">{name}</div>

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
          <motion.button whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.9 }}>
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
  );
};

export { CartItems };
