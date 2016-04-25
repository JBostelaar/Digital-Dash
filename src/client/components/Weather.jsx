'use strict';

import 'isomorphic-fetch';

import config from 'client/config'
import React  from 'react';

class Weather extends React.Component {
	constructor() {
		super();

		this.state = {
			temp: null,
			desc: null,
			place: null,
			temp_min: null,
			temp_max: null,
		}
	}

	componentDidMount() {
		this.fetchData();
	}

	fetchData() {
		const url = config.weather.endpoint + '?q=Amsterdam,nl&appid=' +
			config.weather.appId + '&units=metric';

		fetch(url).then( r => r.json())
			.then( data => {
				this.setState({
					temp: Math.round(data.main.temp),
					temp_min: Math.round(data.main.temp_min),
					temp_max: Math.round(data.main.temp_max),
					place: data.name,
					desc: data.weather[0].main
				});
			});
	}

	render() {
		return (
			<section className="weather">
				<i className="fa fa-cloud weather__icon"></i>
				<div className="weather__meta">
					<h2 className="weather__temp">
						<span className="current">
							{this.state.temp}&deg;
						</span>
						<span className="range">
							{this.state.temp_min}/{this.state.temp_max}
						</span>
					</h2>

					<div className="weather__desc">
						<p className="weather__type">{this.state.desc}</p>
						<p className="weather__place">{this.state.place}</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Weather;
