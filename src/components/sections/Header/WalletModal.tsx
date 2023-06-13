import React from 'react';
import { useWallet } from '../../../context/WalletContext';

const WalletModal = () => {
    const { user } = useWallet();

    const handleConnect = () => {
        // Aqui você pode adicionar a lógica para conectar com a carteira do usuário
        console.log('Connect button clicked');
    };

    const handleDisconnect = () => {
        // Aqui você pode adicionar a lógica para desconectar da carteira do usuário
        console.log('Disconnect button clicked');
    };

    return (
        <div className="wallet-modal">
            {user ? (
                <button onClick={handleDisconnect} className="btn-disconnect">
                    Desconectar
                </button>
            ) : (
                <button onClick={handleConnect} className="btn-connect">
                    Conectar
                </button>
            )}
        </div>
    );
};

export default WalletModal;
