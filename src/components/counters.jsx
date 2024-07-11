import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btm-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          /* <Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    value={counter.value} 
                    id={counter.id}
                />
                ) ) 
                */
          // when the object size increases, the variables to bemapped also increase,
          // so we can directly write counter = {counter} as shown below
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
