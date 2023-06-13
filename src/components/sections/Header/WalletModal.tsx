import * as fcl from "@onflow/fcl";
import { useState } from "react";

const WalletModal = () => {
    const [user, setUser] = useState(null);

    const handleConnect = async () => {
        try {
            await fcl.authenticate();
            const { addr } = await fcl.currentUser().snapshot();
            setUser(addr);
        } catch (error) {
            console.error("Failed to connect to wallet", error);
        }
    };

    const disconnectWallet = async () => {
        try {
            await fcl.unauthenticate();
            setUser(null);
        } catch (error) {
            console.error("Failed to disconnect from wallet", error);
        }
    };

    return (
        <div>
            <button onClick={handleConnect}>Connect to Flow Wallet</button>
            {user && <p>Connected to: {user}</p>}
            <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
    );
};

export default WalletModal;
