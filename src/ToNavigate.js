import React, { Component } from 'react';
import Graph from './Graph.js'

class ToNavigate extends Component {
    constructor(){
        super();
        this.state = {
            VertexDraw: 0,
            EdgeDraw: 0,
            AddEdge: 0,
            Vt1: 0,
            Vt2: 0,
            Vs1: 0,
            Vs2: 0
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
                AddEdge: 0
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
                AddEdge: 0
            }, () =>{
                console.log(this.state);
            });
        }
    }

    ChangeV1 = (event) => {
        this.setState({
            Vt1: event.target.value,
            EdgeDraw: 0,
            VertexDraw: 0,
        })
    }

    ChangeV2 = (event) => {
        this.setState({
            Vt2: event.target.value,
            EdgeDraw: 0,
            VertexDraw: 0,
        })
    }

    // reset = (event) => {
    //     this.setState({
    //         Vt1: 0,
    //         Vt2: 0,
    //     })

    //     console.log(this.state.Vs1 + '---' + this.state.Vs2)
    // }

    inputEdge = (event) => {
        this.setState({
            Vs1: this.state.Vt1,
            Vs2: this.state.Vt2,
            EdgeDraw: 0,
            VertexDraw: 0,
            AddEdge: 1
        },
        // console.log(this.state.Vs1 + '---' + this.state.Vs2),
        // () => this.reset()
        )

        
        event.preventDefault()
    }

    componentWillReceiveProps(){ //this is called to before render method
        this.setState({
           value:this.props.data
         })
        }

    render() { 

        let va = this.state.VertexDraw;
        let va2 = this.state.EdgeDraw;
        let va3 = this.state.AddEdge;
        let v1 = this.state.Vs1;
        let v2 = this.state.Vs2;

        console.log(this.state.Vs1 + '@' + this.state.Vs2)

        return (
            <div className = "grid-container App-body">
                <div className = "App-navigate grid-item">
                    <button onClick = {(event) => {
                        this.drawVertex(event)
                    }}> Draw vertex</button>
                    <br></br>
                    <button onClick = {(event) => {
                        this.drawEdge(event)
                    }}>Draw Edge</button>
                    <br></br>
                    {/* <p>Input edge</p>
                    <br></br> */}
                    <form onSubmit = {this.inputEdge}>
                        <label>Vertex1</label>
                        <input type = 'number' value = {this.Vt1} onChange = {this.ChangeV1}></input>
                        <label>Vertex2</label>
                        <input type = 'number' value = {this.Vt2} onChange = {this.ChangeV2}></input>
                        <button type = 'submit'>Add edge (V1, V2)</button>
                    </form>
                </div>
                <Graph className = "App-graph grid-item" val={va} val2={va2} vax3={va3} v1={v1} v2={v2}/>
            </div>
        );
    }
}

export default ToNavigate;
