"use strict";

import React, {Component} from 'react';
import Header from '../../interface/Header';
import Cookies from 'js-cookie';
import removeIcon from '../../assets/remove.png';
import config from '../../../lib/config';

export default class extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}

		this.renderRow = this.renderRow.bind(this);
		this.renderRows = this.renderRows.bind(this);
		this.renderDesign = this.renderDesign.bind(this);
		this.renderOptions = this.renderOptions.bind(this);
	}

	componentWillMount() {
		var currentCartKeys = Cookies.get('mendShoppingCart')
		if(!currentCartKeys){
			currentCartKeys = [];
		}else{
			currentCartKeys = JSON.parse(currentCartKeys);
		}
		this.props.loadCartRequest({
			'currentCartKeys': currentCartKeys
		});

	}

	renderDesign(design){
		const pixelWidth = 5;
		return (
			<div style={{
				width: pixelWidth * 11,
				padding: '20px',
				display: 'inline-block',
				verticalAlign: 'middle',
			}}>
				{design.map((h, i1) => {
					return (
						<div
							key={i1}
							style={{
								height: pixelWidth
							}}>
							{h.map((p, i2) => {
								return (
									<div
										key={i2}
										style={{
											width: pixelWidth,
											height: pixelWidth,
											backgroundColor: p,
											display: 'inline-block',
											float: 'left',
										}}></div>);
								})}
						</div>
					);
			})}
			</div>);
	}

	renderOptions(options){
		return options.map((o, i) => {
			return (
				<span key={i} style={{marginLeft: '30px'}}>
					{o.size}  x  {o.quantity}
				</span>
			);
		})
	}

	renderPrice(options){
		const totalPrice = options.reduce((total, o)=>{
			return total + o.quantity * config.price;
		}, 0);
		return (
			<span style={{float: 'right', marginTop: '60px', color: '#4caf4e'}}>
				${totalPrice}.00 USD
			</span>
		)
	}

	renderRow(row, index){
		return (
			<div key={index} style={{borderBottomStyle: 'solid'}}>
				{this.renderDesign(row.design)}
				{this.renderOptions(row.options)}
				<img
					style={{width:"25px", float:'right', margin:'10px'}}
					src={removeIcon}
					onClick={() => {
						var currentCartKeys = JSON.parse(Cookies.get('mendShoppingCart'));
						currentCartKeys = currentCartKeys.filter((o)=>{
							return o != row.cookieKey
						});
						Cookies.set('mendShoppingCart', JSON.stringify(currentCartKeys));
						window.location.replace(window.location.href);
					}}
				/>
				{this.renderPrice(row.options)}
			</div>
		);
	}

	renderRows(){
		var rows = [];
		this.props.cartData.forEach((row, i) => {
			rows.push(this.renderRow(row, i));
		});
		return rows;
	}

  render () {
		return (
			<main style = {{fontFamily: 'SANS-SERIF'}}>
				<Header />
				{this.renderRows()}
				<div style={{marginTop: '10px', float: 'right'}}>
					<span style={{
						display: 'inline-block',
						marginRight: '15px',
						borderBottomStyle: 'dashed',
						borderWidth: '2px',
						fontSize: '16px',
					}}>
						SUBTOTAL  ${this.props.cartData.reduce((subTotal, item)=>{
							item.options.forEach((o)=>{
								subTotal = subTotal + (o.quantity * config.price);
							});
							return subTotal;
						}, 0)}.00 USD</span>
					<button style={buttonStyle}>Check Out</button>
				</div>
			</main>
		);
	}
};

const buttonStyle = {
  height: '26px',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(0, 0, 0)',
  margin: '5px',
  fontSize: '13px',
  width: '100px',
  borderStyle: 'none',
}
