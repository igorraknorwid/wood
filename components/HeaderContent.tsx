import Header from "./ui/Header";
import ImageBox from "./ui/ImageBox";
import MyButton from "./ui/MyButton";

const HeaderContent = () => {
  return (
    <div className='header__content'>
      <div
        className='
       flex flex-col justify-center  lg:flex-row lg:justify-between
      '
      >
        <div className='inter min-w-min pt-10 lg:pt-20 pb-12 lg:pb-20  pl-8 lg:pl-20 lg:basis-1/2'>
          <div className=' header__title'>
            <Header h='h1'>Solid wood products</Header>
          </div>
          <p className='mt-3 lg:mt-20 text-sm lg:text-3xl'>
            Oak, beech, ash from <br />
            170$ per m3
          </p>
          <button className='mt-10 lg:mt-40'>
            <MyButton>Order</MyButton>
          </button>
          <div className='header__content_stick mt-10 lg:hidden '></div>
        </div>
        <div className='header__border-line hidden lg:block '></div>
        <div className='relative lg:basis-1/2'>
          <div className='header__image-box first'>
            <ImageBox src='https://res.cloudinary.com/zielona-g-ra/image/upload/v1661948719/wood/image1_vn0dcv.webp' />
          </div>
          <div className='header__image-box second'>
            <ImageBox src='https://res.cloudinary.com/zielona-g-ra/image/upload/v1661949214/wood/image3_pkjljy.webp' />
          </div>
          <div className='header__image-box third'>
            <ImageBox src='https://res.cloudinary.com/zielona-g-ra/image/upload/v1661949208/wood/image2_eodcwu.webp' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
