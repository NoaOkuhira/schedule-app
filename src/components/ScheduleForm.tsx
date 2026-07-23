import { useState } from "react";
import type { Schedule } from "../types/Schedule";

type ScheduleFormProps = {
  onSave: (schedule: Schedule) => void;
};

function ScheduleForm({ onSave }: ScheduleFormProps) {
  const [day, setDay] = useState("");

  const [title, setTitle] = useState("");

  function saveSchedule() {
    const newSchedule: Schedule = {
      id: Date.now(),
      day: Number(day),
      title: title,
    };

    onSave(newSchedule);
  }

  return (
    <div>
      <h2>予定追加</h2>

      <div>
        <label>日付</label>
        <br />
        <input
          type="number"
          value={day}
          onChange={(event) => setDay(event.target.value)}
        />
      </div>

      <br />

      <div>
        <label>タイトル</label>
        <br />
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <br />

      <button onClick={saveSchedule}>保存</button>
    </div>
  );
}

export default ScheduleForm;
