import React from 'react';

interface ForgotProps {
    email: string,
    onSetEmail: (email: string) => void,
    onSubmit: () => void,
    errorMessage: string
}

const Forgot: React.FC<ForgotProps> = ({email, onSetEmail, onSubmit, errorMessage}) => {

    return (
        <div>
            <div>
                <span>E-mail: </span><input type={"e-mail"} placeholder={'Your e-mail'} value={email}
                                            onChange={e => onSetEmail(e.currentTarget.value)}/>
            </div>
            <div>{errorMessage}</div>
            <button onClick={onSubmit}>Send on e-mail</button>
        </div>
    );
};

export default Forgot;
