//React Router DOM
import { Link } from "react-router-dom";

const ItemList = ({ product }) => {
  return (
    <Link to={`/item/${product.id}`} className="border-2 hover:border-paletteLightBrown duration-200">
      <div className="w-44 sm:w-52 h-64 sm:h-72 shadow-2xl ">
        <figure className="h-40 sm:h-52">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover h-full w-full"
          />
        </figure>
        <div className="px-2 pt-2">
          <p className="line-clamp-1 text-lg">{product.title}</p>
          <div className="flex justify-between items-center mt-2">
            <p className="font-bold text-xl">${product.price}</p>
            <p className="badge bg-paletteLightBrown border-none">{product.category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemList;
