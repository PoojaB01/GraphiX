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
            val3: 0,
            u1: this.props.v1,
            u2: this.props.v2,
            CVS: [],
            edgelist: []
        };
    }
    makeVertex(event){
        // console.log(event.clientX);
        // console.log(event.clientY);
        // console.log(this.state.val);
        
        this.setState({
            nodes: this.state.nodes.concat({
                id: this.state.nodes.length + 1,
                offsetX: event.clientX,
                offsetY: event.clientY,
                visited: 1
            }),
            edgelist: this.state.edgelist.concat([[]]),
            count: this.state.count + 1,
        }, () => {
            console.log(this.state.nodes, this.state.count);
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    addEdge3(){
        this.setState({
            CVS: [],
        }, () => {console.log(this.state.edgelist);})
    }

    addEdge2(){
        if(this.state.CVS.length > 1){
            if(this.state.CVS[0].my_class === this.state.CVS[1].my_class){
                this.setState({
                    CVS: [
                        this.state.CVS[0],
                    ],
                },()=>  {console.log(this.state);})
            }
            else{             
                const newedgelist = this.state.edgelist;
                newedgelist[parseInt(this.state.CVS[0].my_class)-1] = newedgelist[parseInt(this.state.CVS[0].my_class)-1].concat([parseInt(this.state.CVS[1].my_class)-1]);
                newedgelist[parseInt(this.state.CVS[1].my_class)-1] = newedgelist[parseInt(this.state.CVS[1].my_class)-1].concat([parseInt(this.state.CVS[0].my_class)-1]);
                console.log(newedgelist)
                this.setState({
                    edges: this.state.edges.concat({
                        class1: this.state.CVS[0],
                        class2: this.state.CVS[1],
                        visited: 1,
                    }),
                    edgelist: newedgelist,
                }, () => {this.addEdge3()});
            }
        }
    }

    addEdge(event){
        let l = event.target.classList[0];
        if( l === 'transparent' || l === 'App-edge'){
        }
        else{
            this.setState({
                CVS: this.state.CVS.concat({
                    my_class: l,
                })
            }, () => {
                this.addEdge2();
            })
        } 
    }    
    
    componentWillReceiveProps(nextProps) {
        if(this.props.val2 === 0){
            this.setState({
                CVS: [],
            }, ()=>{
                console.log(this.state);
            })
        }

        if(this.props.v1>0 & this.props.v1<=this.state.count & this.props.v2>0 & this.props.v2<=this.state.count & nextProps.vax3 === 1 & 
            !(this.props.v1 === this.props.v2)){
            this.setState({
                edges: this.state.edges.concat(
                    {
                        class1: {
                            my_class:String(this.props.v1),
                        },
                        class2: {
                            my_class:String(this.props.v2),
                        },
                        visited: 1
                    }
                ),
                val3 : this.props.vax3,
            },() =>{
                console.log(this.state.edges);
                console.log(this.state.CVS);
                console.log(this.state.nodes);
            })
        }
    }

    makeCurrentVertexEmpty(){
        this.setState({
            CVS: [],
        });
    }

    BFS = (event) => {
        let l = event.target.classList[0];
        if( l === 'transparent' || l === 'App-edge'){
        }
        else {
            l = parseInt(l);
            console.log(`Starting bfs with ${l}`);
            var queue = []
            queue.push(l-1);
            var i,x;
            var vi = Array(this.state.nodes.length).fill(0);
            vi[l-1] = 1;
            while(queue.length > 0)
            {
                i = queue.shift();
                console.log("this is i " + i);
                for( x of this.state.edgelist[i] )
                {
                    if(vi[x]===0)
                    queue.push(x);
                    vi[x] = 1
                }
            }
        }
    }
    

    render() {
        let va = this.props.val;
        let va2 = this.props.val2;
        let va4 = this.props.val4;

        if(va === 0 & va2===0){
            // console.log('OK2')
            //this.makeCurrentVertexEmpty();
            if(va4===0)
            return (
                <div className = "App-graph" id = 'graph' onClick = {(event) => {console.log(this.props.val);
                    console.log(event.target.classList)}}>
                    <div className = "transparent"></div>
                    {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                    {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                </div>
            )
            else return (
                <div className = "App-graph" id = 'graph' onClick = {(event) => {this.BFS(event)}}>
                    <div className = "transparent"></div>
                    {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                    {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                </div>
            )
        }
        else{
            if(va ===1  & va2===0){
                //this.makeCurrentVertexEmpty();
                // console.log('OK3')
                return (
                    <div className = "App-graph" id = 'graph'>
                        <div className = "transparent" onClick = {(event) => {this.makeVertex(event)}}></div>
                        {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                        {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                    </div>
                )
            }
            else{
                // console.log('OK4')
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
