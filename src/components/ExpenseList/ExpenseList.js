import Expense from '../Expense/Expense';
import './ExpenseList.css';
const ExpenseList = (props) => {

    let expenseListContent = 'No Expense found';

    function getExpenseList() {
        if(!props.expenseList.length) {
            return <p>{expenseListContent}</p>
        } else {
            return props.expenseList.map((expense) => {
                return <Expense key={expense.id} id={expense.id} name={expense.name} amount={expense.amount}></Expense>
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