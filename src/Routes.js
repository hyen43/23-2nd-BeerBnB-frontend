import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Footer from './components/Footer/Footer';
import Mypage from './pages/Mypage/Mypage';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/detail" component={Detail} />
          {/* <Route exact path="/detail/:id" component={Detail} /> */}
          <Route exact path="/main" component={Main} />
          <Route exact path="/list" component={List} />
          <Route exact path="/mypage" component={Mypage} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
