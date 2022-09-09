import React from "react";
import Logo from "../layout/logo/Logo";
import Navbar from "../layout/Navbar";
import { IMenu } from "./../../types";
import Burger from "./Burger";

interface IMenuBar {
  menuData: IMenu[];
  setIsInit(value: boolean): void;
  burgerHandler(): void;
  isBurgerActive: boolean;
}

const Menu = ({
  menuData,
  setIsInit,
  burgerHandler,
  isBurgerActive,
}: IMenuBar) => {
  return (
    <div
      className='fixed w-full  top-0  z-50 flex justify-between items-center px-4 md:px-10 xl:px-20 pt-10 pb-12 '
      style={{
        backgroundColor: "#1E0C06",
        borderBottomLeftRadius: "42px",
        borderBottomRightRadius: "42px",
      }}
    >
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
      <Burger
        setIsInit={setIsInit}
        burgerHandler={burgerHandler}
        isBurgerActive={isBurgerActive}
      />
    </div>
  );
};

export default Menu;
