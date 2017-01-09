import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import About from './containers/About';
import Blog from './containers/Blog';
import Contact from './containers/Contact';

let routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
);
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
