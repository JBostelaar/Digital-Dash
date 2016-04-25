'use strict';

import React   from 'react';

import Header  from 'client/components/Header';
import Time    from 'client/components/Time';
import Weather from 'client/components/Weather';

export default function Dashboard() {
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
