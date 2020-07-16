import React, { Component } from 'react'
import Draggable from 'react-draggable';

class Node extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            nodeStyle: {
                position: 'absolute',
                top : this.props.node.offsetY - 30 - 150,
                left : this.props.node.offsetX - 30,
            }
        }
    }
    render() {
        return (
            <Draggable>
                <div id = 'App-node' className = {this.props.node.id} style = {this.state.nodeStyle}>
                    {this.props.node.id} 
                </div>
            </Draggable>
        )
    }
}

export default Node
