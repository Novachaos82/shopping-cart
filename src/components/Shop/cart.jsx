const Cart = ({ showCart, showQuantity }) => {
  //const location = useLocation();
  //const [storing, setStoring] = useState([]);

  //useEffect(() => {
  //  setData();
  //}, []);

  //const setData = () => {
  //  setStoring((prev) => [...prev, location.state.name]);
  //};
  //{
  //  console.log(showQuantity.qty);
  //}

  return (
    <div>
      {showCart.map((item, index) => {
        return <div key={index}>oh the cart {item.name}</div>;
      })}
    </div>
  );
};

export { Cart };
