//React Hooks
import { useContext, useState } from "react";

//useContext del carrito
import CartContext from "../../context/CartContext";

//Componente
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext);

  const [count, setCount] = useState(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-5">
      <div className="w-screen md:w-2/5 flex justify-center">
        <img src={product.image} alt={product.title} className="w-2/5 md:w-full" />
      </div>
      <div className="flex flex-col justify-start items-start gap-1 mt-2">
        <p>
          <i>{product.category}</i>
        </p>
        <p className="text-2xl font-semibold">{product.title}</p>
        <p className="my-2">{product.description}</p>
        <p className="text-2xl font-bold">${product.price}</p>
        <ItemCount
          count={count}
          handleAdd={handleAdd}
          handleSubtract={handleSubtract}
          handleAddToCart={() => {
            handleAddToCart(product, count);
          }}
        />
      </div>
    </div>
  );
};

export default ItemDetail;
