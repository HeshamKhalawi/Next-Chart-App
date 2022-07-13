import TotalCurrent from './TotalCurrent'
import TotalPrevious from './TotalPrevious'
function total(){
    return(
        <div className='flex flex-row justify-between'>
            <TotalCurrent />
            <TotalPrevious />
        </div>
    )
}

export default total;