import React from 'react';

interface RegisterProps {

}

interface RegisterProps {
    email: string,
    passwordFirst: string,
    passwordSecond: string,
    onSetEmail: (email: string) => void,
    onSetFirstPassword: (passwordFirst: string) => void,
    onSetSecondPassword: (passwordSecond: string) => void,
    onSubmit: () => void,
    errorMessage: string
}

const Register: React.FC<RegisterProps> = ({email, passwordFirst, passwordSecond, onSetEmail, onSetFirstPassword, onSetSecondPassword, onSubmit, errorMessage}) => {


    return (
        <div>
            <h2>Форма регистрации</h2>
            <div>
                <div>
                    <span>E-mail: </span><input type={"e-mail"} placeholder={'Your e-mail'} value={email}
                                                onChange={e => onSetEmail(e.currentTarget.value)}/>
                </div>
                <div>
                    <span>First password: </span><input type={"password"} placeholder={'Enter password'}
                                                        value={passwordFirst}
                                                        onChange={e => onSetFirstPassword(e.currentTarget.value)}/>
                </div>
                <div>
                    <span>Second password: </span><input type={"password"} placeholder={'Enter password'}
                                                         value={passwordSecond}
                                                         onChange={e => onSetSecondPassword(e.currentTarget.value)}/>
                </div>
                <div>{errorMessage}</div>
                <button onClick={onSubmit}>Register</button>
            </div>
        </div>
    );
};

export default Register;
