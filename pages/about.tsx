import Head from "next/head";
import React from "react";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Footer from "../components/layout/Footer";
import Logo from "../components/layout/logo/Logo";
import Navbar from "../components/layout/Navbar";
import OurWorks from "../components/OurWork";
import Burger from "../components/ui/Burger";
import Menu from "../components/ui/Menu";
import MobileMenu from "../components/ui/MobileMenu";

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

  const burgerHandler = () => {
    setIsBurgerActive((s) => !s);
  };

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
          className='relative'
        >
          <MobileMenu
            isInit={isInit}
            isBurgerActive={isBurgerActive}
            setIsBurgerActive={setIsBurgerActive}
            menuData={menuData}
          />

          <Menu
            menuData={menuData}
            setIsInit={setIsInit}
            burgerHandler={burgerHandler}
            isBurgerActive={isBurgerActive}
          />

          <AboutUs />

          <OurWorks slides={slides} />

          <Contact />

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
