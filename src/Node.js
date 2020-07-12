import React, { Component } from 'react'
import Draggable from 'react-draggable';

export class Node extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            nodeStyle: {
                position: 'absolute',
                top : this.props.node.offsetY - 30,
                left : this.props.node.offsetX - 30,
            }
        }
    }
    render() {
        return (
            <Draggable>
                <div className = 'App-node' style = {this.state.nodeStyle}>
                    {this.props.node.id} 
                </div>
            </Draggable>
        )
    }
}

export default Node
