import { Link } from "react-router-dom";
import Home from "../../images/Home.jpg";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { GiComputerFan } from "react-icons/gi";
import { CgLaptop } from "react-icons/cg";
import { motion } from "framer-motion";
import { Footer } from "../Footer/Footer";

const HomePage = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      x: -400,
    },
    onscreen: {
      opacity: 1,
      x: 0,

      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  };
  return (
    //<div className="overflow-x-hidden">

    <motion.div
      className="overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        x: { duration: 0.3, bounce: 0.4 },
        default: { ease: "linear" },
      }}
    >
      <div className="flex flex-row  w-screen " id="header">
        <div className="w-1/2">
          <img src={Home} alt="" className="min-h-full object-cover" />
        </div>
        <div className="items-start text-left bg-gray-900 text-white flex flex-col justify-center p-8 w-1/2">
          <h1 className="text-5xl font-sans font-bold mb-20 w-1/2 tracking-wide ">
            Gaming on your hands
          </h1>
          <p className="mb-20 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            exercitationem eveniet aperiam. Aspernatur voluptas itaque saepe,
            explicabo exercitationem sunt tenetur dolore adipisci possimus nam
            quia odio, reprehenderit dignissimos iste corrupti aliquam sapiente
            vitae ipsa libero, unde consectetur nihil qui ex?
          </p>
          <Link to="/shop">
            <button className="bg-gray-400 text-black border-black border-2 px-8 hover:bg-black hover:text-white rounded-md text-lg py-1 font-semibold transition-all duration-300 ">
              Shop
            </button>
          </Link>
        </div>
      </div>
      {/*<motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        id="main-content"
       
      >*/}

      <div className="flex flex-col mt-32 justify-center items-center">
        <h1 className="text-5xl font-bold ">Our Services</h1>
        <div className="w-24 bg-black border-b-4 border-red-500 mt-6 mb-8"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          labore eaque pariatur ab, repellendus vitae sit possimus nobis.
          Nostrum, voluptatem.
        </p>
        {/*<div id="box" className="flex gap-24 mb-96 mt-12">*/}
        <motion.div
          className="flex gap-24 mb-40 mt-12"
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="boxes">
            <div className="icons">
              <MdOutlineSettingsInputComponent size={24} />
            </div>
            <h3 className="text-lg font-semibold">Keyboard Customiztion</h3>
            <p>Narw tbh flannel. Hot lorem gochujangtogen.</p>
          </div>
          <div className="boxes">
            <div className="icons">
              <GiComputerFan size={24} />
            </div>
            <h3 className="text-lg font-semibold">Maintenance</h3>
            <p>Narw tbh flannel. Hot lorem gochujangtogen.</p>
          </div>
          <div className="boxes">
            <div className="icons">
              <CgLaptop size={24} />
            </div>
            <h3 className="text-lg font-semibold">RMA</h3>
            <p>Narw tbh flannel. Hot lorem gochujangtogen.</p>
          </div>
          {/*</div>*/}
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
};

export { HomePage };
