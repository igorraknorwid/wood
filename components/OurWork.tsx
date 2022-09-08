import { ISlider } from "../types";
import Slider from "./Slider";
import Header from "./ui/Header";

const OurWorks = ({ slides }: ISlider) => {
  return (
    <section className='wood w-5/6 mx-auto mt-20 lg:mt-72 '>
      <div className='flex justify-center'>
        <Header h={"h2"}> Our work </Header>
      </div>
      <div className='w-5/6 mx-auto lg:mt-36'>
        <Slider slides={slides} />
      </div>
    </section>
  );
};
export default OurWorks;
