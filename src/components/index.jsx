import React, { useState } from 'react';
import AddressForm from '../components/AddressForm';
import * as Web3 from '@solana/web3.js';

const Home = () => {
  const [balance, setBalance] = useState(0)
  const [address, setAddress] = useState('')
  const [isExecutable, setIsExecutable] = useState(false);

  const addressSubmittedHandler = (address) => {
    try {
      setAddress(address)
      const key = new Web3.PublicKey(address)
      const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
      connection.getBalance(key).then(balance => {
        setBalance(balance / Web3.LAMPORTS_PER_SOL)
      })
      connection.getAccountInfo(key).then(info => {
        setIsExecutable(info?.executable ?? false);
      })
    } catch (error) {
      setAddress('')
      setBalance(0)
      alert(error)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <header style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '28px', marginBottom: '20px', fontWeight: 'bold' }}>
          Enter Your Solana Address
        </p>
        <AddressForm handler={addressSubmittedHandler} />
        <p style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 'bold' }}>{`Address: ${address}`}</p>
        <p style={{ fontSize: '20px', marginBottom: '10px', fontWeight: 'bold' }}>{`Balance: ${balance} SOL`}</p>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{`Is it executable? ${isExecutable ? 'Yes' : 'No'}`}</p>
        </header>
</div>
)
}

export default Home;
