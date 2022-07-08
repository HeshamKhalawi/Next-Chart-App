import Spendings from "./Spendings";
import Slider from "./Chart/Slider";
import Total from './total/total'
function Card(){
    const cost = [{
        "Mon": "33.52",
        "Tue": "23.24",
        "Wed": "54.52",
        "Thu": "85.24",
        "Fri": "48.32",
        "Sat": "24.45",
        "Sun": "56.22"
    }]
    return(
        <div className="flex flex-col shadow-md w-[30rem] bg-white rounded-xl mt-4">
            <Spendings />
            {cost.map()}
            <Total />
        </div>
    )
}


export default Card;