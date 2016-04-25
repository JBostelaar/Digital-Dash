'use strict';

import React   from 'react';

import Header  from 'app/client/components/Header';
import Time    from 'app/client/components/Time';
import Weather from 'app/client/components/Weather';

class Dashboard extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<section className="content wrap">
					<Time />
					<Weather />
				</section>
			</main>
		);
	}
}

export default Dashboard;
