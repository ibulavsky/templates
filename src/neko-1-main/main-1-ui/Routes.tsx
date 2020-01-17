import React from 'react';
import {Redirect, Route} from "react-router-dom";
import SignInPage from '../../neko-2-sign-in/sign-in-1-ui/SignInPage';
import RegisterPage from '../../neko-3-register/register-1-ui/RegisterPage';
import ForgotPage from '../../neko-4-forgot/forgot-1-ui/ForgotPage';
import NekoPage from "../../neko-6-neko/neko-1-ui/NekoPage";

export const START_GH_PAGES_PATH = '/neko-login-register-forgot';
export const SIGN_IN_PATH = START_GH_PAGES_PATH + '/sign-in';
export const REGISTER_PATH = START_GH_PAGES_PATH + '/register';
export const FORGOT_PATH = START_GH_PAGES_PATH + '/forgot';
export const NEKO_PATH = START_GH_PAGES_PATH + '/neko';

const Routes: React.FC = () => {
    return (
        <div>
            <Route exact path={START_GH_PAGES_PATH} render={() => <Redirect to={SIGN_IN_PATH}/>}/>

            <Route path={SIGN_IN_PATH} render={() => <SignInPage/>}/>
            <Route path={REGISTER_PATH} render={() => <RegisterPage/>}/>
            <Route path={FORGOT_PATH} render={() => <ForgotPage/>}/>

            <Route path={NEKO_PATH} render={() => <NekoPage/>}/>
        </div>
    );
};

export default Routes;
