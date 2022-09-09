import React from "react";
import { IMenu } from "../../types";
import Navbar from "../layout/Navbar";

interface IMobileMenu {
  isInit: boolean;
  isBurgerActive: boolean;
  setIsBurgerActive(value: boolean): void;
  menuData: IMenu[];
}

const MobileMenu = ({
  isInit,
  isBurgerActive,
  setIsBurgerActive,
  menuData,
}: IMobileMenu) => {
  return (
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
  );
};

export default MobileMenu;
