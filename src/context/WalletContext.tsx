import React from 'react';

export const WalletContext = React.createContext({
  isConnected: false,
  connect: () => {},
});
