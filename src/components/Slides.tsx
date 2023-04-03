import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper";
import Product from "./Product";
import Headline from "./Headline";

type ProductListProps = {
  products: {
    id: number;
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
        spaceBetween={5}
        slidesPerView={2}
      >
        {products.map((item) => (
          <div className="keyProps" key={item.id}>
            <SwiperSlide>
              <Product item={item} />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Slides;
