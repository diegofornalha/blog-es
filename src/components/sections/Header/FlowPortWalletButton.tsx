import React from 'react';
import * as fcl from "@onflow/fcl";

const FlowPortWalletButton = () => {
    const handleConnect = async () => {
        try {
            await fcl.authenticate();
        } catch (error) {
            console.error("Failed to connect to Flow Port Wallet", error);
        }
    };

    return (
        <button onClick={handleConnect}>Connect to Flow Port Wallet</button>
    );
};

export default FlowPortWalletButton;
