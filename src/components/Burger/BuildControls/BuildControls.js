import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
	<div className={classes.BuildControls}>
		<p>
			Current Price: <strong>{props.price.toFixed(2)}</strong> INR
		</p>
		{controls.map((ctrl) => (
			<BuildControl
				key={ctrl.label}
				label={ctrl.label}
				added={() => props.ingredientAdded(ctrl.type)}
				removed={() => props.ingredientRemoved(ctrl.type)}
				disabled={props.disabled[ctrl.type]}
			/>
		))}
		<button
			className={classes.OrderButton}
			disabled={!props.purchaseable}
			onClick={props.ordered}
		>
			{props.isAuth ? 'ORDER NOW' : 'SIGNUP TO ORDER'}
		</button>
	</div>
);

export default buildControls;
