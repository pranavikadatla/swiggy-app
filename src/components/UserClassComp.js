import React from "react";
import UserContext from "./UserContext";
class UserClassComp extends React.Component{
    constructor(props){
        super(props);
    this.state={
        count:0,
        count2:0
    }
    console.log(" Child Constructor")
}
componentDidMount(){
    console.log(" Child Component Did Mount");
}
    render(){
        const {name,location}=this.props;
        const {count,count2}=this.state;
        console.log(" Child Render")
    return(
        <div className="user-card">
            {/* <h3>Count={this.state.count}</h3> */}
            <UserContext.Consumer>
                {/* {(data)=>console.log(data)} */}
                {({loggedInUser})=><h1 className="font-extrabold">{loggedInUser}</h1>}
            </UserContext.Consumer>
            <h3>Count={count}</h3>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1,
                    count2:this.state.count+1,
                })
            }}>Increase Count</button>
            <h3>Count2={count2}</h3>
            <h3>Name:{name}</h3>
            <h4>Location:{location}</h4>
        </div>
    );
};
};
export default UserClassComp;