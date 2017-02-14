import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Blog from './containers/Blog';
import Login from './containers/Login';
import Write from './containers/Write';
import Single from './containers/Single';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Single} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route path="/write" component={Write} />
    </Route>
  </Router>
);
// <IndexRoute component={Home} />
// <Route path="/blog" component={Blog} />
// RHL3
if (module.hot) {
  const oldRoutes = module.hot.data && module.hot.data.routes;
  if (oldRoutes) {
    routes = oldRoutes;
  }
  module.hot.dispose((data) => {
    data.routes = routes;
  });
}

export default routes;
