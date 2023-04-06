import Populate from "./Populate";
import { breakFastList } from "../../data/db";

const BreakFast = () => {
  return (
    <>
      <Populate data={breakFastList} />
    </>
  );
};

export default BreakFast;
