const Sorts = () => {
  return (
    <div className="bg-[#A2CDB0] py-2">
      <select className="mx-1 w-auto rounded-full px-3 py-1 text-center text-sm font-semibold uppercase text-slate-700">
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button className="ml-2 w-auto rounded-full bg-amber-800 px-3 py-1 text-sm uppercase text-slate-300 hover:bg-amber-700">
        Clear
      </button>
    </div>
  );
};

export default Sorts;
