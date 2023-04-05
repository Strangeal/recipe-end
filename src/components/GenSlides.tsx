import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper";
import FoodCategory from "./categories/FoodCategory";

type BreakFastProps = {
  data: {
    name: string;
    img: string;
    cal: number;
  }[];
};
const BreakFastSlides = ({ data }: BreakFastProps) => {
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={2.1}>
        {data &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <FoodCategory items={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BreakFastSlides;
