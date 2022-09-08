import Image from "next/image";

const ImageBox = ({ src }: { src: string }) => {
  return (
    <div
      className='image_box'
      style={{
        background: "inherit",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Image src={src} alt='' layout='fill' />
    </div>
  );
};

export default ImageBox;
