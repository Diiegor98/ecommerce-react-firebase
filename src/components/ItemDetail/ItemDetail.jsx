import CartContext from "../../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext, useState } from "react";

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
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <img src={product.image} alt={product.title} />
      <ItemCount
        count={count}
        handleAdd={handleAdd}
        handleSubtract={handleSubtract}
        handleAddToCart={() => {
          handleAddToCart(product, count);
        }}
      />
    </div>
  );
};

export default ItemDetail;
