import Header from "../components/Header";
import Calendar from "../components/Calendar";
import TodaySchedule from "../components/TodaySchedule";

function Home(){

    return(

        <div>

            <Header/>

            <Calendar/>

            <TodaySchedule/>

            <button>

                予定追加

            </button>

            <button>

                予定変更

            </button>

        </div>

    )

}

export default Home;