import { initialItems } from "../utils/constants";
import Item from "./Item";

const ParckingList = ({ items, deleteItem, status }) => {
  return (
    <div className="flex h-52 flex-col overflow-y-scroll bg-[#A2CDB0] px-5 py-5">
      <ul className="flex flex-wrap items-center justify-center">
        {items.map((it) => (
          <Item item={it} key={it.id} deleteItem={deleteItem} status={status} />
        ))}
      </ul>
    </div>
  );
};

export default ParckingList;
