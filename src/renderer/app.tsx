import { hot } from "react-hot-loader/root";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SideNav } from "./components";
import { appRoutes } from "./constants";

const App = () => (
    <>
        <div className="bp3-dark w-full h-full bg-dark-400">
            <Router>
                <SideNav />
                <div style={{ paddingLeft: "65px" }} className="h-full w-full">
                    <Switch>
                        <Route exact path={appRoutes.COMMANDS}>
                            <div className="h-full w-full flex justify-center items-center">Commands!</div>
                        </Route>
                        <Route path={appRoutes.CHAT_FEED}>
                            <div className="h-full w-full flex justify-center items-center">Chat Feed!</div>
                        </Route>
                        <Route path={appRoutes.SETTINGS}>
                            <div className="h-full w-full flex justify-center items-center">Settings!</div>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    </>
);

export default hot(App);