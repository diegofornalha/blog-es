import React, { useContext } from 'react';
import { WalletContext } from '../../../context/WalletContext';

const ConnectButton = () => {
    const { isConnected, connect } = useContext(WalletContext); // Use WalletContext

    const handleConnect = () => {
        connect();
    };

    return (
        <button onClick={handleConnect} className="btn-connect">
            {isConnected ? 'Desconectar' : 'Conectar'}
        </button>
    );
};

export default ConnectButton;
