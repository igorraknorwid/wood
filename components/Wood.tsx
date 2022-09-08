import WoodCards from "./layout/WoodCards";
import Header from "./ui/Header";
import { IWoodCards } from "./../types";

const Wood = ({ cards }: IWoodCards) => {
  return (
    <section className='wood l lg:w-5/6 mx-4 lg:mx-auto mt-20 lg:mt-72'>
      <div className='flex justify-center header__title'>
        <Header h={"h2"}>THE WOOD WE WORK WITH</Header>
      </div>
      <div className='w-full lg:w-5/6 mx-0  lg:mx-auto mt-20 lg:mt-36'>
        <WoodCards
          cards={cards}
          ulStyles='flex flex-col lg:flex-row justify-center gap-y-20 lg:gap-y-0  gap-x-0 lg:gap-x-44'
        />
      </div>
    </section>
  );
};
export default Wood;
