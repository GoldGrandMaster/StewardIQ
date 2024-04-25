import dynamic from "next/dynamic";
import { useCreateTaskContext } from "@/context/CreateTaskContext";

const ProgressBar = dynamic(() => import("@/components/charts/ProgressBar"), { ssr: false });

const AllChartDetail: React.FC = () => {
  const { setOpenAllCharts } = useCreateTaskContext();
  return (
    <>
      <div className="fixed border rounded-[10px] border-white w-[60%] max-h-[600px] lg:max-h-[750px] flex flex-col lg:flex-row top-[0%] md:top-[15%] left-[20%] z-20">
        <div className="flex w-full overflow-y-auto flex-col bg-[#393646] p-[20px] rounded-[10px]">
          <div className="flex mb-[20px] flex-row justify-end items-end">
            <button
              onClick={() => setOpenAllCharts(false)}
              className="bg-[#171717] hover:bg-opacity-40 transition-all capitalize px-[20px] py-[10px] rounded-[10px]"
            >
              Close
            </button>
          </div>
          <div className="relative w-full mx-auto max-w-[750px] overflow-x-auto sm:rounded-[5px]">
            <table className="w-full text-center mb-[20px]">
              <thead>
                <tr>
                  <th className="pb-[20px] px-[20px]">Project Name</th>
                  <th className="pb-[20px] px-[20px]">Planned Expenses</th>
                  <th className="pb-[20px] px-[20px]">Total Expenses</th>
                  <th className="pb-[20px] px-[20px]">Attached Sponsors</th>
                  <th className="pb-[20px] px-[20px]">Attached Developers</th>
                  <th className="pb-[20px] px-[20px]">Progress</th>
                </tr>
              </thead>
              <tbody className="border-y-[1px] my-[10px]">
                <tr>
                  <td className="py-s[20px]">Jersy project</td>
                  <td>10,000</td>
                  <td>12,000</td>
                  <td>12</td>
                  <td>10</td>
                  <td className="py-[10px]">
                    <ProgressBar heightValue={50} iRadius={10} outRadius={20} percentage={76} />
                  </td>
                </tr>
                <tr>
                  <td className="py-[20px]">Nensy&apos;s</td>
                  <td>23,000</td>
                  <td>5,000</td>
                  <td>8</td>
                  <td>5</td>
                  <td className="py-[10px]">
                    <ProgressBar heightValue={50} iRadius={10} outRadius={20} percentage={54} />
                  </td>
                </tr>
                <tr>
                  <td className="py-[20px]">MD&apos;s</td>
                  <td>100,000</td>
                  <td>67,000</td>
                  <td>15</td>
                  <td>11</td>
                  <td className="py-[10px]">
                    <ProgressBar heightValue={50} iRadius={10} outRadius={20} percentage={32} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="fixed backdrop-blur-sm top-0 left-0 h-full w-full bg-black opacity-50 z-10" />
    </>
  );
};

export default AllChartDetail;
