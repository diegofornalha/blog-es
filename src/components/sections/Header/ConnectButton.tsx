import React, { useEffect, useState } from 'react';
import * as fcl from '@onflow/fcl';

const ConnectButton = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let unSub;
        fcl.currentUser().subscribe((usr) => {
            setUser(usr);
            unSub = usr;
        });
        return () => unSub && unSub.unsubscribe(); // Unsubscribe on unmount
    }, []);

    const handleConnect = () => {
        if (user?.loggedIn) {
            window.location.href = "/profile";
        } else {
            window.location.href = "/connect";
        }
    };

    return (
        <button onClick={handleConnect}>
            {user?.loggedIn ? "Profile" : "Connect"}
        </button>
    );
};

export default ConnectButton;
