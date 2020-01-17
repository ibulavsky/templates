import React from 'react';
import styles from './sign-in-1-ui-styles/SignIn.module.css'

interface SignInProps {
    email: string
    password: string
    rememberMe: boolean
    errorMessage: string | undefined
    onEmailChanged: (login: string) => void
    onPasswordChanged: (password: string) => void
    onRememberChange: (rememberMe: boolean) => void
    onSubmit: () => void
}

const SignIn: React.FC<SignInProps> = ({
                                           email, password, errorMessage, rememberMe, //variables
                                           onEmailChanged, onPasswordChanged, onRememberChange, onSubmit // callbacks
                                       }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Форма входа</h2>
            <div className={styles.forms}>
                <div className={styles.form}>
                    <span>Мэйл: </span>
                    <input type={"email"} placeholder={'Адрес почты'}
                           value={email}
                           onChange={e => onEmailChanged(e.currentTarget.value)}/>
                </div>
                <div className={styles.form}>
                    <span>Пароль: </span>
                    <input type={"password"} placeholder={'Пароль'}
                           value={password}
                           onChange={e => onPasswordChanged(e.currentTarget.value)}/>
                </div>
                <div className={styles.form}>
                    <span>Запомнить: </span>
                    <input type={"checkbox"} placeholder={'rememberMe'}
                           checked={rememberMe}
                           onChange={e => onRememberChange(e.currentTarget.checked)}/>
                </div>
                {errorMessage && <mark>{errorMessage}</mark>}
                <button className={styles.button} onClick={onSubmit}>Войти</button>
            </div>
        </div>
    );
};

export default SignIn;
