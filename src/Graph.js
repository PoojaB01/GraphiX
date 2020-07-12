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
    nodes = [];
    makeVertex(event)
    {
        console.log(event.clientX);
        console.log(event.clientY);
        const newNodeList = [
            ...this.state.nodes,
            {
                id: this.state.count + 1,
                offsetX: event.clientX,
                offsetY: event.clientY,
            }
        ];
        this.setState({
            nodes: newNodeList,
            count: this.state.count + 1,
        });
    }
    render() {
        return (
            <div className="App-graph" onClick ={(event) => this.makeVertex(event)}>
                Graph
                {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
            </div>
        )
    }
}

export default Graph
