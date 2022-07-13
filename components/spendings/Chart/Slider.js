import { useState } from "react";
function Slider({Cost, mostExpensive, isExpensive}){
    const[hover, setHover] = useState(false);
    let barHeight = (Cost.Cost * 10)/mostExpensive;
    barHeight = barHeight.toPrecision(1);
    let containerHeight = 10 - barHeight;
    return(
        <div className={"flex flex-col items-center"} style={{marginTop: containerHeight + "rem"}}>
            <button className={isExpensive ? `bg-[#7899c1] w-[2.7rem] rounded-lg items-stretch` : `bg-[#EC775F] w-[2.7rem] rounded-lg items-stretch`} style={{height: barHeight + "rem"}}>
            </button>
            <div className="pt-2 font-sans text-sm  font-normal mb-2 text-[#93867B]">{Cost.Day}</div>    
        </div>
    )
}


export default Slider;