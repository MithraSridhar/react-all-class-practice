import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';
import Statefull from './Statefull';

class LifeCycleA extends Component {

    //Initializing the component
constructor(props){
    super(props)
    this.state={
        name:"Mithra"
    }
    console.log("LifeCycleA Constructor")

}

//get props
static getDerivedStateFromProps(props,state){
    console.log("LifeCycleA getDerivedStateFromProps",state.name)
    return null
}
    
componentDidMount(){
    console.log("LifeCycleA componentDidMount")
    fetch("https://6541ccf5f0b8287df1fee54c.mockapi.io/products")
.then((res)=>res.json())
.then((data)=>console.log(data))
}

    render() {
        console.log("LifeCycleA render method")
        return (
            <div>
                ClassComponent
                <h1>My name is {this.state.name}</h1>
                {/* <LifeCycleB/> */}
            <Statefull/>
            </div>
        );
    }

 
}

export default LifeCycleA;