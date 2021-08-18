import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
import Detail from '../src/pages/Detail/Detail';
=======
import List from './pages/List/List';
>>>>>>> 4a92e42e (에러 복구완료(오버레이 작업 후 npm스타트 안되는 이슈 고침))

class Routes extends React.Component {
  render() {
    return (
      <Router>
        {/* <Nav /> */}
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
<<<<<<< HEAD
          <Route exact path="/detail" component={Detail} />
=======
          <Route exact path="/" component={List} />
>>>>>>> 4a92e42e (에러 복구완료(오버레이 작업 후 npm스타트 안되는 이슈 고침))
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
