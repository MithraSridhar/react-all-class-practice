import React, { Component } from 'react';

class LifeCycleB extends Component {


    constructor(props){
        super(props)
        this.state={
            name:"Mithra"
        }
        console.log("LifeCycleB Constructor")
    
    }

//get props
static getDerivedStateFromProps(props,state){
    console.log("LifeCycleB getDerivedStateFromProps",state.name)
    return null
}

    render() {
        console.log("LifeCycleB render method")
        return (
            <div>
                LifeCycleB
            </div>
        );
    }

        
componentDidMount(){
    console.log("LifeCycleB componentDidMount")
    fetch("https://6541ccf5f0b8287df1fee54c.mockapi.io/products")
.then((res)=>res.json())
.then((data)=>console.log(data))
}

}

export default LifeCycleB;