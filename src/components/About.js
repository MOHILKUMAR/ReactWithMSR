import React from "react";
import UserClass from  "./UserClass";
import { Component } from "react";


class About extends Component {
    constructor(props){
        super(props);

        // console.log(" parent constructor");
    }

     componentDidMount() {
        
        // console.log(json);
        // console.log("componentDidMount of Parent")
    }


  render() {
    //   console.log("parent render")
    return (
        <div>
            <h1>About Class Component
            </h1>
             <UserClass name ={"mohil kumar(class)"} location = {"agra"} />
        </div>
    )
  }



}


export default About;

