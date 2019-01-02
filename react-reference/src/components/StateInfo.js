import React , { Component } from 'react';

class StateInfo extends Component  {
    render() {
        return (
        <div className="state-info">
        <h3>State </h3>
        <p>State is an internal data-set which affects the rendering of components and can only seen on the inside of component definitions.
        <br></br>
        getInitialState() is used to declare a default set of values for the initial state and returning that object.
        <br></br>
        Note: it can be updated and changed while props are immutable. </p>
        </div>

        )
    }
}

export default StateInfo;