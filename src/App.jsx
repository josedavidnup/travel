import React, { useEffect, useState } from "react";
import img from "./assets/img/sanFrancisco.jpg";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <nav className="w-full h-14 hidden bg-white lg:flex p-4 justify-between fixed z-10 dark:bg-gray-800">
        <div className="h-auto w-auto">
          <p className="text-xl text-primary font-black dark:text-white">
            Travel
          </p>
        </div>
        <div className="flex space-x-8">
          <a
            className="font-bold text-base text-primary  dark:text-white"
            href="#home"
          >
            Inicio
          </a>
          <a
            className="font-bold text-base text-primary  dark:text-white"
            href="#recomendados"
          >
            Recomendados
          </a>
          <a
            className="font-bold text-base text-primary  dark:text-white"
            href="#rentas_destacadas"
          >
            Rentas
          </a>
          <a
            className="font-bold text-base text-primary  dark:text-white"
            href="#faqs"
          >
            FAQs
          </a>
          <a
            className="font-bold text-base text-primary dark:text-white"
            href="#sobre_nosotros"
          >
            Sobre nosotros
          </a>
        </div>
        <div className="flex space-x-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              className="fill-current text-primary dark:text-white"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
              fill="#3F3F46"
            />
          </svg>
          <button onClick={handleThemeSwitch}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                className="dark:text-white"
                d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
                fill="#CC2D4A"
              />
            </svg>
          </button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              className="fill-current text-gray-300 dark:text-white"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
              fill="#3F3F46"
            />
          </svg>
        </div>
      </nav>
      <section className="w-full h-auto">
        <div id="home">
          <div className="w-full h-3/4">
            <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-20 lg:justify-start">
              <input
                className="outline-none p-3 rounded-full shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden"
                placeholder="San Francisco"
                type="search"
              />
              <div className="hidden h-auto lg:w-2/5 lg:flex pb-6">
                <p className="text-4xl ml-16 font-bold text-white">
                  Encuentra mas ubicaciones como estas
                </p>
              </div>
              <button className="w-48 rounded-full text-lg text-primary shadow-sm font-semibold p-4 bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16">
                Explorar
              </button>
            </div>
            <div className="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
              <img className="lg:hidden" src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="p-6" id="recomendados">
          <p className="text-3xl font-semibold text-primary dark:text-white">
            Recomendados
          </p>
          <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden">
            <div className="card">
              <div className="w-full h-3/5 rounded-t-lg bg-norway bg-cover "></div>
              <div className="w-full h-2/5 bg-secondary rounded-b-lg dark:bg-gray-700">
                <p className="text-terciary dark:text-white text-bold text-xl px-4 py-2">
                  Norway
                </p>
                <p className="text-terciary dark:text-white text-md px-4">
                  Beautiful landscapes
                </p>
              </div>
            </div>
            <div className="card">
              <div className="w-full h-3/5 rounded-t-lg bg-new_york bg-cover "></div>
              <div className="w-full h-2/5 bg-white rounded-b-lg dark:text-white dark:bg-gray-500">
                <p className="text-terciary dark:text-white text-bold text-xl px-4 py-2">
                  New York
                </p>
                <p className="text-terciary dark:text-white text-md px-4">
                  Concrete jungle
                </p>
              </div>
            </div>
            <div className="card">
              <div className="w-full h-3/5 rounded-t-lg bg-new_york bg-cover "></div>
              <div className="w-full h-2/5 bg-white rounded-b-lg dark:text-white  dark:bg-gray-700">
                <p className="text-terciary dark:text-white text-bold text-xl px-4 py-2">
                  New York
                </p>
                <p className="text-terciary dark:text-white text-md px-4">
                  Concrete jungle
                </p>
              </div>
            </div>
            <div className="card">
              <div className="w-full h-3/5 rounded-t-lg bg-new_york bg-cover "></div>
              <div className="w-full h-2/5 bg-white rounded-b-lg dark:text-white dark:bg-gray-500">
                <p className="text-terciary dark:text-white text-bold text-xl px-4 py-2">
                  New York
                </p>
                <p className="text-terciary dark:text-white text-md px-4">
                  Concrete jungle
                </p>
              </div>
            </div>
            <div className="card">
              <div className="w-full h-3/5 rounded-t-lg bg-new_york bg-cover "></div>
              <div className="w-full h-2/5 bg-white rounded-b-lg dark:text-white  dark:bg-gray-700">
                <p className="text-terciary dark:text-white text-bold text-xl px-4 py-2">
                  New York
                </p>
                <p className="text-terciary dark:text-white text-md px-4">
                  Concrete jungle
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 h-auto w-full" id="rentas_destacadas">
          <div id="rentas_destacadas" className="p-6 h-full w-full">
            <p className="text-3xl text-primary font-semibold dark:text-white">
              Rentas destacadas
            </p>
            <div className="w-full h-full flex flex-col space-y-4 items-center justify-center mt-6">
              <div className="w-full h-96 bg-chicago bg-cover rounded-xl lg:h-[38rem] lg:text-right lg:bg-center lg:pt-12">
                <p className="card-title">Chicago</p>
                <p className="text-sm pl-8 text-white mr-24 lg:mr-8 lg:text-base">
                  2 rooms, bathroom and kitchen.
                </p>
              </div>
              <div className="w-full h-full grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 lg:place-items-center lg:place-content-stretch gap-4">
                <div className="w-full h-96 bg-LA bg-cover rounded-xl lg:row-span-2 lg:col-span-2 lg:h-[49rem] lg:text-right lg:bg-center lg:pt-12">
                  <p className="card-title">Los Angeles</p>
                  <p className="text-sm pl-8 text-white mr-24 lg:mr-8 lg:text-base">
                    4 rooms, 3 bathrooms, kitchen and private pool.
                  </p>
                </div>
                <div className="w-full h-96 bg-miami bg-cover rounded-xl lg:row-span-1 lg:col-span-3 lg:text-right lg:bg-center lg:pt-12">
                  <p className="card-title">Miami</p>
                  <p className="text-sm pl-8 text-white mr-24 lg:mr-8 lg:text-base">
                    3 rooms, 2 bathrooms, kitchen and amazing sea view.
                  </p>
                </div>
                <div className="w-full h-96 bg-bali bg-cover rounded-xl lg:row-span-1 lg:col-span-3 lg:text-right lg:bg-center lg:pt-12">
                  <p className="card-title">Bali</p>
                  <p className="text-sm pl-8 text-white mr-24 lg:mr-8 lg:text-base">
                    2 rooms, 2 bathrooms, kitchen and private pool.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full" id="faqs">
          <div className="w-full h-full px-6 pb-4 flex flex-col space-y-4">
            <p className="text-3xl text-primary font-semibold mt-6  dark:text-white">
              FAQS
            </p>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white">
                Política de Cancelación
              </p>
              <p className="text-md pt-2 dark:text-white">
                Para estancias menores a una semana es importante avisar con 3
                días de anticipación, de caso contario será sancionado.
              </p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white">
                Métodos de pago
              </p>
              <p className="text-md pt-2 dark:text-white">
                Aceptamos distintos métodos de pago: VISA, MasterCard, American
                Express, Paypal y Binance
              </p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white">
                Mascotas
              </p>
              <p className="text-md pt-2 dark:text-white">
                El tema de las mascotas dependerá directamente del anfitrión.
              </p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white">
                Información de Seguridad
              </p>
              <p className="text-md pt-2 dark:text-white">
                Todas nuestras estancias cuentan con seguro en caso de
                accidentes
              </p>
            </div>
            <div>
              <p className="text-xl font-medium text-primary dark:text-white">
                Estancias Largas
              </p>
              <p className="text-md pt-2 dark:text-white">
                Contamos con estancias de hasta 3 meses, en este caso es
                requerido un anticipo con un monto del 50% del valor de la renta
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full h-auto bg-gray-50 p-6 space-y-2 dark:bg-gray-800 dark:text-white">
        <p className="dark:text-white text-lg">Acerca de</p>
        <p className="dark:text-white text-sm text-gray-400">Investing</p>
        <p className="dark:text-white text-sm text-gray-400">Work with us</p>
        <p className="dark:text-white text-sm text-gray-400">
          Terms and conditions
        </p>
        <p className="dark:text-white text-sm text-gray-400">
          Platzi Travel Inc.
        </p>
        <i className="dark:text-white fa-brands fa-twitter text-cyan-400"></i>
        <i className="dark:text-white fa-brands fa-instagram text-purple-400 ml-1"></i>
      </footer>
      <div
        className="w-full h-16 bg-white fixed left-0 bottom-0 shadow-md flex items-center justify-around lg:hidden dark:bg-gray-800"
        id="tab_bar"
      >
        <a href="#home">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="">
            <path
              className="fill-current text-gray-200"
              d="M10.707 2.29303C10.5195 2.10556 10.2652 2.00024 10 2.00024C9.73488 2.00024 9.48057 2.10556 9.29304 2.29303L2.29304 9.29303C2.11088 9.48163 2.01009 9.73423 2.01237 9.99643C2.01465 10.2586 2.11981 10.5094 2.30522 10.6948C2.49063 10.8803 2.74144 10.9854 3.00364 10.9877C3.26584 10.99 3.51844 10.8892 3.70704 10.707L4.00004 10.414V17C4.00004 17.2652 4.1054 17.5196 4.29293 17.7071C4.48047 17.8947 4.73482 18 5.00004 18H7.00004C7.26526 18 7.51961 17.8947 7.70715 17.7071C7.89468 17.5196 8.00004 17.2652 8.00004 17V15C8.00004 14.7348 8.1054 14.4805 8.29293 14.2929C8.48047 14.1054 8.73482 14 9.00004 14H11C11.2653 14 11.5196 14.1054 11.7071 14.2929C11.8947 14.4805 12 14.7348 12 15V17C12 17.2652 12.1054 17.5196 12.2929 17.7071C12.4805 17.8947 12.7348 18 13 18H15C15.2653 18 15.5196 17.8947 15.7071 17.7071C15.8947 17.5196 16 17.2652 16 17V10.414L16.293 10.707C16.4816 10.8892 16.7342 10.99 16.9964 10.9877C17.2586 10.9854 17.5095 10.8803 17.6949 10.6948C17.8803 10.5094 17.9854 10.2586 17.9877 9.99643C17.99 9.73423 17.8892 9.48163 17.707 9.29303L10.707 2.29303Z"
              fill="#3F3F46"
            />
          </svg>
        </a>
        <a href="#rentas_destacadas">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="">
            <path
              className="fill-current text-primary"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"
              fill="#3F3F46"
            />
          </svg>
        </a>
        <a href="#recomendados">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="">
            <path
              className="fill-current text-gray-200"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"
              fill="#3F3F46"
            />
          </svg>
        </a>
        <button onClick={handleThemeSwitch}>
          <svg width="30" height="30" viewBox="0 0 29 29" fill="none" xmlns="">
            <path
              d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"
              fill="#CC2D4A"
            />
          </svg>
        </button>
        <a href="#">
          <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="">
            <path
              className="fill-current text-gray-200"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
              fill="#3F3F46"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
