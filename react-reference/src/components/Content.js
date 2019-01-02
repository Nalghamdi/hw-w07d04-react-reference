import React , { Component } from 'react';
import ComponentInfo from './ComponentInfo';
import JSXInfo from './JSXInfo';

class Content extends Component  {
    render() {
        return (
       <div className="contents">   
        <ComponentInfo/>
        <JSXInfo/>
       </div>
        )
    }
}

export default Content;