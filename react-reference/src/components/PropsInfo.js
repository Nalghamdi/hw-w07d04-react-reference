import React , { Component } from 'react';

class PropsInfo extends Component  {
    render() {
        return (
        <div className="props-info">
        <h3>Props</h3>
        <p>Props are used to send data to React Components which are immutable. <br></br> The child components should only pass data from the state using props.<br></br> It is used by adding the props inside components using reactDOM.render() function.</p>
        </div>

        )
    }
}

export default PropsInfo;