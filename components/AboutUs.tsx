import Image from "next/image";
import Header from "./ui/Header";

const AboutUs = () => {
  return (
    <section className=' w-full pt-20 lg:pt-72'>
      <div className='woodbox lg:flex'>
        <div className='woodbox_content  lg:flex-1'>
          <Header h={"h2"}> About Us</Header>
          <div className='  text-lg  lg:text-3xl mt-9 lg:mt-16  '>
            BIO CWT - We manufacture solid wood products according to individual
            drawings. We make chairs, armchairs, wardrobes, beds and much more
            in our own workshop, equipped with all the necessary industrial
            equipment.
          </div>
        </div>
        <div className='woodbox_images  lg:shrink-0 '>
          <div className='absolute top-5 lg:top-5 left-5 lg:right-10 z-0'>
            <div className='woodbox__image'>
              <Image
                src='https://res.cloudinary.com/zielona-g-ra/image/upload/v1662117674/wood/cropped-man-wearing-blue-overall-drawing-furniture-sheet-paper_2_fpxlfu.png'
                layout='fill'
                alt=''
              />
            </div>
          </div>
          <div className='absolute  top-64 lg:top-96 right-5 lg:right-16 z-0'>
            <div className='woodbox__image'>
              <Image
                src='https://res.cloudinary.com/zielona-g-ra/image/upload/v1662117700/wood/person-taking-measures-wood_2_rdtdld.png'
                layout='fill'
                alt=''
              />
            </div>
          </div>
          <div className='absolute top-24 lg:top-44 left-20 lg:left-20 z-0'>
            <div className='woodbox__big_image'>
              <Image
                src='https://res.cloudinary.com/zielona-g-ra/image/upload/v1662117707/wood/portrait-young-motivated-carpenter-standing-by-woodworking-machine-his-carpentry-workshop_2_dhpf9f.png'
                layout='fill'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
