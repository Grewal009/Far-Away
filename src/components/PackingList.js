import { initialItems } from "../utils/constants";
import Item from "./Item";

const ParckingList = () => {
  return (
    <div className="h-52 overflow-scroll bg-[#A2CDB0] px-5 py-5">
      <ul className="flex flex-wrap items-center justify-center">
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ParckingList;
