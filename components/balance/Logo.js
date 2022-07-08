import Image from "next/image";
function Logo(){
    return(
        <div className="p-5">
            <Image
            src="/logo.svg"
            height="60px"
            width="80px"
            />
        </div>
    )
}


export default Logo;