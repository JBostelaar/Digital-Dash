'use strict';

import 'isomorphic-fetch';

import config from 'client/config'
import React  from 'react';

class Hue extends React.Component {
	constructor() {
		super();

		this.state = {
			openScenes: false
		}
	}

	setScene(e) {
		const scene = e.target.dataset.scene;
		fetch(config.hue.endpoint + '/groups/0/action', {
			method: 'PUT',
			body: JSON.stringify({"scene": scene})
		}).then( r => r.json() )
			.then( data => {
				this.setState({openScenes: false});
			});
	}

	toggleScenes(e) {
		this.setState({openScenes: !this.state.openScenes});
	}

	hueClass() {
		return this.state.openScenes ? 'hue active' : 'hue';
	}

	render() {
		return (
			<section className={this.hueClass()}>
				<i className="fa fa-lightbulb-o hue__icon" onClick={this.toggleScenes.bind(this)}></i>
				<div className="hue__scenes" onClick={this.setScene.bind(this)}>
					<i className="fa fa-rocket hue__scene hue__scene--1" data-scene="8ebf87782-on-0" ></i>
					<i className="fa fa-sun-o hue__scene hue__scene--2" data-scene="ac637e2f0-on-0"></i>
					<i className="fa fa-heart hue__scene hue__scene--3" data-scene="9ddf53078-on-0"></i>
					<i className="fa fa-diamond hue__scene hue__scene--4" data-scene="b36fc9c69-on-0"></i>
				</div>
			</section>
		)
	}
}

export default Hue;
