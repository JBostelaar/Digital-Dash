'use strict';

import React  from 'react';
import moment from 'moment';


class Time extends React.Component {
	constructor() {
		super();

		this.state = {
			time: moment(new Date).format('HH:mm:ss'),
			date: moment(new Date).format('dddd DD MMMM')
		}
	}

	componentDidMount() {
		this.startTimer();
	}

	startTimer() {
		setInterval(() => {
			this.incrementTimer();
		}, 1000);
	}

	incrementTimer() {
		const time = moment(new Date).format('HH:mm:ss');
		this.setState({time: time});
	}

	render() {
		return (
			<div className="timer">
				<h2 className="timer__time">{this.state.time}</h2>
				<h3 className="timer__date">{this.state.date}</h3>
			</div>
		)
	}
}

export default Time;
