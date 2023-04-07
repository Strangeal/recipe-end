import { Avatar, Card, CardHeader } from "@mui/material";
import FoodCategory from "./FoodCategory";
import Details from "./Details";

type DataProps = {
  data: {
    id: number;
    name: string;
    img: string;
    cal: number;
    category: string;
  }[];
};

const Populate = ({ data }: DataProps) => {
  return (
    <>
      <Card elevation={0}>
        <CardHeader
          avatar={<Avatar>RR</Avatar>}
          title="Welcome Home"
          subheader="Eat all you can"
        />
      </Card>
      <div className="populate">
        {data &&
          data.map((item, index) => (
            <div key={item.id}>
              <FoodCategory items={item} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Populate;
