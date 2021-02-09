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
            edgelist: [],
            val4: 1,
            bfsTree: [],
            nonBfsTree: [],
        };
    }

    makeEmpty()
    {
        this.setState({
            nodes: [],
            edges: [],
            edgelist: [],
            CVS: [],
            count: 0
        }, () => {});
    }
    makeVertex(X,Y) {
        this.setState({
            nodes: this.state.nodes.concat({
                id: this.state.nodes.length + 1,
                offsetX: X,
                offsetY: Y,
                visited: 1
            }),
            edgelist: this.state.edgelist.concat([[]]),
            count: this.state.count + 1,
        }, () => {
            console.log(this.state.nodes, this.state.count);
        });
    }
    makeVertexOnClick(event){
        // console.log(event.clientX);
        // console.log(event.clientY);
        // console.log(this.state.val);
        this.makeVertex(event.clientX,event.clientY);
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
                        visited: 0,
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

    makeGraph(graph){
        var array = graph.match(/[^\s]+/g);
        array[0] = parseInt(array[0])
        array[1] = parseInt(array[1])
        console.log(array);
        var nodes = []
        var edges = []
        var edgelist = []
        for(var i = 0 ; i < array[0]; i++)
        {
            nodes = nodes.concat({
                id: (i+1).toString(),
                offsetX: 300 + i*90,
                offsetY: 300 + i*90,
                visited: 1
            })
            edgelist = edgelist.concat([[]])
        }
        var j=2;
        for(i = 0; i < array[1]; i++)
        {
            edges = edges.concat({
                class1: {
                    my_class: array[j++]
                },
                class2:{
                    my_class: array[j++]
                },
                visited: 0,
            });
            edgelist[parseInt(array[j-2])-1] = edgelist[parseInt(array[j-2])-1].concat([parseInt(array[j-1])-1]);
            edgelist[parseInt(array[j-1])-1] = edgelist[parseInt(array[j-1])-1].concat([parseInt(array[j-2])-1]);
        }
        console.log("DONE")
        this.setState({
            nodes: nodes,
            edges: edges,
            edgelist: edgelist,
            count: nodes.length,
            CVS: []
        },() => {console.log("Yippie")});
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
                const newedgelist = this.state.edgelist;
                newedgelist[parseInt(this.props.v1)-1] = newedgelist[parseInt(this.props.v1)-1].concat([parseInt(this.props.v2)-1]);
                newedgelist[parseInt(this.props.v2)-1] = newedgelist[parseInt(this.props.v2)-1].concat([parseInt(this.props.v1)-1]);
                console.log(newedgelist);
            this.setState({
                edges: this.state.edges.concat(
                    {
                        class1: {
                            my_class:String(this.props.v1),
                        },
                        class2: {
                            my_class:String(this.props.v2),
                        },
                        visited: 0
                    }
                ),
                val3 : this.props.vax3,
                edgelist: newedgelist,
            },() =>{
                console.log(this.state.edges);
                console.log(this.state.CVS);
                console.log(this.state.nodes);
            })
        }
        if(nextProps.val5 === 1 && this.props.graph !== '')
        {
            this.makeGraph(this.props.graph);
        }
    }

    makeCurrentVertexEmpty(){
        this.setState({
            CVS: [],
        });
    }

    // performDFS = (event)

    DFS = (event) => {
        let l = event.target.classList[0];
        alert(`DFS is called starting with vertex ${l}`);
        if( l === 'transparent' || l === 'App-edge'){
        }

        else {
            l = parseInt(l);
            console.log(`Starting dfs with ${l}`);
            var stack = []
            stack.push(l-1);
            var i,x;
            var vi = Array(this.state.nodes.length).fill(0);
            var d = Array(this.state.nodes.length).fill(0);
            vi[l-1] = 1;
            var newEdges = [];
            while(stack.length > 0)
            {
                i = stack.pop();
                console.log(`this is i ${i+1}`);
                // vi[i] = 1;
                
                for( x of this.state.edgelist[i] )
                {
                    if(vi[x]===0){
                        stack.push(x);
                        vi[x] = 1;
                        d[x] = d[i]+1;
                        newEdges.push({
                            class1: {
                                    my_class: String(i+1),
                                },
                            class2: {
                                    my_class: String(x+1),
                                },
                                visited: d[i]+1,
                        });
                    }
                }
            }
            console.log("dfs done");
            console.log(newEdges);
        }
    }

    BFS = (event) => {
        let l = event.target.classList[0];
        alert(`BFS is called starting with vertex ${l}`);
        if( l === 'transparent' || l === 'App-edge'){
        }
        else {
            l = parseInt(l);
            console.log(`Starting bfs with ${l}`);
            var queue = []
            queue.push(l-1);
            var i,x;
            var vi = Array(this.state.nodes.length).fill(0);
            var d = Array(this.state.nodes.length).fill(0);
            vi[l-1] = 1;
            var newEdges = [];
            while(queue.length > 0)
            {
                i = queue.shift();
                console.log(`this is i ${i+1}`);
                
                for( x of this.state.edgelist[i] )
                {
                    if(vi[x]===0){
                        queue.push(x);
                        vi[x] = 1;
                        d[x] = d[i]+1;
                        newEdges.push({
                            class1: {
                                    my_class: String(i+1),
                                },
                            class2: {
                                    my_class: String(x+1),
                                },
                                visited: d[i]+1,
                        });
                    }
                }
            }
            console.log("bfs done");
            console.log(newEdges);
        console.log(this.state.edges);
            let y;
            for(x of this.state.edges){
                var flag=0;
                for(y of newEdges){
                    if(String(x.class1.my_class)=== String(y.class1.my_class) && String(x.class2.my_class) === String(y.class2.my_class)){
                        flag=1;
                        x.visited = y.visited;
                    }
                    if(String(x.class1.my_class)=== String(y.class2.my_class) && String(x.class2.my_class) === String(y.class1.my_class)){
                        flag=1;
                        x.visited= y.visited;
                    }
                }
                if(flag===0){
                    x.visited = 0;
                }
            }
        }
        console.log(newEdges);
        console.log(this.state.edges);
    }

    render() {
        let va = this.props.val;
        let va2 = this.props.val2;
        let va4 = this.props.val4;

        if(va === 0 & va2===0){
            
            if(this.props.doDFS === 1) {
                return (
                    <div className = "App-graph" id = 'graph' onClick = {(event) => {this.DFS(event)}}>
                        <div className = "transparent"></div>
                        {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                        {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                    </div>
                )
            }
            else { 
                if(va4 === 1) {
                    return (
                        <div className = "App-graph" id = 'graph' onClick = {(event) => {this.BFS(event)}}>
                            <div className = "transparent"></div>
                            {this.state.nodes.map((node,index) => <Node key = {index} node = {node} />)}
                            {this.state.edges.map((edge, index) => <Edge key = {index} ed = {edge} />)}
                        </div>
                    )
                }

                else {
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
        }

        else{
            if(va ===1  & va2===0){
                return (
                    <div className = "App-graph" id = 'graph'>
                        <div className = "transparent" onClick = {(event) => {this.makeVertexOnClick(event)}}></div>
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
