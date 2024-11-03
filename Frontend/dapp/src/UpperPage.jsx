import solVid from "./solvid.mp4";

export function UpperPage() {
  return (
    <>
      <div className="h-auto w-full flex flex-col md:flex-row justify-around items-center px-4 md:px-8 py-8">
        <div className="w-full md:w-[600px] p-4 flex flex-col space-y-2">
          <h1 className="font-bold text-[30px] md:text-[40px]">Solana Wallet <span className="text-violet-700">Adapter</span></h1>
          <p className="text-[16px] md:text-[20px] font-normal">This Wallet Adapter will help you to Send Token, Get your Sols, Get Public Key</p>
          <p className="font-normal">Take your project to the next level. Unlock the potential of Web3 by launching your custom tokens on Solana’s powerful network!</p>
        </div>
        <div className="w-full md:w-auto mt-4 md:mt-0">
          <video autoPlay loop muted className="h-[200px] md:h-[300px] w-full md:w-auto border rounded-3xl" src={solVid} />
        </div>
      </div>
    </>
  );
}
