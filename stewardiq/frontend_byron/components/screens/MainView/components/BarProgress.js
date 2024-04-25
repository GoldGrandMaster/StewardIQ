const BarProgress = ({ value, label, color, date, background }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div
        className={`w-[65px] h-[180px] bg-[${background}] relative rounded-xl`}
      >
        <div className="text-[#8492A7] text-[10px] font-[400] absolute top-1.5 text-center left-2 mx-auto">
          {date}
        </div>
        <div
          className={`h-full bg-[${color}] w-full rounded-xl justify-items-end flex text-black absolute bottom-0`}
          style={{ height: value + "%" }}
        />
      </div>

      <div className="text-[#8492A7] text-[10px] font-[400]">{label}</div>
    </div>
  );
};

export default BarProgress;
