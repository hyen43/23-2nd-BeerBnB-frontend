import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>{/* <Route exact path="/" component={Main} /> */}</Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
