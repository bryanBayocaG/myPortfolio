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
      <Reveal>
        <div className="flex w-full">
          <div>
            <h1 className="heading text-6xl font-extrabold text-center">
              Things <span className="text-blue-700">About Me. </span>
            </h1>
          </div>
          <div className="text-white rotate-90 justify-items-end ">
            <BouncingHand />
          </div>
        </div>
      </Reveal>

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
