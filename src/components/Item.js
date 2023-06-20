const Item = ({ item }) => {
  return (
    <li className="mx-8 my-1 text-lg font-semibold text-slate-700">
      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.description}
      </span>
      &nbsp;
      <button className="text-sm">❌</button>
    </li>
  );
};

export default Item;
