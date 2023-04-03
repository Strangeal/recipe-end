import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import "swiper/css";
import { Autoplay } from "swiper";
import Headline from "./Headline";

type RecipeListProps = {
  recipes: {
    recipe_name: string;
    cooking_time: string;
    recipe_image: string;
    likes: number;
    rating: number;
    chef_image: string;
    chef_name: string;
    posted_time: string;
  }[];
};

const HeadlineSlides = ({ recipes }: RecipeListProps) => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        spaceBetween={1}
        slidesPerView={1}
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <Headline recipe={recipe} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeadlineSlides;
