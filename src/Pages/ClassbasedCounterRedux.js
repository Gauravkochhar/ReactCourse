import React from 'react';
import { connect } from 'react-redux';
import { counterActions } from '../store';
class ClassbasedCounterRedux extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    incrementHandler() {
        this.props.increment();
    }

    increaseHandler() {
        this.props.increase(5);
    }

    decrementHandler() {
        this.props.decrement();
    }

    render() {
        return (
        <>
        <p>Counter Value: {this.props.counter}</p>
        <div>
            <button onClick={this.incrementHandler.bind(this)}>Increment</button><br/>
            <button onClick={this.increaseHandler.bind(this)}>Increment</button><br/>
            <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        </>)
    }
}

const mapStateToProps = (state) => {
        return {
            counter: state.counterScreen.counter
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(counterActions.increment()),
        increase: (incrementBy) => dispatch(counterActions.increase(incrementBy)),
        decrement: () => dispatch(counterActions.decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassbasedCounterRedux);
