import React, {useState} from 'react';
import Register from './Register';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {register} from "../register-2-bll/registerThunks";
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {SIGN_IN_PATH} from '../../neko-1-main/main-1-ui/Routes';
import Preloader from "../../neko-5-helpers/Preloader/Preloader";
import {registerValidate} from "../../neko-5-helpers/validators/validator";
import {registerError} from "../register-2-bll/registerActions";

interface IPropsRegister {
    success: boolean,
    register: (email: string, passwordFirst: string) => void,
    registerError: (errorMessage: string) => void,
    errorMessage: string,
    isFetching: boolean,
}

const RegisterContainer: React.FC<IPropsRegister> = (props) => {
    let [email, setEmail] = useState('Your-mail');
    let [passwordFirst, setFirstPassword] = useState('Your password');
    let [passwordSecond, setSecondPassword] = useState('Your password');

    let onSetEmail = (email: string) => {
        setEmail(email)
    };
    let onSetFirstPassword = (passwordFirst: string) => {
        setFirstPassword(passwordFirst)
    };

    let onSetSecondPassword = (passwordSecond: string) => {
        setSecondPassword(passwordSecond)
    };
    let onSubmit = () => {
        const verification = registerValidate(email, passwordFirst, passwordSecond);
        if (verification) {
            props.registerError(verification)
        } else {
            props.register(email, passwordFirst)
        }
    };
    return (
        <>
            {props.isFetching
                ? <Preloader/>
                : props.success ? <Redirect to={SIGN_IN_PATH}/> :
                    <Register email={email} passwordFirst={passwordFirst} passwordSecond={passwordSecond}
                              onSetEmail={onSetEmail}
                              onSetFirstPassword={onSetFirstPassword} onSetSecondPassword={onSetSecondPassword}
                              onSubmit={onSubmit} errorMessage={props.errorMessage}/>}
        </>
    );
};

const mapStateToProps = (store: IAppStore) => {
    return {
        success: store.register.success,
        errorMessage: store.register.errorMessage,
        isFetching: store.register.isFetching
    }
};

export default connect(mapStateToProps, {register,registerError})(RegisterContainer);
