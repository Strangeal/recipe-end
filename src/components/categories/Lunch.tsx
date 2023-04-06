import Populate from "./Populate";
import { lunchList } from "../../data/db";

const Lunch = () => {
  return (
    <>
      <Populate data={lunchList} />
    </>
  );
};

export default Lunch;
