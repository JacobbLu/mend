"use strict";

import React, {Component} from 'react';
import {animateScroll} from 'react-scroll';
import Header from '../../interface/Header';

export default class extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
	}

  render () {
		return (
			<main>
				<Header />
				<h1>HELLO WORLD ^_^</h1>
			</main>
		);
	}
};
