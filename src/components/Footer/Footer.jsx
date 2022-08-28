import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-black text-white flex justify-center text-xl p-2 items-center gap-4">
        Bhavesh
        <a href="https://github.com/Novachaos82">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export { Footer };
