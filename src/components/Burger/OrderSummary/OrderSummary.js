import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	//This could be a functional component,no need to be a class component
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
			return (
				<li key={key}>
					<span style={{ texttransform: 'capitalize' }}>{key}</span>:{' '}
					{this.props.ingredients[key]}
				</li>
			);
		});
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>Delicious burger with the following ingredients</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price : {this.props.price.toFixed(2)} INR</strong>
				</p>
				<p>Continue for Checkout?</p>
				<Button btnType="Danger" clicked={this.props.purchaseCanceled}>
					CANCEL
				</Button>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>
					CONTINUE
				</Button>
			</Aux>
		);
	}
}

export default OrderSummary;
