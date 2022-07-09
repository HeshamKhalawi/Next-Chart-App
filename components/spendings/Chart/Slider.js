import { useState } from "react";
function Slider({Cost, mostExpensive}){
    const[hover, setHover] = useState(false);
    let height = (Cost.Cost * 10)/mostExpensive;
    console.log(height);
    return(
        <div className="flex flex-col items-center">
            <div className={hover ? "":`bg-[#EC775F] w-[3rem] rounded-lg ` + "h-[" + height + "rem]"}>

            </div>
            <div className="pt-2 font-sans text-[18px] font-normal mb-2 text-[#93867B]">{Cost.Day}</div>
           
        </div>
    )
}


export default Slider;