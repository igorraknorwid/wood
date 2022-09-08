import Image from "next/image";
import Header from "./ui/Header";
import MyButton from "./ui/MyButton";

const Advantages = () => {
  return (
    <section className='wood w-5/6 mx-auto mt-20 lg:mt-72'>
      <div className='flex  justify-center'>
        <Header h={"h2"}>Advantages working with us</Header>
      </div>
      <div className='w-full mx-auto lg:mt-36 flex flex-col lg:flex-row justify-center mt-10'>
        <div className='relative basis-1/2'>
          <div className='text-center relative advantages_img-box'>
            <Image
              src={
                "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662112581/wood/video_i1lmyr.webp"
              }
              alt='image'
              layout='fill'
              style={{ borderRadius: "42px" }}
            />
          </div>
        </div>
        <div className='inter text-xl xl:text-3xl font-medium basis-1/2 mt-10'>
          <ul className='px-10'>
            <li>In-house carpentry production</li>
            <li className='mt-12'>
              We only treat wood with environmentally friendly and safe products
            </li>
            <li className='mt-12'>
              Prices from the manufacturer, no extra charges
            </li>
          </ul>
        </div>
      </div>
      <div className='text-center mt-24'>
        <MyButton>Receive a consultation</MyButton>
      </div>
    </section>
  );
};
export default Advantages;
