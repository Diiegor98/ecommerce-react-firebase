const ItemCount = ({ handleAdd, handleSubtract, handleAddToCart, count }) => {
  return (
    <div>
      <div>
        <button onClick={handleSubtract}>-</button>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
      </div>
      <button onClick={handleAddToCart}>Agregar al carro</button>
    </div>
  );
};

export default ItemCount;
