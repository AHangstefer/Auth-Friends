import React from "react";
//import moment from "moment";
//import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {

    state = {
        friends: []
    };


    componentDidMount(){
        this.getData();
    }


    getData = () => {
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then((res)=> {
        console.log("these are your friends", res)
        this.setState({
            ...this.state,
            friends: res.data
        })
        })
        .catch((err)=> console.log("Yo! you got a fucking error!: ", err))
    };

    // formatData = () => {
    //     const formattedData = [];
    //     this.state.friends.forEach((age, email, id, name) => {
    //         formattedData.push({
    //             age: age,
    //             email: email,
    //             id: id,
    //             name: name

    //         });
    //     })
    //     return formattedData
    // };

    


    render() {

        //const friend = this.formatData();
        
        return(
            
        <div className = "friends">{this.state.friends.map((item)=>(

            <p key = {item.id}>{item.name}</p>
        ))}
           
        </div>

        )

    };



};

export default FriendsList;