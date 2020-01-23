import React from 'react';

interface NekoProps {
    name: string
    logoutCallback: () => void
}

const Neko: React.FC<NekoProps> = ({logoutCallback, name}) => {

    return (
        <div
            style={{
                height: '80vh',
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            Profile:<div style={{color: 'lime'}}>{name}</div>
            <button onClick={logoutCallback}>Logout</button>
        </div>
    );
};

export default Neko;
