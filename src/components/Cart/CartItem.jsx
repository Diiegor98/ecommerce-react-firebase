export default function CartItem({ product }) {
  return (
    <div className="flex gap-3 bg-slate-200">
      <div className=" w-20 h-20 flex items-center bg-white border border-gray-300">
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h3 className="font-bold">{product.title}</h3>
        <p>Total: ${product.price * product.count}</p>
        <p>Cantidad: {product.count}</p>
      </div>
    </div>
  );
}
