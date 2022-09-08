import Head from "next/head";
import React from "react";
import AboutUs from "../components/AboutUs";
import Advantages from "../components/Advantages";
import Contact from "../components/Contact";
import HeaderContent from "../components/HeaderContent";
import Footer from "../components/layout/Footer";
import Logo from "../components/layout/logo/Logo";
import Navbar from "../components/layout/Navbar";
import OurWorks from "../components/OurWork";
import Wood from "../components/Wood";

import { ICard, IMenu, ISlide } from "../types";

export const getServerSideProps = async () => {
  const data = "Hello world!!! Test!!!";

  const menuData: IMenu[] = [
    { id: 1, title: "Home", slug: "" },
    { id: 2, title: "Gallery", slug: "gallery" },
    { id: 3, title: "Prices for services", slug: "prices" },
    { id: 4, title: "About us", slug: "about" },
    { id: 5, title: "Contact", slug: "contact" },
  ];

  const cards: ICard[] = [
    {
      id: 1,
      image_src:
        "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662019486/wood/old-wood-grain-background-3_sqsfkb.webp",
      title: "Oak",
      description: [
        { option: "Durability", isTrue: true },
        { option: "Beautiful texture", isTrue: true },
        { option: "Water resistance", isTrue: true },
        { option: "Expensive", isTrue: false },
      ],
    },
    {
      id: 2,
      image_src:
        "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662019486/wood/wood-texture-design-decoration-2_c5tnh6.webp",
      title: "Buk",
      description: [
        { option: "Durability", isTrue: true },
        { option: "Hard to handle", isTrue: false },
      ],
    },
    {
      id: 3,
      image_src:
        "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662019486/wood/pale-oak-wood-texture-design-background-2_hhwbjb.webp",
      title: "Ash",
      description: [
        { option: "Durability", isTrue: true },
        { option: "Hard to handle", isTrue: false },
      ],
    },
  ];

  const slides = [
    {
      id: 1,
      src: "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662034122/wood/modern-wooden-kitchen-interior-steel-kitchen-faucet-3_sg4cwg.webp",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662110981/wood/lucas-hoang-oujKSaZlMFY-unsplash-1_ghhrav.webp",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662110974/wood/ehud-neuhaus-iv77yw43cAI-unsplash-1_bqlkqo.webp",
    },
  ];

  return {
    props: {
      data,
      menuData,
      cards,
      slides,
    },
  };
};

const Home = ({
  data,
  menuData,
  cards,
  slides,
}: {
  data: string;
  menuData: IMenu[];
  cards: ICard[];
  slides: ISlide[];
}) => {
  const [isInit, setIsInit] = React.useState(false);
  const [isBurgerActive, setIsBurgerActive] = React.useState(true);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
      </Head>
      <main>
        <div
          style={{
            background: `#222021 url("https://res.cloudinary.com/zielona-g-ra/image/upload/v1662633724/wood/bg-vector_j8r9lo.svg") repeat-y  center / cover`,
            width: "100%",
          }}
          className='wrapper relative'
        >
          <div
            className='header__bg-image'
            style={{
              background: ` url("https://res.cloudinary.com/zielona-g-ra/image/upload/v1661867072/wood/logs_hk9ana.webp") no-repeat  center / cover`,
              opacity: "0.5",
              boxShadow: "2px 2px 30px rgba(34, 32, 33, 0.76)",
            }}
          ></div>

          <div
            style={{ borderTopRightRadius: "42px" }}
            className={
              isInit
                ? isBurgerActive
                  ? "mobile-close fixed top-40 left-0 right-40 bottom-0 z-50 h-full bg-white py-10 flex justify-center uppercase "
                  : "mobile-open fixed top-40 left-0 right-20 bottom-0 z-50 h-full bg-white py-10 flex justify-center uppercase "
                : "mobile-init fixed top-40 left-0 right-40 bottom-0 z-50 h-full bg-white py-10 flex justify-center uppercase "
            }
          >
            <Navbar
              closeMobilePanel={() => {
                setIsBurgerActive(false);
              }}
              menuData={menuData}
              ulStyles='flex flex-col  gap-y-10  bg-white text-black px-4'
              liStyles='text-3xl'
            />
          </div>

          <div className='fixed w-full  top-12 z-50 flex justify-between items-center px-4 md:px-10 xl:px-20'>
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
              onClick={() => {
                setIsInit(true);
                setIsBurgerActive((s) => !s);
              }}
            >
              <div
                className={
                  isBurgerActive
                    ? "burger__top-line"
                    : "burger__top-line--short"
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

          <HeaderContent />

          <Wood cards={cards} />

          <OurWorks slides={slides} />

          <Advantages />

          <AboutUs />

          <Contact />

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
