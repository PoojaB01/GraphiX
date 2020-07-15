import React, { Component } from 'react'
import Node from './Node.js'

class Graph extends Component {
    constructor(){
        super();
        this.state = {
            nodes: [],
            edges: [],
            count: 0,
        };
    }

    makeVertex(event)
    {
        console.log(event.clientX);
        console.log(event.clientY);
        
        this.setState({
            nodes: this.state.nodes.concat({
                id: this.state.nodes.length + 1,
                offsetX: event.clientX,
                offsetY: event.clientY,
            }),
            count: this.state.count + 1,
        }, () => {
            console.log(this.state.nodes, this.state.count);
            console.log(event);
        });
    }

    render() {
        return (
            <div className = "App-graph">
                Graph
                <div className = "transparent" onClick = {(event) => {
                    console.log(event.currentTarget.classList);
                    this.makeVertex(event)}}></div>
                {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                
            </div>
        )
    }
}

export default Graph
