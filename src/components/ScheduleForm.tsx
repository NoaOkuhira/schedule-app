import { useState } from "react";


function ScheduleForm() {
    const [day, setDay] = useState("");

    const [title, setTitle] = useState("");

    function saveSchedule() {
        console.log(day);
        console.log(title);
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

            <button onClick={saveSchedule}>

                保存

            </button>

        </div>
    );
}

export default ScheduleForm;