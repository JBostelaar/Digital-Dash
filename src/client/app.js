import getRoutes from 'client/utils/getRoutes';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

render((
	<Router history={browserHistory} children={getRoutes()} />
), document.getElementById('app'));
