import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from '../src/pages/Detail/Detail';
import Nav from '../src/components/Nav/Nav';
import Footer from '../src/components/Footer/Footer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/detail" component={Detail} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
