import React from 'react';
import BudgetDetail from './BudgetDetail';

export default (props) => (
        <ul>
            {props.map((budget) => (
                <li key={budget.id}>
                    {budget.name}
                </li>
            ))}
        </ul>
)