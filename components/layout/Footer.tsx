import Image from "next/image";
import Link from "next/link";
import Logo from "./logo/Logo";

const Footer = () => {
  return (
    <footer
      className='footer absolute bottom-0 left-0 w-full mx-auto px-2 py-10  xl:py-16 xl:px-24'
      style={{
        backgroundColor: "#222021",
        boxShadow: "0px -6px 52px rgba(245, 245, 245, 0.17)",
      }}
    >
      <div className='flex flex-col xl:flex-row items-center gap-y-5 xl:gap-y-0   gap-x-10 2xl:gap-x-60 text-xl  xl:text-2xl 2xl:text-2xl'>
        <Logo />

        <div className='flex items-center'>
          <Image src='/ph_phone-call.svg' alt='phone' width={50} height={50} />
          <p>+420 000 000 000</p>
        </div>
        <div className=' flex items-center'>
          <Image src='/adress.svg' alt='adress' width={50} height={50} />
          <p>Na Plzeňce 1166/0 150 00</p>
        </div>
      </div>
      <p className='pt-16 text-xl  xl:text-2xl 2xl:text-2xl text-center xl:text-left'>
        Privacy Policy
      </p>
    </footer>
  );
};

export default Footer;
