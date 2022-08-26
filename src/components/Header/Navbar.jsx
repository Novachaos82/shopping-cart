import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
const Navbar = ({ cartLen }) => {
  return (
    <div className="bg-slate-400  p-4 flex justify-between font-mono items-center overflow-x-hidden">
      <Link to="/">
        <h1 className="text-3xl">Home</h1>
      </Link>
      <ul className="flex justify-between text-xl text-zinc-700-500 ">
        <Link to="/" className="mr-14">
          <li className=" ">Home</li>
        </Link>
        <Link to="/about" className="mr-14">
          <li className=" ">About</li>
        </Link>
        <Link to="/shop" className="mr-14">
          <li className=" ">Shop</li>
        </Link>
        <li>
          <Link to="/cart">
            <button className="relative">
              <div className="">
                <BsCart2 />
              </div>
              <div className="absolute left-3 top-3 text-black bg-white rounded-full w-4 h-4 text-xs">
                {cartLen}
              </div>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };
