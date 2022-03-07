import Expense from '../Expense/Expense';
import './ExpenseList.css';
const ExpenseList = (props) => {

    let expenseListContent = 'No Expense found';

    function onDeleteExpenseItem(expenseId) {
        props.onDeleteExpense(expenseId);
    }

    function getExpenseList() {
        if(!props.expenseList.length) {
            return <p>{expenseListContent}</p>
        } else {
            return props.expenseList.map((expense) => {
                return <div><Expense key={expense.id} id={expense.id} name={expense.name} amount={expense.amount}></Expense>
                    <button onClick={() => onDeleteExpenseItem(expense.id)}>Delete</button>
                </div>
            })
        }
    }


    return (
        <div>
            <h2>ExpenseList</h2>
            {
                getExpenseList()
            }
        </div>
    );
}

export default ExpenseList;