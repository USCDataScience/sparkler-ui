import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'

class Main extends Component {
    render() {
        return (
            <div>
                <main>
                    <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                    </BrowserRouter>
                </main>
            </div>
        );
    }
}

export default Main