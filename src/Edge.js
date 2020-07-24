import React, { Component } from 'react';
import LineTo from 'react-lineto';

class Edge extends Component {

    constructor(props)
    {
        console.log(props.ed);
        super(props);
        this.state = {
            class1: this.props.ed.class1.my_class,
            class2: this.props.ed.class2.my_class,
            colour: this.props.ed.visited,
        }
    }

    

    render() {
        let col = ['#FFA500','#FFFF00','#00FF00','#00008B','#FF00FF']
        let val = this.props.ed.visited;
        // console.log(this.props.ed);
        if(this.props.ed.visited >= 1){
            return (
                // console.log(this.props.ed),
                <div>
                    <LineTo className = 'App-edge' from = {this.props.ed.class1.my_class} to = {this.props.ed.class2.my_class} borderColor={col[val%5]} 
                    borderStyle='solid' borderWidth = '3px'/>
                </div>
            );
        }
        else{
            return (
            
                <div>
                    <LineTo className = 'App-edge' from = {this.props.ed.class1.my_class} to = {this.props.ed.class2.my_class} borderColor='#ffffff' 
                    borderStyle='solid' borderWidth = '3px'/>
                </div>
            );
        }
        
    }
}

export default Edge;
