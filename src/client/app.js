import Dashboard from 'client/components/Dashboard';
import history from 'client/utils/history';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

render((
	<Router history={history}>
		<Route path="/" component={Dashboard} />
	</Router>
), document.getElementById('app'));
