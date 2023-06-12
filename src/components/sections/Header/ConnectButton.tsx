import React from 'react';

const ConnectButton = () => {
    const handleConnect = () => {
        // Aqui você pode adicionar a lógica para conectar com a carteira do usuário
        console.log('Connect button clicked');
    };

    return (
        <button onClick={handleConnect} className="btn-connect">
            Conectar
        </button>
    );
};

export default ConnectButton;
