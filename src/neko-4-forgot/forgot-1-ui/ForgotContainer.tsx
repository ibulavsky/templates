import React, {useState} from 'react';
import Forgot from './Forgot';
import {IAppStore} from "../../neko-1-main/main-2-bll/store";
import {connect} from "react-redux";
import {emailValidate} from "../../neko-0-common/validators/validator";
import {forgotMailError} from "../forgot-2-bll/forgotActions";
import {forgot} from "../forgot-2-bll/forgotThunks";


interface IPropsForgotMail {
    forgot: (email: string) => void,
    forgotMailError: (errorMessage: string) => void,
    errorMessage: string,
}
const ForgotContainer: React.FC<IPropsForgotMail> = (props) => {
    let [email, setEmail] = useState('Your-mail');

    let onSetEmail = (email: string) => {
        setEmail(email)
    };

    let onSubmit = () => {
        const verification = emailValidate(email);
        if (verification) {
            props.forgotMailError(verification)
        } else {
            props.forgot(email)
        }
    };
    return (
        <Forgot email={email} onSetEmail={onSetEmail} onSubmit={onSubmit} errorMessage={props.errorMessage}/>
    );
};
const mapStateToProps = (store: IAppStore) => {
    return {
        errorMessage: store.forgot.errorMessage,
    }
};

export default connect(mapStateToProps, {forgot,forgotMailError})(ForgotContainer);
