"use strict";

import React, {Component} from 'react';
import {animateScroll} from 'react-scroll';
import Header from '../../interface/Header';
import Slider from 'react-slick';
import whiteT from'../../assets/white.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const slickSettings = {
	dots: false,
	arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
	slidesToScroll: 1,
	accessibility: true,
	autoplay: true,
	autoplaySpeed: 3000,
};

export default class extends Component {

	constructor(props) {
		super(props);
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}

	componentWillMount() {
		this.props.loadGalleryRequest();
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	componentDidMount() {
	  this.updateWindowDimensions();
	  window.addEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions() {
	  this.forceUpdate();
	}

	renderDesign(design, i){
		const pixelWidth = 6.36;
		return (
			<div
				key = {i}
				className='pixel-board'
			>
				{design.design.map((h, i1) => {
					return (
						<div
							key={i1}
							className='pixel-row'>
							{h.map((p, i2) => {
								return (
									<div
										key={i2}
										className='pixel'
										style={{
											backgroundColor: p,
										}}></div>);
								})}
						</div>
					);
			})}
			</div>);
	}

	renderDesigns(){
		var designs = [];
		this.props.galleryData.forEach((design, i) => {
			designs.push(this.renderDesign(design, i));
		});
		return designs;
	}

  render () {
		console.log(this.props.galleryData);
		return (
			<main>
				<Header />
				<div className='slick' style={window.innerWidth < 600 ? {marginTop: 54 + 56 * ((window.innerWidth * 0.9) / 500)}:{}}>
					<Slider {...slickSettings}>
						{this.renderDesigns()}
					</Slider>
				</div>
				<img className="whiteT" src={whiteT} />
			</main>
		);
	}
};
