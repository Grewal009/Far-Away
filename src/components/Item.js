const Item = ({ item, deleteItem, status }) => {
  return (
    <li className="mx-8 my-1 text-lg font-semibold text-slate-700">
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => status(item.id)}
      />
      &nbsp;
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>
      &nbsp;
      <button onClick={() => deleteItem(item.id)} className="text-sm">
        ❌
      </button>
    </li>
  );
};

export default Item;
