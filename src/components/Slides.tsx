import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper";
import Product from "./Product";
import Headline from "./Headline";

type ProductListProps = {
  products: {
    label: string;
    imgPath: string;
  }[];
};

const Slides = ({ products }: ProductListProps) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        spaceBetween={10}
        slidesPerView={2.1}
      >
        {products &&
          products.map((item, index) => (
            <SwiperSlide key={index}>
              <Product item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slides;
