import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import AsserterLoader from './components/Loader/AsserterLoader';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/LogInPage/LoginPage';
import Signup from './Pages/SignUp/Signup';
import Dashboard from './Pages/Dasboard/Dashboard';
import Formpage from './Pages/Dasboard/Formpage/Formpage';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <>
      <Router history={history}>
        <Switch>
          <Route exact path="/placementasserter-frontend" component={() => <AsserterLoader pageComponent={<Home/>}/>}/>
          <Route exact path="/placementasserter-frontend/contactpage" component={() => <AsserterLoader pageComponent={<Contact/>}/>}/>
          <Route exact path="/placementasserter-frontend/login" component={() => <AsserterLoader pageComponent={<Login/>}/> } />
          <Route exact path="/placementasserter-frontend/signup" component={() => <AsserterLoader pageComponent={<Signup/>}/> } />
          <Route exact path="/placementasserter-frontend/dashboard" component={() => <AsserterLoader pageComponent={<Dashboard/>}/> } />
          <Route exact path="/placementasserter-frontend/formpage" component={() => <AsserterLoader pageComponent={<Formpage/>}/> } />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
