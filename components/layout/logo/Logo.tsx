import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  const [isHover, setIsHover] = React.useState(false);
  return (
    <Link href='/'>
      <div
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        className='logo relative'
      >
        <Image
          src={isHover ? "/logo_focus.svg" : "/logo.svg"}
          alt='logo'
          layout='fill'
        />
      </div>
    </Link>
  );
};

export default Logo;
