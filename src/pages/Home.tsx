import { useState } from "react";

import Header from "../components/Header";
import Calendar from "../components/Calendar";
import TodaySchedule from "../components/TodaySchedule";
import AddButton from "../components/AddButton";
import ScheduleForm from "../components/ScheduleForm";

function Home(){

    const [showForm, setShowForm] = useState(false);

    return(

        <div>

            <Header/>

            <Calendar/>

            <TodaySchedule/>

            <AddButton
                onClick={() => setShowForm(!showForm)}
            />

            {showForm && <ScheduleForm />}

            <button>

                予定変更

            </button>

        </div>

    )

}

export default Home;