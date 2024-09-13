//React Router
import { Link } from "react-router-dom";

//useContext
import { useContext } from "react";
import CartContext from "../../../context/CartContext";

//Imágenes
import brandLogo from "../../../assets/brand-logo.png";
import defaultProfile from "../../../assets/default-profile.jpg";

const NavbarTop = () => {
  const { cartCount, totalPrice } = useContext(CartContext);

  return (
    <nav className="navbar bg-paletteBrown text-paletteBone sm:px-4 md:px-8">
      <div className="flex-1">
        <Link to="/" className="flex flex-row items-center gap-2">
          <img src={brandLogo} alt="Logo de marca" className="w-9" />
          <p className="text-lg font-bold tracking-widest text-paletteBone">
            flashMK
          </p>
        </Link>
      </div>
      <div className="flex-none gap-4">
        <Link to="/contact">Contacto</Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount() > 0 ? (
                <span className="badge badge-sm indicator-item bg-paletteBone text-paletteBrown">
                  {cartCount()}
                </span>
              ) : null}
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-paletteBrown z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">
                {cartCount() > 0 ? `${cartCount()} Items` : "Carrito vacío"}
              </span>
              <span className="text-info">
                Subtotal: ${totalPrice() > 0 ? totalPrice() : 0}
              </span>
              <div className="card-actions">
                <button className="btn bg-paletteLightBrown text-paletteBrown hover:bg-paletteBone btn-block">
                  <Link to="/cart">Ver carrito</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Foto de perfil" src={defaultProfile} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
