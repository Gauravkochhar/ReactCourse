import React, { Component } from "react";
import AuthContext from "../../../store/AuthContext/AuthContext";

class Demo extends Component {

    static contextType = AuthContext;
    
    constructor() {
        super();
        this.state = {
            showMessage: true
        }
    }

    componentDidMount() {

    }

    componentDidUpdate(prevState, prevProps) {
        if(prevState.showMessage !=  this.state.showMessage) {
            // this.setState()
        }
    }

    componentWillUnmount() {

    }

    toggleHandler() {
        this.setState((oldState) => {
            return {showMessage: !oldState.showMessage}
        })
    }

    render() {
        const dsfd = 1;
        return <React.Fragment>
            { this.state.showMessage ? <p>Hello {this.props.name}</p>: ''}
            <button onClick={this.toggleHandler.bind(this)}>Toggle</button>
        </React.Fragment> 
    }
}

export default Demo;