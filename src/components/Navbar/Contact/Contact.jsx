//Hook Form
import { useForm } from "react-hook-form";

//Imagen de contacto
import contact from "../../../assets/contact-image.jpg";

//Manejo de los datos del hook useForm
const Contact = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const enviar = (data) => {
    console.log(data)
    reset();
  };

  return (
    <section>
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Imagen deposito"
            src={contact}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-paletteBrown sm:text-3xl md:text-4xl">
              Contacto
            </h1>

            <p className="mt-4 leading-relaxed text-paletteBrown">
              ¿Necesitás ponerte en contacto con nuestro equipo? Rellena el
              siguiente formulario y nos contactaremos lo antes posible.
            </p>

            <form
              onSubmit={handleSubmit(enviar)}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-paletteBrown"
                >
                  Nombre
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  placeholder="Diego"
                  {...register("nombre", {
                    required: true,
                  })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.nombre?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    El campo es requerido
                  </span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-paletteBrown"
                >
                  Apellido
                </label>

                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  placeholder="Rodríguez"
                  {...register("apellido", {
                    required: true,
                  })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.apellido?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    El campo es requerido
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-paletteBrown"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="email@flashmk.com"
                  {...register("email", {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                  })}
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
                {errors.email?.type === "pattern" && (
                  <span className="text-red-600 text-sm">
                    El email no es válido
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label
                  className="block text-sm font-medium text-paletteBrown"
                  htmlFor="message"
                >
                  Mensaje
                </label>

                <textarea
                  className="w-full rounded-lg p-3 text-sm"
                  placeholder="Ingresá acá tu mensaje"
                  rows="8"
                  id="message"
                  {...register("textarea", {
                    required: true,
                  })}
                ></textarea>
                {errors.textarea?.type === "required" && (
                  <span className="text-red-600 text-sm">
                    El campo es requerido
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="size-4 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    Quiero recibir emails sobre eventos, nuevos productos,
                    ofertas y anuncios de FlashMK.
                  </span>
                </label>
              </div>
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-paletteBrown bg-paletteBrown px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-paletteBrown focus:outline-none focus:ring active:text-paletteLightBrown"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
