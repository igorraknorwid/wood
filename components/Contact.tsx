import Header from "./ui/Header";
import Image from "next/image";
import Form from "./Form";

const Contact = () => {
  return (
    <section
      className='w-5/6 mx-auto pt-20 lg:pt-72 '
      style={{ paddingBottom: "400px" }}
    >
      <div className='flex justify-center'>
        <Header h={"h2"}> Any questions?</Header>
      </div>

      <div className='lg:w-5/6 mx-auto lg:mt-20 flex  flex-col-reverse lg:flex-row lg:gap-x-16 '>
        <div className='lg:basis-1/2 mt-10'>
          <Form />
        </div>
        <div className='lg:basis-1/2 flex flex-col'>
          <p className='lg:mb-40 mt-10 text-xl lg:text-3xl'>
            Write to us and we will be sure to answer all your questions and
            give you a comprehensive consultation.
          </p>
          <div className='contact__image-box justify-self-end text-right mb-20 hidden lg:block'>
            <Image
              src={
                "https://res.cloudinary.com/zielona-g-ra/image/upload/v1662121008/wood/image_1_ri8fhd.png"
              }
              alt=''
              width='477px'
              height='482px'
              style={{ borderRadius: "42px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
