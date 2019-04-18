import React from 'react';
import BudgetDetail from './BudgetDetail';

// export default (props) => {
//         return (
//         <ul>
//             {props.budgets.map((budget) => {
//                 return <li key={budget.id}>
//                     {budget.name}
//                 </li>
//             })}
//         </ul>)
// }


export default (props) => (
    <ul>
        {props.budets.map(budget => (
            <BudgetDetail key={budget.id} budget={budget} />
        ))}
    </ul>
)