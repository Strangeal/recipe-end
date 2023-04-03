import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper";
import Product from "./Product";
import React from "react";

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
        autoplay={{ delay: 200000 }}
        spaceBetween={1}
        slidesPerView={2}
      >
        {products.map((item, index) => (
          <React.Fragment key={index}>
            <SwiperSlide>
              <Product item={item} />
            </SwiperSlide>
          </React.Fragment>
        ))}
      </Swiper>
    </div>
  );
};

export default Slides;
