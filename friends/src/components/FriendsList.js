import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";
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
        .get("/api/friends")
        .then((res)=>
        this.setState({
            ...this.state,
            friends: res.data
            
            // .data.filter(
            //     (item)=>
            //         item.type === "Gasoline - Regular" &&
            //         (item.location === "US" || item.location === "State Of Hawaii")
            // )
        })
        )
        .catch((err)=> console.log("Yo! you got a fucking error!: ", err))
    };

    // formatData = () => {
    //     const formattedDated = [];
    //     this.state.gasPrices.forEach((price, index, arr)=>{
    //         if (price.location === "US"){
    //             formattedData.push({
    //                 date: moment(price.date).format("MMM"),
    //                 USPrice: price.price,
    //                 HawaiiPrice: arr[index + 1].price
    //             });
    //         }
    //     });
    //     return formattedData
    // };


    redner() {
        //const gasPrices = this.formatData();
        return (
            <div className = "gas-prices"> Hey from FriendsList</div>
               
    );
};



};

export default FriendsList;