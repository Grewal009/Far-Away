import { useState } from "react";
import { initialItems } from "../utils/constants";
import Item from "./Item";

const ParckingList = ({ items, deleteItem, status }) => {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") {
    sortedItems = items;
  }
  if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sort === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div>
      <div className="flex h-52 flex-col overflow-y-scroll bg-[#A2CDB0] px-5 py-5">
        <ul className="flex flex-wrap items-center justify-center">
          {sortedItems.map((it) => (
            <Item
              item={it}
              key={it.id}
              deleteItem={deleteItem}
              status={status}
            />
          ))}
        </ul>
      </div>
      <div className="bg-[#A2CDB0] py-2">
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className=" w-auto rounded-full px-3 py-1 text-center text-sm font-semibold uppercase text-slate-700"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="ml-2 mt-2 w-auto rounded-full bg-amber-800 px-3 py-1 text-sm uppercase text-slate-300 hover:bg-amber-700">
          Clear
        </button>
      </div>
    </div>
  );
};

export default ParckingList;
