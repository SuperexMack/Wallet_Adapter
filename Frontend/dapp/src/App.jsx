import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import solana from "./solanaa.png"
import { AirDrop } from './AirDrop';
import { Navbar } from './Navbar';
import { UpperPage } from './UpperPage';
import { Para } from './Para';


function App() {

  return (
    <>
    <Navbar></Navbar>
    <UpperPage></UpperPage>
    <Para></Para>
      <div className='h-auto main-screen w-full flex justify-center'>
         <div className='w-[60rem] h-auto flex flex-col items-center space-y-4 p-5 z-50 mt-[100px]'>
            <h1 className='text-[50px] font-bold text-violet-700'>Your Wallet</h1>
            <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/1GcAeTdxUpNiEvq2IeIo_Cqm97P_J-R4"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div className='flex space-x-8 justify-center relative top-[30px]'>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                  </div>
                   <AirDrop></AirDrop>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
         </div>
      </div>
    </>
  )
}

export default App
