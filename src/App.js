import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

const Outer = (props) => <div><h1>Our Site</h1><Links />{props.children}</div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;
const Links = () => {
  return (
    <nav>
      <Link activeStyle={{color: 'green'}} to="/">Home</Link>
      <Link activeStyle={{color: 'green'}} to="/about">About</Link>
      <Link activeClassName="active" to="/contact">Contact</Link>
    </nav>
  )
};

const Message = (props) =>
  <div><h1>{props.params.message || 'Hello '}</h1><MessageLinks /></div>

const MessageLinks = () =>
  <nav>
    <Link to="/">Hello</Link>
    <Link to="/Hi">Hi</Link>
    <Link to="/Yo">Yo</Link>
  </nav>

class App extends React.Component {
  render() {
    return (
      <Router history = {hashHistory}>
        <Route path="/" component={Outer}>
          <IndexRoute component={About}></IndexRoute>
            <Route path="contact" component={Contact}></Route>
        </Route>

        <Route path="/(:message)" component={Message}></Route>
      </Router>
    );
  }
}

export default App;
