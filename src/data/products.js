import Gpu3060ti from "../images/3060ti.png";
import Gpu3060tiPreview from "../images/3060ti-2.jpg";
import Gpu3070ti from "../images/3070ti.png";
import Gpu3070tiPreview from "../images/3070ti-2.jpg";
import Gpu3080 from "../images/3080.png";
import Gpu3080Preview from "../images/3080-2.jpg";
import Gpu3090 from "../images/3090.png";
import Gpu3090Preview from "../images/3090-2.jpg";
import duckyMini from "../images/duckyMini-1.png";
import duckyMiniPreview from "../images/duckyMini-2.jpeg";
import keychronK2 from "../images/keychron-k2-1.jpg";
import keychronK2Preview from "../images/keychron-k2-2.jpg";
import keychronK6 from "../images/Keychron-K6-1.jpg";
import keychronK6Preview from "../images/Keychron-K6-2.jpg";
import keychronK8 from "../images/Keychron-K8-1.jpg";
import keychronK8Preview from "../images/Keychron-K8-2.jpg";
import ryzen7_5800x from "../images/ryzen-7-5800x-1.png";
import ryzen9_5900x from "../images/png-r9.webp";

const products = [
  {
    id: 1,
    name: " Nvidia RTX 3060ti",
    price: 400,
    category: "gpu",
    image: Gpu3060ti,
    preview: Gpu3060tiPreview,
    qty: 1,
    description:
      "The GeForce RTX™ 3060 Ti and RTX 3060 let you take on the latest games using the power of Ampere—NVIDIA's 2nd generation RTX architecture. Get incredible performance with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed G6 memory.",
  },
  {
    id: 2,
    name: " Nvidia RTX 3070ti",
    price: 599,
    category: "gpu",
    image: Gpu3070ti,
    preview: Gpu3070tiPreview,
    qty: 1,
    description:
      "The GeForce RTXTM 3070 Ti and RTX 3070 graphics cards are powered by Ampere—NVIDIA's 2nd gen RTX architecture. Built with enhanced Ray Tracing Cores and Tensor Cores, new streaming multiprocessors, and high-speed memory, they give you the power you need to rip through the most demanding games.",
  },
  {
    id: 3,
    name: " Nvidia RTX 3080",
    price: 699,
    category: "gpu",
    image: Gpu3080,
    preview: Gpu3080Preview,
    qty: 1,
    description:
      "The GeForce RTX™ 3080 Ti and RTX 3080 graphics cards deliver the ultra performance that gamers crave, powered by Ampere—NVIDIA's 2nd gen RTX architecture. They are built with enhanced RT Cores and Tensor Cores, new streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.",
  },
  {
    id: 4,
    name: " Nvidia RTX 3090",
    price: 1499,
    category: "gpu",
    image: Gpu3090,
    preview: Gpu3090Preview,
    qty: 1,
    description:
      "The GeForce RTX™ 3090 Ti and 3090 are big ferocious GPUs (BFGPUs) with TITAN class performance. Powered by Ampere—NVIDIA's 2nd gen RTX architecture—they double down on ray tracing and AI performance with enhanced Ray Tracing Cores, Tensor Cores, and new streaming multiprocessors.",
  },
  {
    id: 5,
    name: "Ducky Mini",
    price: 54,
    category: "keyboard",
    image: duckyMini,
    preview: duckyMiniPreview,
    qty: 1,
    description:
      "Ducky mini is a keyboard designed for typists. The keyboard is designed as low as possible with a low incline",
  },
  {
    id: 6,
    name: "Keychron K2",
    price: 79,
    category: "keyboard",
    image: keychronK2,
    preview: keychronK2Preview,
    qty: 1,
    description:
      "Keychron K2 is a 75% layout (84-keys) white backlit compact Bluetooth mechanical keyboard. The ultimate keyboard that retains shortcut and arrow keys. With a unique Mac layout provides all necessary Mac function keys, while compatible with Windows.",
  },
  {
    id: 7,
    name: "Keychron K6",
    price: 106,
    category: "keyboard",
    image: keychronK6,
    preview: keychronK6Preview,
    qty: 1,
    description:
      "The Keychron K6 is a hot-swappable compact 65% layout white backlight Bluetooth mechanical keyboard made for Mac and Windows. Customize per-key typing experience to maximize your productivity on the K6 hot-swappable version without the need to solder.",
  },
  {
    id: 8,
    name: "Keychron K8",
    price: 119,
    category: "keyboard",
    image: keychronK8,
    preview: keychronK8Preview,
    qty: 1,
    description:
      "Engineered to maximize your productivity with most popular TKL layout. The hot-swappable option on Optical and Mechanical switches offers the freedom to easily personalize your typing experience without soldering.",
  },
  {
    id: 9,
    name: "Amd ryzen 7 5800x",
    price: 299,
    category: "cpu",
    image: ryzen7_5800x,
    preview: keychronK8Preview,
    qty: 1,
    description:
      "Ryzen 5000 Series, Vermeer Based High-End Desktop Processor, Ryzen 7 5800X with 8 Cores, 16 Threads at 4.7 GHz, Delivers Remarkable performance and efficiency on the same 7nm FinFet Node.",
  },
  {
    id: 10,
    name: "Amd ryzen 9 5900x",
    price: 399,
    category: "cpu",
    image: ryzen9_5900x,
    preview: keychronK8Preview,
    qty: 1,
    description:
      "AMD Ryzen™ 9 5900X series desktop processors comes with 12 cores to power through gaming, streaming and more",
  },
];

export { products };
