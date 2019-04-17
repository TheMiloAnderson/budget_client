import React from 'react';
import BudgetList from './BudgetList';

export default (props) => (
        <div>
            <p>Name: {props.budget.name}</p>
            <p>Total Amount: {props.budget.total_amount}</p>
        </div>
)