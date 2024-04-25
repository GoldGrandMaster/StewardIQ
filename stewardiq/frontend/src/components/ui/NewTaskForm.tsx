import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { useLayoutContext } from "@/context/LayoutContext";
import { useCreateTaskContext } from "@/context/CreateTaskContext";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  placeholder?: string;
  inputVal: any;
  changeFunc: any;
}

const InputComponent = ({ placeholder, inputVal, changeFunc }: InputProps) => {
  return (
    <input
      value={inputVal}
      onChange={changeFunc}
      className="border border-white w-full placeholder:capitalize rounded-[5px] px-[10px] py-[5px] [background-color:_transparent] text-white"
      placeholder={placeholder}
    />
  );
};

const NewTaskFrom: React.FC = () => {
  const { setOpenModalTaskWindow } = useLayoutContext();
  const { setNewTask, taskCreated } = useCreateTaskContext();

  const [nameInputValue, setNameInputValue] = useState<string>("");
  const [costInputValue, setCostInputValue] = useState<string>("");
  const [priorityInputValue, setPriorityInputValue] = useState<string>("");
  const [statusInputValue, setStatusInputValue] = useState<string>("");
  const [plannedDurationInputValue, setPlannedDurationInputValue] = useState<string>("");
  const [plannedStartInputValue, setPlannedStartInputValue] = useState<string>("");
  const [descriprionInput, setDescriptionInput] = useState<string>("");

  const handleInputNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(event.target.value);
  };

  const handleInputCostChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCostInputValue(event.target.value);
  };

  const handlePriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriorityInputValue(event.target.value);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusInputValue(event.target.value);
  };

  const handlePlannedDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlannedDurationInputValue(event.target.value);
  };

  const handlePlannedStartChange = (event: any) => {
    setPlannedStartInputValue(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setDescriptionInput(event.target.value);
  };

  const handleSubmitTask = () => {
    setNewTask([
      nameInputValue,
      costInputValue,
      priorityInputValue,
      statusInputValue,
      plannedDurationInputValue,
      plannedStartInputValue,
      descriprionInput,
    ]);
  };

  return (
    <>
      <div className="fixed md:w-[600px] border rounded-[10px] border-white w-[90%] top-[5%] md:top-[10%] left-[5%] md:left-[20%] lg:left-[20%] xl:left-[30%] z-10">
        <div className="flex flex-col bg-[#393646] p-[20px] items-start rounded-[10px]">
          <div className="w-full flex flex-row justify-between">
            <h2 className="text-[20px] font-semibold items-center capitalize">Create new task</h2>
            <button
              onClick={() => setOpenModalTaskWindow(false)}
              className="bg-[#171717] hover:bg-opacity-40 transition-all capitalize px-[20px] py-[10px] rounded-[10px]"
            >
              Close
            </button>
          </div>
          <div className="flex flex-row w-full mt-[20px] flex-wrap gap-[20px]">
            <div className="flex w-full md:w-[48%] flex-col gap-[5px]">
              <p className="text-[12px]">Name and Second name</p>
              <InputComponent
                inputVal={nameInputValue}
                changeFunc={handleInputNameChange}
                placeholder="Name and second name"
              />
            </div>

            <div className="flex w-full md:w-[48%] flex-col gap-[5px]">
              <p className="text-[12px]">Cost</p>
              <InputComponent
                changeFunc={handleInputCostChange}
                inputVal={costInputValue}
                type="number"
                placeholder="Cost"
              />
            </div>

            <div className="flex w-full md:w-[48%] flex-col gap-[5px]">
              <p className="text-[12px]">Priority</p>
              <select
                value={priorityInputValue}
                onChange={handlePriorityChange}
                className="border w-full border-white appearance-none placeholder:capitalize rounded-[5px] px-[10px] py-[5px] [background-color:_transparent] text-white"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="Hight">Hight</option>
              </select>
            </div>

            <div className="flex w-full md:w-[48%] flex-col gap-[5px]">
              <p className="text-[12px]">Status</p>
              <select
                value={statusInputValue}
                onChange={handleStatusChange}
                className="border appearance-none whitespace-nowrap border-white w-full placeholder:capitalize rounded-[5px] px-[10px] py-[5px] [background-color:_transparent] text-white"
              >
                <option defaultChecked value="In Process">
                  In Procces
                </option>
                <option value="Done">Done</option>
                <option value="Not Started">Not Started</option>
              </select>
            </div>

            <div className="flex w-full md:w-[48%] flex-col gap-[5px]">
              <p className="text-[12px]">Planned Duration (hours)</p>
              <InputComponent
                inputVal={plannedDurationInputValue}
                changeFunc={(e: any) => handlePlannedDurationChange(e)}
                type="number"
                placeholder="Planned duration"
              />
            </div>

            <div className="flex w-full md:w-[48%] flex-col gap-[5px]">
              <p className="text-[12px]">Planned Start Date</p>
              <input
                value={plannedStartInputValue}
                onChange={handlePlannedStartChange}
                className="border border-white w-full placeholder:capitalize rounded-[5px] px-[10px] py-[5px] [background-color:_transparent] text-white"
                type="date"
              />
            </div>

            <div className="flex w-full flex-col gap-[5px]">
              <p className="text-[12px]">Description</p>
              <textarea
                value={descriprionInput}
                onChange={handleDescriptionChange}
                rows={5}
                className="border border-white w-full placeholder:capitalize rounded-[5px] px-[10px] py-[5px] [background-color:_transparent] text-white"
              />
            </div>
          </div>
          <div className="w-full mt-[40px]">
            <button
              onClick={handleSubmitTask}
              className="bg-gold capitalize py-[10px] transition-all hover:bg-white hover:text-black rounded-[10px] w-full bg-opacity-80 text-black"
            >
              {taskCreated <= [] ? " Create task" : "Task created"}
            </button>
          </div>
        </div>
      </div>
      <div className="fixed backdrop-blur-sm top-0 left-0 h-full w-full bg-black opacity-30 z10" />
    </>
  );
};

export default NewTaskFrom;
