import Image from "next/image";
import { CardDescription, IWoodCards } from "../../types";

const WoodSingleCard = ({
  image_src,
  title,
  description,
}: {
  image_src: string;
  title: string;
  description: CardDescription[];
}) => {
  return (
    <div>
      <div className='scale2x relative w-full h-64'>
        <Image
          src={image_src}
          layout='fill'
          alt=''
          style={{ borderRadius: "42px" }}
        />
      </div>
      <p className='inter pt-10 pb-4  text-center text-xl lg:text-3xl font-bold'>
        {title}
      </p>
      <ul className='flex flex-col'>
        {description.map((item, index) => (
          <li className='flex  items-center  gap-x-4  mt-6' key={index}>
            <div>
              <Image
                src={item.isTrue ? "/ok.svg" : "/cross.svg"}
                alt={item.option}
                width={24}
                height={24}
              />
            </div>

            <div className='text-xl lg:text-3xl font-medium'>{item.option}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const WoodCards = ({ cards, ulStyles }: IWoodCards) => {
  return (
    <ul className={ulStyles}>
      {cards.map((card) => (
        <li key={card.id}>
          <WoodSingleCard
            image_src={card.image_src}
            title={card.title}
            description={card.description}
          />
        </li>
      ))}
    </ul>
  );
};

export default WoodCards;
