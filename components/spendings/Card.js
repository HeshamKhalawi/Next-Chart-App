import Spendings from "./Spendings";
import Slider from "./Chart/Slider";
import Total from './total/total'
import Seperator from '../Seperator'
function Card(){
    const cost = [
        {
        "Day": "Mon",
        "Cost": "36.32"
        },{
        "Day": "Tue",
        "Cost": "53.55"
        },{
        "Day": "Wed",
        "Cost": "83.25"
        },{
        "Day": "Thu",
        "Cost": "43.65"
        },{
        "Day": "Fri",
        "Cost": "15.37"
        },{
        "Day": "Sat",
        "Cost": "35.75"
        },{
        "Day": "Sun",
        "Cost": "23.77"
    }]
    
    let mostExpensive = 0;
    cost.map((Cost) => {
        if(mostExpensive < Cost.Cost){
            mostExpensive = Cost.Cost
        }
    })
            
        
    return(
        <div className="flex flex-col shadow-md w-[30rem] bg-white rounded-xl mt-4 pb-8">
            <Spendings />
            <div className="grid grid-cols-7 p-5 gap-5">
                {cost.map((Cost) => 
                    <Slider Cost={Cost} mostExpensive={mostExpensive} isExpensive={Cost.Cost == mostExpensive ? true : false}/>
                )}
            </div>
            <Seperator />
            <Total />
        </div>
    )
}


export default Card;