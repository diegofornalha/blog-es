import * as React from 'react';
import { useCurrentUser } from "@onflow/fcl";

const ConnectButton = () => {
    const [user, setUser] = React.useState(null);
    const currentUser = useCurrentUser();

    React.useEffect(() => {
        setUser(currentUser);
    }, [currentUser]);

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
