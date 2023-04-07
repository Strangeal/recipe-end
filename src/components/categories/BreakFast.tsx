import Populate from "./Populate";
import { breakFastList } from "../../data/db";
import Details from "./Details";

const BreakFast = () => {
  return (
    <>
      <Populate data={breakFastList} />
    </>
  );
};

export default BreakFast;
