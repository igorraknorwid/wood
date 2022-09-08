type IHeader = {
  children: React.ReactNode;
  h: string;
};

const Header = ({ children, h }: IHeader) => {
  if ((h = "h1")) {
    return <h1 className='header_title barrio text-center'>{children}</h1>;
  }
  if ((h = "h2")) {
    return (
      <h2 className='barrio ' style={{ fontSize: "90px", lineHeight: "105px" }}>
        {children}
      </h2>
    );
  }
  if ((h = "h3")) {
    return (
      <h3 className='barrio ' style={{ fontSize: "90px", lineHeight: "105px" }}>
        {children}
      </h3>
    );
  }
  return (
    <h4 className='barrio' style={{ fontSize: "90px", lineHeight: "105px" }}>
      {children}
    </h4>
  );
};

export default Header;
