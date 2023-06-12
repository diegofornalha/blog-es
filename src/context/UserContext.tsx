import React from 'react';

interface UserState {
    isConnected: boolean;
    walletAddress: string | null;
}

const initialState: UserState = {
    isConnected: false,
    walletAddress: null,
};

export const UserContext = React.createContext<{
    userState: UserState;
    setUserState: React.Dispatch<React.SetStateAction<UserState>>;
}>({
    userState: initialState,
    setUserState: () => {},
});

export const UserProvider: React.FC = ({ children }) => {
    const [userState, setUserState] = React.useState(initialState);

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {children}
        </UserContext.Provider>
    );
};
