import React, { Component } from 'react';

import plusIcon from'../../assets/plus.png';
import addToBagIcon from'../../assets/addtobag.png';
import removeIcon from'../../assets/remove.png';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom';


const sizeOptions = [
  'XS', 'S', 'M', 'L', 'XL', 'XXL'
]
const quantityOptions = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
    this.addToCart = this.addToCart.bind(this);
    this.addRow = this.addRow.bind(this);
    this.renderRow = this.renderRow.bind(this);
    this.renderRows = this.renderRows.bind(this);
  }

  componentWillMount(){
    this.setState({info: this.props.preCart});
  }

  addToCart(){
    const newItemCookieKey = Date.now();
    var currentCartKeys = Cookies.get('mendShoppingCart')
    if(!currentCartKeys){
      currentCartKeys = [];
    }else{
      currentCartKeys = JSON.parse(currentCartKeys);
    }
    currentCartKeys.push(newItemCookieKey);
    Cookies.set('mendShoppingCart', JSON.stringify(currentCartKeys));

    this.props.addToCartRequest({cookieKey: newItemCookieKey});
  }

  addRow(){
    this.props.updatePreCart(this.props.preCart.concat([{size: null,quantity: null}]));
  }

  renderRow(row, i){
    return (
      <div key={i}>
        <div style={cellStyle}>
          <Dropdown
            options={sizeOptions}
            onChange={(v) => {
              this.props.preCart[i].size = v.value;
            }}
            value={this.props.preCart[i].size}
            placeholder="Size"
          />
        </div>
        <div style={cellStyle}>
          <Dropdown
            options={quantityOptions}
            onChange={(v) => {
              this.props.preCart[i].quantity = v.value;
            }}
            value={this.props.preCart[i].quantity}
            placeholder="Quantity"
          />
        </div>
        <div style={{textAlign:'center', display:'inline-block', width:'10%'}}>
          <img
          style={{width:'50%', marginBottom:'14px'}}
          src={removeIcon}
          onClick={() => {
            this.props.updatePreCart(this.props.preCart.filter((o, index) => i !== index));
          }}/>
        </div>
      </div>
    );
  }

  renderRows(){
    let rows = [];
    this.props.preCart.forEach((row, i) => {
      rows.push(this.renderRow(row, i));
    });
    return rows;
  }

  render() {
    return (
      <div className='modal'>
        <div style={{borderBottomStyle:'solid'}}>
          <h1>Add To Bag</h1>
        </div>
        {this.renderRows()}
        <div style={{borderTopStyle:'solid'}}>
          <Link to="/cart">
            <img style={bottomButtonStyle} src={addToBagIcon} onClick={this.addToCart}/>
          </Link>
          <img style={bottomButtonStyle} src={plusIcon} onClick={this.addRow}/>
        </div>
      </div>
    );
  }

}

const bottomButtonStyle = {
  float:'right',
  margin:'5px',
  height:'30px',
  marginTop: '15px',
}

const cellStyle = {
  display:'inline-block',
  width:'45%',
  lineHeight: '35px',
}

export default Cart;
