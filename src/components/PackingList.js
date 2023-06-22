import { initialItems } from "../utils/constants";
import Item from "./Item";

const ParckingList = ({ items }) => {
  return (
    <div className="h-52 overflow-scroll bg-[#A2CDB0] px-5 py-5">
      <ul className="flex flex-wrap items-center justify-center">
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default ParckingList;
