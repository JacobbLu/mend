"use strict";

import React, {Component} from 'react';
import {Switch, Link, Router, Route, Redirect} from 'react-router-dom';
import {accessLevel} from '../lib/config';

import Main from './scenes/main';
import Gallery from './scenes/gallery';
import Cart from './scenes/cart';
import './style/mobile.css'

const Routes = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Gallery} />
			<Route path="/make-your-own" component={Main} />
			<Route path="/cart" component={Cart} />
		</Switch>
	</div>
);

export default Routes;
