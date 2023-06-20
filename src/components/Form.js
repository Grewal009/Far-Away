const Form = () => {
  return (
    <form className="bg-[#FFD79C] py-5">
      <h2 className="mb-2">What do you need for your trip?</h2>
      <select className="mx-1 rounded-full px-5 py-1 text-lg font-semibold text-slate-700">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        className="mx-1 rounded-full px-5 py-1 text-lg font-semibold text-slate-700"
      />
      <button className="mx-1 rounded-full bg-amber-800 px-5 py-1 text-lg font-semibold text-slate-300 hover:bg-amber-700">
        Add
      </button>
    </form>
  );
};

export default Form;
