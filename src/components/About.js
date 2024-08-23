import UserClassComp from "./UserClassComp";
import UserFunComp from "./UserFunComp";
import React from "react";
class AboutClassComp extends React.Component{
    constructor(props){
        super(props);
        console.log(" Parent Constructor")
    }
    componentDidMount(){
        console.log(" Parent Component Did Mount");
    }
    render(){
        console.log("Parent Render" )
    return(
        <div >
            <h1>ABOUT PAGE</h1>
            {/* <UserFunComp name={"Pranavika(FunComp)"}location={"Pune"}/> */}
            <UserClassComp name={"Anurag(ClassComp)"} location={"Pune"}/>
            <UserClassComp name={"Pranavika(ClassComp)"} location={"Pune"}/>
        </div>
    )
}
}
export default AboutClassComp;