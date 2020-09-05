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

    


    render() {
        
       

        return(
            
            <div className = "friends">
               Hey from friendsList

            </div>

        )

    };



};

export default FriendsList;