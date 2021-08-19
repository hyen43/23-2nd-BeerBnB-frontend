import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Detail from './pages/Detail/Detail';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Mypage from './pages/Mypage/Mypage';
import Host from './pages/Host/Host';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  constructor() {
    super();
    this.state = {
      navOpen: true,
    };
  }

  IsNavOpen = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };

  render() {
    return (
      <Router>
        {this.state.navOpen && (
          <Nav navOpen={this.state.navOpen} IsNavOpen={this.IsNavOpen} />
        )}
        <Switch>
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/list" component={List} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/host" component={Host} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
