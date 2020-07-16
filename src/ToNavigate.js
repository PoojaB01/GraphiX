import React, { Component } from 'react';
import Graph from './Graph.js'

class ToNavigate extends Component {
    constructor(){
        super();
        this.state = {
            VertexDraw: 0,
            EdgeDraw: 0,
        }
    }

    drawVertex(event){
        if(this.state.VertexDraw === 1){
            this.setState({
                VertexDraw: 0,
            }, () =>{
                console.log(this.state)
            });
        }
        else{
            this.setState({
                VertexDraw: 1,
                EdgeDraw: 0,
            }, () =>{
                console.log(this.state);
            });
        }
        
    }

    drawEdge(event){
        if(this.state.EdgeDraw === 1){
            this.setState({
                EdgeDraw: 0,
            }, () =>{
                console.log(this.state)
            });
        }
        else{
            this.setState({
                EdgeDraw: 1,
                VertexDraw: 0,
            }, () =>{
                console.log(this.state);
            });
        }
    }

    

    render() { 

        let va = this.state.VertexDraw;
        let va2 = this.state.EdgeDraw;
        return (
            <div className = "App-navigate">
                <button onClick = {(event) => {
                    this.drawVertex(event)
                }}> Draw vertex</button>
                <button onClick = {(event) => {
                    this.drawEdge(event)
                }}>Draw Edge</button>
                <Graph val={va} val2={va2} />
            </div>
        );
    }
}

export default ToNavigate;
