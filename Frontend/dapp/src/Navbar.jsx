import solanaIcon from "./solanaa.png"

export function Navbar(){
    return(
        <>
        <div className="bg-red h-[80px] w-full bg-[#192A56]  flex  items-center">
           <img src={solanaIcon} className="h-[50px] w-[50px] relative left-[100px]"></img>
           <div className="text-white flex justify-center items-center absolute right-[300px] space-x-9 list-none text-[25px] font-semibold">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            </div>
        </div>
        </>
    )
}