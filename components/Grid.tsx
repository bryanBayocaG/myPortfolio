import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { Reveal } from "./ui/Reveal";
// import BouncingHand from "./ui/BouncingHand";
import dynamic from "next/dynamic";

const Grid = () => {
  const BouncingHand = dynamic(() => import("./ui/BouncingHand"), {
    ssr: false,
  });
  return (
    <section id="about">
      {/* <div className="relative flex w-full">
        <div>
          <h1 className="heading text-3xl md:text-6xl font-extrabold text-center">
            Things <span className="text-blue-700">About Me. </span>
          </h1>
        </div>
        <div className="text-white rotate-90 justify-items-end ">
          <BouncingHand />
        </div>
      </div> */}

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            link={item.link}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
