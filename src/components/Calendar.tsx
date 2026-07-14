import { useState } from "react";
import "./Calendar.css";
import type { Schedule } from "../types/Schedule";

function Calendar() {


    const [currentDate, setCurrentDate] = useState(new Date());

    function previousMonth() {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() - 1);
        setCurrentDate(newDate);
    }

    function nextMonth() {
        const newDate = new Date(currentDate);
        newDate.setMonth(newDate.getMonth() + 1);
        setCurrentDate(newDate);
    }

    const week = ["月", "火", "水", "木", "金", "土", "日"];

    const schedules: Schedule[] = [
        {
            id: 1,
            day: 7,
            title: "AWS勉強"
        },
        {
            id: 2,
            day: 18,
            title: "病院"
        },
        {
            id: 3,
            day: 25,
            title: "買い物"
        }
    ];

    const year = currentDate.getFullYear();

    const month = currentDate.getMonth();

    const lastDay = new Date(year, month + 1, 0).getDate();

    const firstDay = new Date(year, month, 1).getDay();

    const startDay = firstDay === 0 ? 6 : firstDay - 1;

    const today = new Date();

    const isCurrentMonth =
        today.getFullYear() === year &&
        today.getMonth() === month;

    const todayDate = today.getDate();

    const days = [];

    for (let i = 0; i < startDay; i++) {
        days.push("");
    }

    for (let i = 1; i <= lastDay; i++) {
        days.push(i);
    }

    return (

        <div className="calendar">

            <div className="calendar-header">

                <button onClick={previousMonth}>←</button>

                <h2>

                    {currentDate.getFullYear()}年

                    {currentDate.getMonth() + 1}月

                </h2>

                <button onClick={nextMonth}>→</button>

            </div>

            <div className="week">

                {week.map((day) => (

                    <div key={day}>

                        {day}

                    </div>

                ))}

            </div>

            <div className="days">

                {days.map((day, index) => (

                    <div
                        key={index}
                        className={
                            isCurrentMonth && day === todayDate
                                ? "day today"
                                : "day"
                        }
                    >

                        <div className="day-number">
                            {day}
                        </div>

                        {schedules
                            .filter(schedule => schedule.day === day)
                            .map(schedule => (

                                <div
                                    key={schedule.id}
                                    className="schedule"
                                >
                                    {schedule.title}
                                </div>

                            ))}

                    </div>

                ))}

            </div>
        </div>
    );

}

export default Calendar;