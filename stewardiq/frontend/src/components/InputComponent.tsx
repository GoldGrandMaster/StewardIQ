import dynamic from "next/dynamic";
import { DetailedHTMLProps, ButtonHTMLAttributes, useState } from "react";
import { useCreateTaskContext } from "@/context/CreateTaskContext";

const LineProgresBar = dynamic(() => import("@/components/charts/LineProgresBar"), { ssr: false });

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string | any;
  updateSaveStateOption?: boolean;
}

const AddUpdateButton = ({ text, updateSaveStateOption, ...props }: ButtonProps) => {
  const [updateSaveState, setUpdateSaveState] = useState<boolean>(false);
  return (
    <button
      onClick={() => setUpdateSaveState(!updateSaveState)}
      {...props}
      className="bg-[#171717] hover:bg-opacity-40 transition-all capitalize px-[20px] py-[10px] rounded-[10px]"
    >
      {updateSaveStateOption ? <p>{updateSaveState ? "Save" : "Update"}</p> : <p>{text}</p>}
    </button>
  );
};

const programData = [
  { name: "Jan", MVP1: 4000, MVP2: 2400, MVP3: 2400 },
  { name: "Feb", MVP1: 3000, MVP2: 1398, MVP3: 2210 },
  { name: "Mar", MVP1: 2000, MVP2: 7600, MVP3: 2290 },
  { name: "April", MVP1: 2000, MVP2: 9800, MVP3: 2290 },
];

const projectData = [
  { name: "Jan", MVP1: 2000, MVP2: 4400, MVP3: 6100 },
  { name: "Feb", MVP1: 500, MVP2: 1398, MVP3: 3210 },
  { name: "Mar", MVP1: 4000, MVP2: 9800, MVP3: 2290 },
  { name: "April", MVP1: 900, MVP2: 7900, MVP3: 2290 },
];

const InputComponent: React.FC = () => {
  const { programTask } = useCreateTaskContext();
  return (
    <>
      {programTask === "Program" ? (
        <div className="flex flex-col gap-[20px]">
          <p className="font-[700] text-[30px]">Program</p>
          <div className="text-white bg-white bg-opacity-20 p-[20px] rounded-[20px] w-full flex flex-col gap-[30px] lg:gap-[50px]">
            <div className="flex flex-col gap-[20px] w-full">
              <h2 className="text-[20px] font-[700]">Jeny&apos;s Project</h2>
              <LineProgresBar inputData={programData} />
            </div>
            <div className="flex flex-col gap-[20px] w-full">
              <h2 className="text-[20px] font-[700]">Nensy&apos;s</h2>
              <LineProgresBar inputData={programData} />
            </div>
            <div className="flex flex-col gap-[20px] w-full">
              <h2 className="text-[20px] font-[700]">MD&apos;s</h2>
              <LineProgresBar inputData={programData} />
            </div>
          </div>
        </div>
      ) : programTask === "Project" ? (
        <div className="flex flex-col gap-[20px]">
          <p className="font-[700] text-[30px]">Project</p>
          <div className="text-white bg-white bg-opacity-20 p-[20px] rounded-[20px] w-full flex flex-col gap-[30px] lg:gap-[50px]">
            <div className="flex flex-col gap-[20px] w-full">
              <h2 className="text-[20px] font-[700]">Jeny&apos;s Project</h2>
              <LineProgresBar inputData={projectData} />
            </div>
            <div className="flex flex-col gap-[20px] w-full">
              <h2 className="text-[20px] font-[700]">Nensy&apos;s</h2>
              <LineProgresBar inputData={projectData} />
            </div>
            <div className="flex flex-col gap-[20px] w-full">
              <h2 className="text-[20px] font-[700]">MD&apos;s</h2>
              <LineProgresBar inputData={projectData} />
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white bg-white bg-opacity-20 p-[20px] rounded-[20px] w-full flex flex-col gap-[30px] lg:gap-[50px]">
          <div className="flex flex-col gap-[20px] w-full">
            <h2 className="text-[20px] font-[700]">Nensy&apos;s</h2>
            <LineProgresBar inputData={programData} />
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <h2 className="text-[20px] font-[700]">MD&apos;s</h2>
            <LineProgresBar inputData={programData} />
          </div>
          <div className="flex flex-col gap-[20px] w-full">
            <h2 className="text-[20px] font-[700]">MD&apos;s</h2>
            <LineProgresBar inputData={projectData} />
          </div>
        </div>
      )}
    </>
  );
};

export default InputComponent;
