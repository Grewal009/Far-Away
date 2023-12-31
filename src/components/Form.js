import { useState } from "react";

const Form = ({ addItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    console.log(e);
    const newItem = {
      description,
      quantity,
      id: Date.now(),
      packed: false,
    };
    addItems(newItem);
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="bg-[#FFD79C] py-5" onSubmit={handleSubmit}>
      <h2 className="">What do you need for your trip?</h2>
      <div className="">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mx-1 my-3 h-[36px] rounded-full px-5 py-1 text-lg font-semibold text-slate-700"
        >
          {Array.from({ length: 20 }, (ele, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Item..."
          className="mx-1 rounded-full px-5 py-1 text-lg font-semibold text-slate-700"
        />
        <button className="mx-1 mt-3 rounded-full bg-amber-800 px-5 py-1 text-lg font-semibold uppercase text-slate-300 hover:bg-amber-700">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
