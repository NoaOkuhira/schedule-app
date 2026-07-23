import { useState } from "react";
import type { Schedule } from "../types/Schedule";

import Header from "../components/Header";
import Calendar from "../components/Calendar";
import TodaySchedule from "../components/TodaySchedule";
import AddButton from "../components/AddButton";
import ScheduleForm from "../components/ScheduleForm";

function Home() {
  const [showForm, setShowForm] = useState(false);

  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: 1,
      day: 7,
      title: "AWS勉強",
    },
    {
      id: 2,
      day: 18,
      title: "病院",
    },
    {
      id: 3,
      day: 25,
      title: "買い物",
    },
  ]);

  function addSchedule(newSchedule: Schedule) {
    setSchedules([...schedules, newSchedule]);
  }

  return (
    <div>
      <Header />

      <Calendar schedules={schedules} />

      <TodaySchedule />

      <AddButton onClick={() => setShowForm(!showForm)} />

      {showForm && <ScheduleForm onSave={addSchedule} />}

      <button>予定変更</button>
    </div>
  );
}

export default Home;
