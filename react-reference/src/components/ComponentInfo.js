import React , { Component } from 'react';
import PropsInfo from './PropsInfo';
import StateInfo from './StateInfo';
import LifeCycletInfo from './LyfeCycleInfo';


class ComponentInfo extends Component  {
    render() {
        return (
        <div className="componentInfo">
        <h2>Component Info</h2>
        <p>"Components let you split the UI into independent, reusable pieces, and think about each piece in isolation".<br></br>Components accept arbitrary inputs (called “props”) and return React elements that defines what will appear in screen.<br></br>component can be defined using ES6 class. <br></br>
        For example, (class Homework extends Component </p>
        <PropsInfo/>
        <StateInfo/>
        <LifeCycletInfo/>
        </div>
  

        )
    }
}

export default ComponentInfo;