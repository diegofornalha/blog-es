import React, { createContext, useContext, useEffect, useState } from 'react';
import * as fcl from '@onflow/fcl';

const WalletContext = createContext(null);

export const WalletProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = fcl.currentUser().subscribe(user => setUser({ ...user }));
        return () => unsubscribe();
    }, []);

    const logIn = () => {
        fcl.logIn();
    };

    const logOut = () => {
        fcl.unauthenticate();
    };

    return (
        <WalletContext.Provider
            value={{
                user,
                logIn,
                logOut,
            }}
        >
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};
