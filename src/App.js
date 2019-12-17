import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Case2, Case2Details} from './cases/Case2.js';
import './App.css';

function App() {
  return (
      <MainRouter />
  );
}

function MainRouter() {
  return (
      <Router>
        <div>
          <nav className="main-nav">
            <div className="nav-item">
              <Link to="/">Home</Link>
            </div>
            <div className="nav-item">
              <Link to="/case2">Case2</Link>
            </div>
          </nav>

          <Switch>
            <Route path="/case2">
              <Case2 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return (
      <div className={'main-container'}>
        <div className={'title-container'}>
          <h2>Test Task</h2>
        </div>
        <div className={'content-container'}>
          <p>The object of this task is to load the animated model in-browser 3D scene. You need to develop one of 2 cases.</p>
          <p>You can take the 3D model here: <a href={'https://www.mixamo.com'}>https://www.mixamo.com</a></p>
          <h3>Acceptance criteria.</h3>
          <p>When I open the URL in the browser, I can see the animated 3D model staying on the ground. If I drag and drop I can rotate the Scene and see the sky and a sun.</p>
          <Case2Details />
        </div>
      </div>
  );
}

export default App;
