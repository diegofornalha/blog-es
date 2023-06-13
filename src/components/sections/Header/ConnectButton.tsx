import React from 'react';
import { useWallet } from '../../../context/WalletContext';

const ConnectButton = () => {
    const { openModal } = useWallet(); // Importe o hook useWallet e extraia o método openModal

    const handleConnect = () => {
        openModal(); // Chame openModal quando o botão for clicado
    };

    console.log('Rendering ConnectButton');

    return (
        <button onClick={handleConnect} className="btn-connect">
            Conectar
        </button>
    );
};

export default ConnectButton;
