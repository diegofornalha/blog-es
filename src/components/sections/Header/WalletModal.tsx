import React, { useState } from 'react';
import * as fcl from "@onflow/fcl";

const WalletModal = () => {
    const [authStatus, setAuthStatus] = useState("not connected");

    const handleConnect = async () => {
        setAuthStatus("connecting");
        try {
            await fcl.authenticate();
            setAuthStatus("connected");
        } catch (error) {
            console.error("Failed to connect to wallet", error);
            setAuthStatus("not connected");
        }
    };

    const handleDisconnect = async () => {
        try {
            await fcl.unauthenticate();
            setAuthStatus("not connected");
        } catch (error) {
            console.error("Failed to disconnect from wallet", error);
        }
    };

    const buttonText = {
        "not connected": "Connect to Flow Wallet",
        "connecting": "Connecting...",
        "connected": "Disconnect"
    }[authStatus];

    return (
        <div>
            {authStatus !== "connected" ? (
                <button onClick={handleConnect}>{buttonText}</button>
            ) : (
                <button onClick={handleDisconnect}>{buttonText}</button>
            )}
        </div>
    );
};

export default WalletModal;
