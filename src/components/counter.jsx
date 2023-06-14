import React, { Component } from 'react';

class Counter extends Component {
    /*
    state = {
        value : this.props.counter.value
    };
    */

    /*
    constructor () {
        super();
        this.handleIncrement = this.handleIncrement.bind(this); // read comment below
    }
    */

    // when this is passed to a function without any arguments it does not provide reference to any object and hence is undefined.
    // to get same value for this throughout, binding is done 

    /*
    handleIncrement = () =>
    {
        this.setState({ value : this.state.value + 1 });
    }
    */

    render() {

        return (
        <React.Fragment>
            <h4></h4>
            <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick = {() => this.props.onIncrement(this.props.counter)} className = "btn btn-secondary btn-sm m-2">Increment</button>
            <button onClick = {() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger btn-sm">Delete</button>
        </React.Fragment>
        ) ;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }
}
 
export default Counter;