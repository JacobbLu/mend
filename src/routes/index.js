"use strict";

import React, {Component} from 'react';
import {Switch, Link, Router, Route, Redirect} from 'react-router-dom';
import {accessLevel} from '../lib/config';

import Main from './scenes/main';
import App from './scenes/app';
import Cart from './scenes/cart';

const Routes = () => (
	<div>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/about" component={App} />
			<Route path="/cart" component={Cart} />
		</Switch>
	</div>
);

export default Routes;
