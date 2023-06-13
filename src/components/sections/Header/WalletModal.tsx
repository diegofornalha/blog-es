import React from 'react';
import * as fcl from "@onflow/fcl";

const WalletModal = () => {
    const handleConnect = async () => {
        try {
            await fcl.authenticate();
        } catch (error) {
            console.error("Failed to connect to wallet", error);
        }
    };

    return (
        <div>
            <button onClick={handleConnect}>Connect to Flow Wallet</button>
        </div>
    );
};

export default WalletModal;
