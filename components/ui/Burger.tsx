import React from "react";

interface IBurger {
  setIsInit(value: boolean): void;
  burgerHandler(): void;
  isBurgerActive: boolean;
}

const Burger = ({ setIsInit, burgerHandler, isBurgerActive }: IBurger) => {
  return (
    <div
      className='burger  lg:hidden'
      onClick={() => {
        setIsInit(true);
        burgerHandler();
      }}
    >
      <div
        className={
          isBurgerActive ? "burger__top-line" : "burger__top-line--short"
        }
      ></div>
      <div className={"burger__mid-line"}></div>
      <div
        className={
          isBurgerActive ? "burger__bottom-line" : "burger__top-bottom--short"
        }
      ></div>
    </div>
  );
};

export default Burger;
