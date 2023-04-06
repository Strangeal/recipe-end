import Populate from "./Populate";
import { dinnerList } from "../../data/db";

const Dinner = () => {
  return (
    <>
      <Populate data={dinnerList} />
    </>
  );
};

export default Dinner;
