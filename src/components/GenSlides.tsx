import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import FoodCategory from "./categories/FoodCategory";

type BreakFastProps = {
  data: {
    id: number;
    name: string;
    img: string;
    cal: number;
    category: string;
    cooking_time: string;
  }[];
};
const BreakFastSlides = ({ data }: BreakFastProps) => {
  const sliceData = data.slice(0, 3);
  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={2.1}>
        {sliceData &&
          sliceData.map((item, index) => (
            <SwiperSlide key={index}>
              <FoodCategory items={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default BreakFastSlides;
