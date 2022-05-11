import React from 'react';
import { connect } from 'react-redux';

class ClassbasedCounterRedux extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(this.props);
        this.incrementHandler = this.incrementHandler.bind(this);
        this.decrementHandler = this.decrementHandler.bind(this);
    }

    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement();
    }

    render() {
        return (
        <>
        <p>Counter Value: {this.props.counter}</p>
        <div>
            <button onClick={this.incrementHandler}>Increment</button><br/>
            <button onClick={this.decrementHandler}>Decrement</button>
        </div>
        </>)
    }
}

const mapStateToProps = (state) => {
        return {
            counter: state.counter
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'increment'}),
        decrement: () => dispatch({ type: 'decrement'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassbasedCounterRedux);
