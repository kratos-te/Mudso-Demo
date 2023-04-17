
import { useState, useEffect } from 'react';
import Web3 from 'web3'

import detectEthereumProvider from '@metamask/detect-provider';

declare global {
    interface Window {
        ethereum?: any;
    }
}

async function checkMetamask(): Promise<string | undefined> {
    const provider = await detectEthereumProvider();
    if (provider) {
      console.log('Metamask is installed!');
      if ((provider as any).isConnected()) {
          console.log('Metamask is connected!');
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          return accounts[0];
        // You can now access the user's Ethereum address and other information
      } else {
         console.log('Metamask is not connected!');
      }
    } else {
        console.log('Metamask is not installed!');
    }
}

const meta_mask = () => {
    const [account, setAccount] = useState<string>('');
    const [balance, setBalance] = useState<string>('');
    async function getBalance(a:any) {
        if (a) {
            const balanceInWei = await window.ethereum.request({ method: 'eth_getBalance', params: [a, 'latest'] });
            const web3 = new Web3();
            const balanceInEther = parseFloat(web3.utils.fromWei(balanceInWei, 'ether')).toFixed(4);
            setBalance(balanceInEther);
        }
    }
    useEffect(() => {
        async function getAccount() {
            const a = await checkMetamask();
            if (a) {
                setAccount(a);
                await getBalance(a);
            }
        }
        getAccount();
      }, []);
    return (
        <>
            <div className='text-white'>
                {account}
            </div>
            {balance ? (
                <p>User's Ethereum balance: {balance} ETH</p>
            ) : (
                <p>Loading balance...</p>
            )}
        </>
    )
}

export default meta_mask;