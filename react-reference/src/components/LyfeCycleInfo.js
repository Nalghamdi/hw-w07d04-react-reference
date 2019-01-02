import React , { Component } from 'react';

class LifeCycleInfo extends Component  {
    render() {
        return (
        <div className="lifecycle-info">
        <h3>LifeCycle </h3>
        <p><b>Mounting</b>
<br></br>
When instance of a component is being created and inserted into the DOM:
<br></br>
	<li>constructor()</li>
	<li>static getDerivedStateFromProps()</li>
	<li>render()</li>
	<li>componentDidMount()</li>
<br></br> <br></br>
<b>Updating</b>
<br></br>
When component is being re-rendered:
<br></br>
<li>static getDerivedStateFromProps()</li>
	<li>shouldComponentUpdate()</li>
	<li>render()</li>
	<li>getSnapshotBeforeUpdate()</li>
	<li>componentDidUpdate()</li>
<br></br> <br></br>

<b>Unmounting</b>
<br></br>
When a component is being removed from the DOM:
<br></br>
<li>componentWillUnmount()</li>
<br></br> <br></br>
<b>Error Handling</b>
<br></br>
When there is an error during rendering, in a lifecycle method, or in the constructor of any child component:
<br></br>
    <li>static getDerivedStateFromError()</li>
    <li>componentDidCatch()</li>
<br></br>

Note: Updating and Mounting methods order are important
</p>
        </div>

        )
    }
}

export default LifeCycleInfo;