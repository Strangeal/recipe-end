import FoodCategory from "./FoodCategory";

type DataProps = {
  data: {
    name: string;
    img: string;
    cal: number;
  }[];
};

const Populate = ({ data }: DataProps) => {
  return (
    <div className="populate">
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <FoodCategory items={item} />
          </div>
        ))}
    </div>
  );
};

export default Populate;
