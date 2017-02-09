import React from 'react';
import {
  RouterContext
} from 'react-router';
import {
  renderToString
} from 'react-dom/server';
import {
  Provider
} from 'react-redux';
import configureStore from '../../client/store/configuerStore';

const store = configureStore();

export default async (ctx, next, renderProps) => {
  let prefetchTasks = [];
  renderProps.components.forEach((component) => {
    if (component && component.WrappedComponent && component.WrappedComponent.fetch) {
      console.log('into renderToString');
      const _tasks = component.WrappedComponent.fetch(store.getState(), store.dispatch);
      if (Array.isArray(_tasks)) {
        prefetchTasks = prefetchTasks.concat(_tasks);
      } else if (_tasks.then) {
        prefetchTasks.push(_tasks);
      }
    }
  });
  await Promise.all(prefetchTasks);
  if (__DEVELOPMENT__) {
    webpackIsomorphicTools.refresh();
  }
  const assets = webpackIsomorphicTools.assets();
  const scriptsIsomorphic = assets.javascript || {};
  const cssIsomorphic = assets.styles || {};

  await ctx.render('index', {
    title: 'Dome from serverRender',
    reduxData: store.getState(),
    scriptsIsomorphic: scriptsIsomorphic,
    cssIsomorphic: cssIsomorphic,
    app: renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )
  });
};
