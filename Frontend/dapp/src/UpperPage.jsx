import solVid from "./solvid.mp4"

export function UpperPage(){

    return(
        <>
        <div className="h-[500px] w-full flex justify-around items-center">
             <div className="h-[300px] w-[600px] p-4 flex flex-col space-y-2 "> 
               <h1 className="font-bold text-[40px]">Solana Wallet <span className="text-violet-700">Adapter</span></h1>
               <p className="text-[20px] font-normal">This Wallet Adapter will help you to Send Token , Get your Sols , Get Public Key</p>
               <p className="font-normal">Take your project to the next level. Unlock the potential of Web3 by launching your custom tokens on Solana’s powerful network!</p>
             </div>

             <div>
             <video autoPlay loop muted className="h-[300px] w-full border rounded-3xl bg-red-700" src={solVid} />
             </div>
        </div>
        </>
    )
}