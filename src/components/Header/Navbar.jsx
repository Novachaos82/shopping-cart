import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="bg-slate-400 w-screen p-4 flex justify-between font-mono items-center">
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
          <BsCart2 />
        </li>
      </ul>
    </div>
  );
};

export { Navbar };