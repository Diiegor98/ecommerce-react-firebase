const ItemCount = ({ handleAdd, handleSubtract, handleAddToCart, count }) => {
  return (
    <div className="w-full my-2">
      <div className="flex gap-2 justify-start items-center">
        <button
          className="text-paletteBrown border rounded-md border-paletteBrown w-6 h-6 flex justify-center items-center font-bold"
          onClick={handleSubtract}
        >
          -
        </button>
        <p className="text-lg">{count}</p>
        <button
          className="text-white bg-paletteBrown border rounded-md border-paletteBrown w-6 h-6 flex justify-center items-center font-bold"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-paletteBrown text-white font-medium w-full p-2 my-4 md:w-1/3 md:my-7 hover:bg-paletteLightBrown hover:text-paletteBrown"
      >
        AGREGAR
      </button>
    </div>
  );
};

export default ItemCount;
