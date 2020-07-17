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
            // val3: this.props.val3,
            // val3: this.props.vax3,
            val3: 1,

            u1: this.props.v1,
            u2: this.props.v2,
            
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
            // console.log(event);
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

        // console.log('*********');
        // console.log(this.edges);
        
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
        // console.log('f' + l + typeof(l));
        console.log('f')
        console.log(event.target.classList);
        if( l === 'transparent' || l === 'App-edge'){
        }
        else{
            this.setState({
                currentVertexSelected: this.state.currentVertexSelected.concat({
                    my_class: l,
                })
            }, () => this.addEdge2())
        }
        
    }

    // reset = (event) => {
    //     // this.setState({
    //     //     u1: 0,
    //     //     u2: 0,
    //     //     val3: 0
    //     // })

    //     // console.log(this.state.Vs1 + '---' + this.state.Vs2)
    // }

    addEdgeOnInput2(event){
        this.setState({
            currentVertexSelected: this.state.currentVertexSelected.concat({
                my_class: this.props.v2,
            }),
            val3: 0
        }, 
        () => this.addEdge2())
    }

    addEdgeOnInput(event){
            // console.log('adding' + this.props.v1 + ' ' + this.props.v2)
            // class2: {my_class: "2"}
            
            this.setState({
                currentVertexSelected: this.state.currentVertexSelected.concat({
                    my_class: this.props.v1,
                })
            }, () => this.addEdgeOnInput2())
    }
    

    render() {
        let va = this.props.val;
        let va2 = this.props.val2;
        let va3 = this.props.val3;
        let x = this.props.v1;
        let y = this.props.v2;
        let s = this.state.nodes.length;

        console.log(this.props.vax3 + ' ' + this.state.val3)
        console.log(this.props.v1 + 'haaaaaa' + this.state.u1)

        if(va === 0 & va2===0){
            if(x>0 & y>0 & x<=s & y<=s & this.state.val3 === 1) {
                console.log('OK')
                this.addEdgeOnInput();
                return (
                  
                        
                        <div className = "App-graph" id = 'graph' onClick = {(event) => {console.log(this.props.val);
                            console.log(event.target.classList)}}>
                            <div className = "transparent"></div>
                            {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                            {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                        </div>

                )
            }

            else {
                console.log('OK2')
                return (
                    <div className = "App-graph" id = 'graph' onClick = {(event) => {console.log(this.props.val);
                        console.log(event.target.classList)}}>
                        <div className = "transparent"></div>
                        {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                        {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                    </div>
                )
            }
        }
        else{
            if(va ===1  & va2===0){
                console.log('OK3')
                return (
                    <div className = "App-graph" id = 'graph'>
                        <div className = "transparent" onClick = {(event) => {this.makeVertex(event)}}></div>
                        {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                        {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                    </div>
                )
            }
            else{
                console.log('OK4')
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
