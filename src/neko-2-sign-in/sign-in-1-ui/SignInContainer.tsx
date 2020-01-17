import React, {useState} from 'react';
import SignIn from "./SignIn";
import {connect} from "react-redux";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {loginThunk} from "../sign-in-2-bll/signInThunks";
import {Redirect} from 'react-router-dom';
import {NEKO_PATH} from "../../neko-1-main/main-1-ui/Routes";
import Preloader from "../../neko-0-common/common-1-ui/Preloader";
import {loginValidate} from "../../neko-0-common/validators/validator";

interface SignInContainerIProps {
    isAuth: boolean
    isFetching: boolean
    errorMessage: string | undefined
    loginThunk: (email: string, password: string, isRememberMe: boolean) => void
}

const SignInContainer: React.FC<SignInContainerIProps> = (props) => {
    const [email, changeEmail] = useState('email');
    const [password, changePassword] = useState('test password');
    const [isRememberMe, changeRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    // logic
    const onEmailChange = (login: string) => {
        changeEmail(login)
    };
    const onPasswordChange = (password: string) => {
        changePassword(password)
    };
    const onRememberChange = (isRememberMe: boolean) => {
        changeRememberMe(isRememberMe)
    };
    const onSubmitLogin = () => {
        const errorText =loginValidate(email, password);
        if (errorText) {
            setErrorMessage(errorText)
        } else {
            setErrorMessage('');
            props.loginThunk(email, password, isRememberMe)
        }
    };

    return (
        <>
            {props.isFetching
                ? <Preloader/>
                : props.isAuth
                    ? <Redirect to={NEKO_PATH}/>
                    : <SignIn rememberMe={isRememberMe} email={email} password={password}
                              errorMessage={props.errorMessage + errorMessage}
                              onEmailChanged={onEmailChange} onPasswordChanged={onPasswordChange}
                              onSubmit={onSubmitLogin}
                              onRememberChange={onRememberChange}/>

            }
        </>
    );
};

const mapStateToProps = (store: IAppStore) => ({
    isAuth: store.signIn.isAuth,
    isFetching: store.signIn.isFetching,
    errorMessage: store.signIn.errorMessage,
});

export default connect(mapStateToProps, {loginThunk})(SignInContainer);
