import React from 'react';
import './App.css';
import Main from "./neko-1-main/main-1-ui/Main";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./neko-1-main/main-2-bll/store";

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

export default App;
