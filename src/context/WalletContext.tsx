import React, { createContext, useContext } from 'react';

const WalletContext = createContext({});

export function WalletProvider({ children }) {
    return (
        <WalletContext.Provider value={'test'}>
            {children}S
        </WalletContext.Provider>
    );
}

export function useWallet() {
    return useContext(WalletContext);
}
