'use strict';

import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="wrap">
					<h1 className="header__logo"><i className="fa fa-gitlab"></i> Digital Dash</h1>
				</div>
			</header>
		)
	}
}

export default Header;
