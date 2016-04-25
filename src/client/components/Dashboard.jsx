import React from 'react';

import Header from 'client/components/Header';
import Hue from 'client/components/Hue';
import Time from 'client/components/Time';
import Weather from 'client/components/Weather';

export default function Dashboard() {
	return (
		<main>
			<Header />
			<section className="content wrap">
				<Time />
				<Weather />
			</section>
			<Hue />
		</main>
	);
}
