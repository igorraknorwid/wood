import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../components/layout/logo/Logo";
import Navbar from "../components/layout/Navbar";
import { ICard, IMenu, ISlide } from "../types";

const menuData: IMenu[] = [
  { id: 1, title: "Home", slug: "" },
  { id: 2, title: "Gallery", slug: "gallery" },
  { id: 3, title: "Prices for services", slug: "prices" },
  { id: 4, title: "About us", slug: "about" },
  { id: 5, title: "Contact", slug: "contact" },
];

const About = () => {
  const [isBurgerActive, setIsBurgerActive] = React.useState(true);
  return (
    <main>
      <div
        style={{
          background: `#222021 url("https://res.cloudinary.com/zielona-g-ra/image/upload/v1661865003/wood/background_mjeqib.svg") repeat-y  center / cover`,
          minHeight: "6535px",
          width: "100%",
        }}
        className='wrapper relative'
      >
        <div
          style={{ borderTopRightRadius: "42px" }}
          className={
            isBurgerActive
              ? "mobile-close fixed top-40 left-0 right-40 bottom-0 z-50 h-full bg-white py-10 flex justify-center uppercase "
              : "mobile-open fixed top-40 left-0 right-20 bottom-0 z-50 h-full bg-white py-10 flex justify-center uppercase "
          }
        >
          <Navbar
            closeMobilePanel={() => {
              setIsBurgerActive(false);
            }}
            menuData={menuData}
            ulStyles='flex flex-col  gap-y-10  text-xl bg-white text-black'
            liStyles='text-2xl'
          />
        </div>

        <div className='fixed w-full  top-10 z-50 flex justify-between items-center px-4 md:px-10 xl:px-20'>
          <div className='header__logo'>
            <Logo />
          </div>
          <div className='header__navbar  hidden lg:block '>
            <Navbar
              menuData={menuData}
              ulStyles='flex flex-wrap gap-x-16 xl:gap-x-30 2xl:gap-x-40  text-xl ml-10 '
              liStyles='hover:opacity-50'
            />
          </div>
          <div
            className='burger  lg:hidden'
            onClick={() => setIsBurgerActive((s) => !s)}
          >
            <div
              className={
                isBurgerActive ? "burger__top-line" : "burger__top-line--short"
              }
            ></div>
            <div className={"burger__mid-line"}></div>
            <div
              className={
                isBurgerActive
                  ? "burger__bottom-line"
                  : "burger__top-bottom--short"
              }
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
