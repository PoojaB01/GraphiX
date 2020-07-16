import React, { Component } from 'react'
import Node from './Node.js'
import Edge from './Edge.js'

class Graph extends Component {
    constructor(props){
        super(props);
        this.state = {
            nodes: [],
            edges: [],
            count: 0,
            val: this.props.val,
            val2: this.props.val2,
            currentVertexSelected: []
        };
    }

    makeVertex(event)
    {
        console.log(event.clientX);
        console.log(event.clientY);
        console.log(this.state.val);
        
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

    addEdge3(){
        this.setState({
            currentVertexSelected: [],
        })
        // }, ()=>{
        //     console.log(this.state.edges);
        // console.log(this.state.currentVertexSelected);
        // console.log(this.state.nodes);
        // })
        
    }

    addEdge2(){
        // console.log(this.state.edges);
        // console.log(this.state.currentVertexSelected);
        // console.log(this.state.nodes);
        if(this.state.currentVertexSelected.length > 1){
            this.setState({
                edges: this.state.edges.concat({
                    class1: this.state.currentVertexSelected[0],
                    class2: this.state.currentVertexSelected[1],
                }),
            }, () => this.addEdge3());
        }
    }

    addEdge(event){
        let l = event.target.classList[0];
        if( l === 'transparent' ){
        }
        else{
            this.setState({
                currentVertexSelected: this.state.currentVertexSelected.concat({
                    my_class: l,
                })
            }, () => this.addEdge2())
        }
        
    }
    

    render() {
        let va = this.props.val;
        let va2 = this.props.val2;
        if(va === 0 & va2===0){
            return (
                <div className = "App-graph" id = 'graph' onClick = {(event) => {console.log(this.props.val);
                    console.log(event.target.classList)}}>
                    <div className = "transparent"></div>
                    {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                    {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                </div>
            )
        }
        else{
            if(va ===1  & va2===0){
                return (
                    <div className = "App-graph" id = 'graph'>
                        <div className = "transparent" onClick = {(event) => {this.makeVertex(event)}}></div>
                        {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                        {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                    </div>
                )
            }
            else{
                return (
                    <div className = "App-graph" id = 'graph' onClick = {(event) => {this.addEdge(event)}}>
                        <div className = "transparent"></div>
                        {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                        {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                    </div>
                )
            }
        }
    }
}

export default Graph
