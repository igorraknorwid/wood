import Link from "next/link";
import { IMenu } from "./../../types";

const Navbar = ({
  menuData,
  ulStyles = "",
  liStyles = "",
  closeMobilePanel = () => {},
}: {
  menuData: IMenu[];
  ulStyles?: string;
  liStyles?: string;
  closeMobilePanel?(): void;
}) => {
  return (
    <ul className={`${ulStyles}`}>
      {menuData.map((item) => (
        <li key={item.id} className={`${liStyles}`} onClick={closeMobilePanel}>
          <Link href={`/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
