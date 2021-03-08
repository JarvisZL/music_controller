import React, { Component } from "react";
import HomeJoinPage from "./HomeJoinPage";
import CreateHomePage from "./CreateHomePage";
import { BrowserRouter as Router, Switch, Redirect, Route, Link} from "react-router-dom"

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/'><p>This is the Home Page.</p></Route>
                    <Route path= '/join' component={HomeJoinPage}/>
                    <Route path= '/create' component={CreateHomePage}/>
                </Switch>
            </Router>
        );
    }
}