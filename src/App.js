import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Login from './pages/Login';
import { useAuth } from "./services/use-auth.js";


function App() {
  const auth = useAuth();
  let login = <Login />;
  let cnt = <Router basename="/resume">
		<Header />
		<SideBar />
		<Switch>
		  <Route exact path='/' component={Content} />
		  <Route exact path='/home' component={Content} />
		</Switch>
	  </Router>; 
	
  return (
	(!auth.user) ? login : cnt
  );
}

export default App;
