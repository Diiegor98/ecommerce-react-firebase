//React Router DOM
import { Link } from "react-router-dom";

//Iconos de categorías
import { BsTools } from "react-icons/bs";
import { MdSportsBaseball } from "react-icons/md";
import { IoGameController } from "react-icons/io5";


const NavbarBottom = () => {
  return (
    <div className=" bg-paletteLightBrown h-10 flex justify-center items-center">
      <ul className="flex items-center gap-5">
        <Link to="/product/sports">
          <li className="text-paletteBrown font-semibold flex flex-row items-center gap-1 cursor-pointer ">
            <MdSportsBaseball className="text-xl"  />
            <span className="hidden sm:block">Deportes</span>
          </li>
        </Link>
        <Link to="/product/tools">
          <li className="text-paletteBrown font-semibold flex flex-row items-center gap-1 cursor-pointer">
            <BsTools className="text-xl"  />
            <span className="hidden sm:block">Herramientas</span>
          </li>
        </Link>
        <Link to="product/electronics">
          <li className="text-paletteBrown font-semibold flex flex-row items-center gap-1 cursor-pointer">
            <IoGameController className="text-xl" />
            <span className="hidden sm:block">Electrónica</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarBottom;
