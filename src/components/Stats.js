const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="bg-[#85A389] py-5">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const packedItems = items.filter((it) => it.packed === true).length;
  const percentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="bg-[#85A389] py-5">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go 🚀`
          : `🧳 You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
