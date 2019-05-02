import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home'
import BananaFrame from "./BananaFrame";

class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <BrowserRouter>
                    <Switch>
                        <Route exact path='/explorer' component={Home}/>
                        <Route exact path='/analytics' component={BananaFrame}/>
                    </Switch>
                    </BrowserRouter>
                </main>
            </div>
        );
    }
}

export default Main