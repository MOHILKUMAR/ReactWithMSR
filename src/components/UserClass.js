import React from "react";

// class UserClass extends React.Component {

//   constructor(props){
//     super(props);
    
//     this.state = {
//         count: 0,
//         count1: 0,
//     }

//   }

//   render() {
    
//     const {name , location } = this.props
//     const {count , count1} = this.state;


//     return <div>
//        {/* <h1>{name}</h1>
//        <h2>{location}</h2> */}

//        <h1>{count}</h1>
//        <h1>{count1}</h1>
        
//        <button onClick={() =>{
//          this.setState({
//             count: this.state.count + 1,
//             count1: this.state.count + 2,
//          })
//        }}>
//         count Increase
//        </button>
//     </div>
      

//   }


// }


class UserClass extends React.Component{
    constructor(props){
        super(props);
    

    this.state = {
        UserInfo : {
        name: "dummy Name",
        location: "agra",
        avater : "http://dummy-photo.com",
        }
        
    }
    // console.log("child constructor");
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/hukidi");
        const json = await data.json()
        this.setState({
            UserInfo : json,
        });
        // console.log(json);
        console.log("componentDidMount of child")
    }
    componentDidUpdate(){
        // console.log("component did update")
    }
    
    componentWillUnmount(){
        // console.log("component will unmount")
    }

    render() {
       const {name, location, avatar_url} = this.state.UserInfo;
    //    console.log("child render")
        return (
        <div>
           <img src={avatar_url}></img>
           <h1>Name:{name}</h1>
           <h2>location: {location}</h2> 
        </div>
        )
    }
}





export default UserClass;










