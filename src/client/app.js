import getRoutes from 'client/utils/getRoutes';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import * as reducers from 'client/reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

render((
	<Provider store={store}>
		<Router history={browserHistory} children={getRoutes()} />
	</Provider>
), document.getElementById('app'));
