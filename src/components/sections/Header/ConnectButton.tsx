import React from 'react';
import { useWallet } from '../../../context/WalletContext';

const ConnectButton = () => {
    const authCluster = useWallet();

    return <div>{authCluster}</div>;
};

export default ConnectButton;
