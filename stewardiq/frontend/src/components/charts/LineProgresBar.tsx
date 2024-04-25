import { Scheduler, SchedulerData } from "@bitnoi.se/react-scheduler";
import { useState } from "react";
import "@bitnoi.se/react-scheduler/dist/style.css";
import { useLogInContext } from "@/context/LoginContext";


export const GianttCharts = () => {
  const [filterButtonState, setFilterButtonState] = useState(0);
  const { newDateValue } = useLogInContext();

  const randomDateNumber = Math.floor(Math.random() * 4) + 1;
  const randomMonthNumber = Math.floor(Math.random() * 4) + 1;

  const mockedSchedulerData: SchedulerData = [
    {
      id: "070ac5b5-8369-4cd2-8ba2-0a209130cc60",
      label: {
        icon: "https://picsum.photos/24",
        title: "Joe Doe",
        subtitle: "Frontend Developer",
      },
      data: [
        {
          id: "8b71a8a5-33dd-4fc8-9caa-b4a58",
          startDate: new Date("2024-01-13T15:31:24.272Z"),
          endDate: new Date("2024-02-28T10:28:22.649Z"),
          occupancy: 3600,
          title: "Project A",
          subtitle: "Subtitle A",
          description: "array indexing Salad West Account",
          bgColor: "rgb(254,165,177)",
        },
      ],
    },
    {
      id: "070ac5b5-8369-4cd2-8ba2-0a209130ciuiu",
      label: {
        icon: "",
        title: "Dan",
        subtitle: "Backend Developer",
      },
      data: [
        {
          id: "8b71a8a5-33dd-4fc8-9caa-b4a584b",
          startDate: newDateValue ? new Date("2024-02-20T10:28:22.649Z") : new Date("2024-01-01T10:28:22.649Z"),
          endDate: new Date("2024-02-01T10:28:22.649Z"),
          occupancy: 3600,
          title: "Project A",
          subtitle: "Subtitle A",
          description: "array indexing Salad West Account",
          bgColor: "rgb(254,165,76)",
        },
      ],
    },
  ];
  return (
    <div style={{ height: "400px", position: "relative", marginTop: "20px" }}>
      <Scheduler
        data={mockedSchedulerData}
        isLoading={"" as any}
        onFilterData={() => {
          // Some filtering logic...
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          setFilterButtonState(0);
        }}
        config={{
          zoom: 0,
          filterButtonState,
        }}
      />
    </div>
  );
};

export default GianttCharts;
