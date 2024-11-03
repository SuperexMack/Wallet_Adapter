import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState, useCallback } from "react";
import { SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AirDrop() {
  const [getValue, setValue] = useState(0);
  const [balance, setBalance] = useState(0);
  const [transferSol, setTransferSol] = useState("");
  const [amountTransfer, setAmountTransfer] = useState(0);
  let wallet = useWallet();
  let { connection } = useConnection();

  const getTheBalanceData = useCallback(async () => {
    if (wallet.publicKey) {
      try {
        let storeTheBalance = await connection.getBalance(wallet.publicKey);
        setBalance(storeTheBalance / 1e9);
      } catch (err) {
        console.log("some error : " + err);
        toast.error("some error : " + err);
      }
    }
  }, [wallet.publicKey, connection]);

  useEffect(() => {
    getTheBalanceData();
  }, [connection, wallet.publicKey]);

  const sendDrop = async () => {
    await connection.requestAirdrop(wallet.publicKey, parseInt(getValue));
    setValue("");
    toast.success("Sol Added successfully");
  };

  const TransFerSolToOther = useCallback(async () => {
    try {
      const lamports = parseInt(amountTransfer);
      const recipientPublicKey = new PublicKey(transferSol);
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: recipientPublicKey,
          lamports,
        })
      );

      const { context: { slot: minContextSlot }, value: { blockhash, lastValidBlockHeight } } = await connection.getLatestBlockhashAndContext();
      const signature = await wallet.sendTransaction(transaction, connection, { minContextSlot });

      await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });

      toast.success("Sended Money to your Friend ");
      setAmountTransfer("");
      setTransferSol("");
    } catch (error) {
      console.log("Some error occurred :" + error);
      toast.error("some error" + error);
    }
  }, [wallet.publicKey, connection, wallet.sendTransaction, amountTransfer, transferSol]);

  return (
    <>
      <h1 className="text-center font-normal text-[24px] md:text-[30px] text-red-600 mt-8">Welcome Sir, <span className="text-[18px] md:text-[20px] font-light text-[#2F363F]">{wallet.publicKey ? wallet.publicKey.toString() : "Guest Account"}</span></h1>
      <p className="text-center text-[16px] md:text-[20px] font-medium text-blue-700 mt-4">Your Current Balance is: <span className="font-bold text-[#2F363F]">{balance} SOL</span></p>

      <div className="flex flex-col items-center space-y-6 md:space-y-9 mt-4 md:mt-6">
        <input value={getValue} onChange={(e) => setValue(e.target.value)} placeholder="Enter the Amount" className="border-black border-2 rounded-lg p-2 w-[300px] md:w-[500px] font-bold text-black" />
        <button onClick={sendDrop} className="bg-[#192A56] rounded-lg p-2 font-bold w-[250px] md:w-[400px] text-white">Send AirDrop</button>
      </div>

      <hr className="my-6" />

      <div className="flex flex-col items-center space-y-6 md:space-y-9 mt-4 md:mt-6">
        <h1 className="text-center text-[30px] md:text-[40px] font-bold text-violet-700">Transfer Sol</h1>
        <input onChange={(e) => setTransferSol(e.target.value)} placeholder="Enter public key" className="w-[300px] md:w-[500px] border-2 border-black rounded-lg p-2 font-bold text-black" />
        <input value={amountTransfer} onChange={(e) => setAmountTransfer(e.target.value)} placeholder="Enter Amount" className="p-2 border-2 border-black rounded-lg font-bold text-black w-[300px] md:w-[500px]" />
        <button onClick={TransFerSolToOther} className="bg-[#192A56] rounded-lg p-2 font-bold w-[250px] md:w-[400px] text-white">Transfer Sol</button>
      </div>
      <ToastContainer />
    </>
  );
}
