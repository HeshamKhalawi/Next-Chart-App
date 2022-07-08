import Logo from './Logo'
import MyBalance from './MyBalance';

function Card(){
    return(
        <div className='flex flex-row justify-between shadow-md w-[30rem] bg-[#EC775F] rounded-xl '>
            <MyBalance />
            <Logo />
        </div>
    )
}


export default Card;