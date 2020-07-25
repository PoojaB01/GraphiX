import React, { Component } from 'react';
import Graph from './Graph.js'


class ToNavigate extends Component {
    constructor(){
        super();
        this.state = {
            VertexDraw: 0,
            EdgeDraw: 0,
            AddEdge: 0,
            GraphDraw: 0,
            Vt1: 0,
            Vt2: 0,
            Vs1: 0,
            Vs2: 0,
            graph_input: '',
            BFS: 0,
            DFS: 0,
        }
    }

    drawVertex(event){
        if(this.state.VertexDraw === 1){
            this.setState({
                VertexDraw: 0,
                GraphDraw: 0,
            }, () =>{
                console.log(this.state)
            });
        }
        else{
            this.setState({
                VertexDraw: 1,
                EdgeDraw: 0,
                AddEdge: 0,
                GraphDraw: 0,
            }, () =>{
                console.log(this.state);
            });
        }
        
    }

    drawEdge(event){
        if(this.state.EdgeDraw === 1){
            this.setState({
                EdgeDraw: 0,
                GraphDraw: 0,
            }, () =>{
                console.log(this.state)
            });
        }
        else{
            this.setState({
                EdgeDraw: 1,
                VertexDraw: 0,
                AddEdge: 0,
                GraphDraw: 0,
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
            GraphDraw: 0,
        }, ()=>{
            console.log(this.state);
        })
    }

    ChangeV2 = (event) => {
        this.setState({
            Vt2: event.target.value,
            EdgeDraw: 0,
            VertexDraw: 0,
            GraphDraw: 0,
        }, ()=>{
            console.log(this.state);
        })
    }

    funcToReload(){
        this.forceUpdate();
    }

    inputEdge(event){
        event.preventDefault();
        this.setState({
            Vs1: this.state.Vt1,
            Vs2: this.state.Vt2,
            EdgeDraw: 0,
            VertexDraw: 0,
            AddEdge: 1,
            GraphDraw: 0
        }, ()=>{
            console.log(this.state);
            this.funcToReload();
        })
        
    }
    change_input = (event) => {
        event.preventDefault();
        this.setState({
            EdgeDraw: 0,
            VertexDraw: 0,
            AddEdge: 0,
            GraphDraw: 0,
            graph_input: event.target.value,
        },()=>{
            console.log(this.state.graph_input);
        })
    }
    input_graph(event){
        event.preventDefault();
        this.setState({
            EdgeDraw: 0,
            VertexDraw: 0,
            AddEdge: 0,
            GraphDraw: 1,
        })
        console.log(this.state.graph_input);
    }

    bfs(event){
        console.log("BFS was called")
        this.setState({
            EdgeDraw: 0,
            VertexDraw: 0,
            AddEdge: 0,
            BFS: 1- this.state.BFS,
            DFS: 0,
        });
    }

    dfs(event){
        console.log("DFS was called")

        this.setState({
            EdgeDraw: 0,
            VertexDraw: 0,
            AddEdge: 0,
            BFS: 0,
            DFS: 1 - this.state.DFS,
        });
    }

    render() { 

        let va = this.state.VertexDraw;
        let va2 = this.state.EdgeDraw;
        let va3 = this.state.AddEdge;
        let va4 = this.state.BFS;
        let va5 = this.state.GraphDraw;
        let v1 = this.state.Vs1;
        let v2 = this.state.Vs2;

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
                    <form>
                        <label>Vertex1</label>
                        <input type = 'number' value = {this.state.Vt1} onChange = {this.ChangeV1}></input>
                        <label>Vertex2</label>
                        <input type = 'number' value = {this.state.Vt2} onChange = {this.ChangeV2}></input>
                        <button type = 'submit' onClick = {(event) => this.inputEdge(event)}>Add edge (V1, V2)</button>
                    </form>
                    <form>
                        <label>
                            <textarea type = 'textarea' value = {this.graph_input} onChange = {this.change_input}></textarea>
                            <br />
                            <button type = 'submit' onClick ={(event) => this.input_graph(event)}> Make graph </button>
                        </label>
                    </form>
                    <button onClick = {(event) => {
                        this.bfs(event)
                    }}>BFS</button>
                    <br />
                    <button onClick = {(event) => {
                        this.dfs(event)
                    }}>DFS</button>
                </div>
                <Graph className = "App-graph grid-item" val={va} val2={va2} vax3={va3} val4={va4} val5={va5} graph={this.state.graph_input} v1={v1} v2={v2} doDFS={this.state.DFS}/>
            </div>
        );
    }
}

export default ToNavigate;
