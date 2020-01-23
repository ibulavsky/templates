import React, {useEffect, useState} from 'react';
import Neko from "./Neko";
import {SIGN_IN_PATH} from "../../neko-1-main/main-1-ui/Routes";
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getMe} from "../neko-2-bll/nekoThunks";
import {getCookie, setCookie} from "../../neko-5-helpers/cookies/cookies";
import {IAppStore} from '../../neko-1-main/main-2-bll/store';
import {profileSetName} from '../neko-2-bll/nekoActions';

const NekoContainer: React.FC = () => {
    const [redirect, setRedirect] = useState(false);
    const name = useSelector((store: IAppStore) => store.neko.name);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMe())
    }, []);

    useEffect(() => {
        if (!getCookie('token')) {
            setRedirect(true);
        }
    }, [name]);


    const logoutCallback = () => {
        setCookie('token', '', -1000);
        dispatch(profileSetName(''));
    };


    if (redirect) {
        return <Redirect to={SIGN_IN_PATH}/>;
    }
    return (
        <div>
            <Neko name={name} logoutCallback={logoutCallback}/>
        </div>
    );
};

export default NekoContainer;
