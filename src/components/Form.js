const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form className="bg-[#FFD79C] py-5" onSubmit={handleSubmit}>
      <h2 className="mb-2">What do you need for your trip?</h2>
      <select className="mx-1 h-[36px] rounded-full px-5 py-1 text-lg font-semibold text-slate-700">
        {Array.from({ length: 20 }, (ele, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
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
