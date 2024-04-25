import HeaderTitle from "@/components/header-title";
import ScheduleTable from "./schedule-table";

const Schedule = () => {
  return (
    <div className="p-4">
      <div>
        <HeaderTitle title="Pacientes Agendados" />
      </div>
      <ScheduleTable />
    </div>
  );
};

export default Schedule;
