import React from 'react';
import styles from './sign-in-1-ui-styles/SignIn.module.css'
import Preloader from "../../neko-5-helpers/Preloader/Preloader";

interface SignInProps {
    email: string
    password: string
    rememberMe: boolean
    errorMessage: string | undefined
    isFetching: boolean
    onEmailChanged: (login: string) => void
    onPasswordChanged: (password: string) => void
    onRememberChange: (rememberMe: boolean) => void
    onSubmit: () => void
}

const SignIn: React.FC<SignInProps> = ({
                                           email, password, errorMessage, rememberMe, isFetching, //variables
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
                {isFetching
                    ? <Preloader/>
                    : null}
                <div className={styles.form}>
                    <input type={"checkbox"} placeholder={'rememberMe'}
                           checked={rememberMe}
                           onChange={e => onRememberChange(e.currentTarget.checked)}/>
                    <span>Запомнить </span>
                    <button className={styles.button} disabled={isFetching} onClick={onSubmit}>Войти</button>
                </div>
                {errorMessage && <mark>{errorMessage}</mark>}
            </div>
        </div>
    );
};

export default SignIn;
