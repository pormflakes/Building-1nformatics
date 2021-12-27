import React, { component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  {Home, Login, Register, Logout, Navbar} from './Components'

class Routes extends Component { 
    render() {
        return (
            <Router>
                <Navbar />
                <Switch >
                    <Route path="/login"><Login /> </Route>
                    <Route path="/logout"><Logout /> </Route>
                    <Route path="/register"><Register /> </Route>
                    <Route exact path="/"><Home /> </Route>
                </Switch>
            </router>
        )
    }
}

export default Routes