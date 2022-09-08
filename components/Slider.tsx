import Image from "next/image";
import React from "react";
import { ISlider } from "../types";

const Slider = ({ slides }: ISlider) => {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const clientX = React.useRef(0);
  const next = () => {
    setCurrentIndex((ci) => {
      if (ci === slides.length) {
        return 1;
      }
      return ci + 1;
    });
  };
  const previous = () => {
    setCurrentIndex((ci) => {
      if (ci === 1) {
        return slides.length;
      }
      return ci - 1;
    });
  };

  return (
    <section className='flex justify-center items-center'>
      <div className='relative w-12 h-12 mx-10 cursor-pointer hover:scale-125'>
        <Image
          src={"/leftArroy.svg"}
          alt='round'
          layout='fill'
          onClick={previous}
        />
      </div>
      <div>
        <div className='slider_image'>
          {slides.map((slide, index) => {
            const isOdd = index % 2 === 0;
            if (slide.id === currentIndex) {
              return (
                <div
                  key={slide.id}
                  className={`${
                    isOdd ? "slider-item--even" : "slider-item--odd"
                  } relative w-full h-full`}
                >
                  <Image
                    onTouchStart={(e) => {
                      clientX.current = e.changedTouches[0].clientX;
                    }}
                    onTouchEnd={(e) => {
                      const x = clientX.current - e.changedTouches[0].clientX;
                      if (x === 0) {
                      }
                      if (x > 0) {
                        next();
                      }

                      if (x < 0) {
                        previous();
                      }
                    }}
                    src={slide.src}
                    alt='slide'
                    layout='fill'
                    style={{ borderRadius: "42px" }}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className='flex justify-center items-center gap-x-5'>
          {slides.map((button, i) => (
            <button
              onClick={() => {
                setCurrentIndex(i + 1);
              }}
              key={button.id}
            >
              <div className='relative w-6 h-6 flex py-10 '>
                <Image
                  src={
                    currentIndex === i + 1 ? "/ellipse2.svg" : "/ellipse1.svg"
                  }
                  alt='round'
                  layout='fill'
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className='relative w-12 h-12 mx-10 cursor-pointer hover:scale-125'>
        <Image
          src={"/rightArroy.svg"}
          alt='round'
          layout='fill'
          onClick={next}
        />
      </div>
    </section>
  );
};

export default Slider;
