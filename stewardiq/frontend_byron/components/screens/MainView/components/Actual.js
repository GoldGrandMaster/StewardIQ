const Actual = ({ value, label, color }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="w-full text-black text-center text-base font-medium flex justify-between items-center">
        <div className="text-[black] text-[10px] font-[500]">{label}</div>
        <div className="text-[#8492A7] text-[10px] font-[400]">{value}%</div>
      </div>
      <div className="w-full h-[8px] bg-[#EAE9E6] relative rounded-[2px]">
        <div
          className={`h-full bg-[#D4D5D7] rounded-[2px] justify-between flex text-black`}
          style={{ width: value + "%" }}
        />
      </div>
    </div>
  );
};

export default Actual;
