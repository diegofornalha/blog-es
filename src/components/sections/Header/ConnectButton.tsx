import React from 'react';
import { useWallet } from '../../../context/WalletContext';

const ConnectButton = () => {
    const handleConnect = () => {
        // Aqui você pode adicionar a lógica para conectar com a carteira do usuário
        console.log('Connect button clicked');
    };

    console.log('Rendering ConnectButton'); // Adicione este log

    return (
        <button onClick={handleConnect} className="btn-connect">
            Conectar
        </button>
    );
};

export default ConnectButton;
