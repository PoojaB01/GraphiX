import React, { Component } from 'react';
import LineTo from 'react-lineto';

class Edge extends Component {

    constructor(props)
    {
        console.log(props.ed);
        super(props);
        this.state = {
            class1: this.props.ed.class1.my_class,
            class2: this.props.ed.class1.my_class,
        }
    }

    render() {
        return (
            <div>
                <LineTo from={this.props.ed.class1.my_class} to={this.props.ed.class2.my_class} borderColor='#ffffff' 
                borderStyle='solid' borderWidth='2px'/>
            </div>
        );
    }
}

export default Edge;
