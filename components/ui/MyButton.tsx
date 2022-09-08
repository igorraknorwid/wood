import Link from "next/link";

type IMyButton = {
  children: React.ReactNode;
};

const MyButton = ({ children }: IMyButton) => {
  return (
    <Link href='/contact'>
      <a className='mybtn'>{children}</a>
    </Link>
  );
};

export default MyButton;
