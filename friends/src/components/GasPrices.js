import React from "react";
import moment from "moment";
import Loader from "react-loader-spinner";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class GasPrices extends React.Component {

    state = {
        gasPrices: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
        .get("/data")
        .then((res)=>
        this.setState({
            ...this.state,
            gasPrices: res.data.data.filter(
                (item)=>
                    item.type === "Gasoline - Regular" &&
                    (item.location === "US" || item.location === "State Of Hawaii")
            )
        })
        )
        .catch((err)=> console.log("Yo! you got a fucking error!: ", err))
    };

    formatData = () => {
        const formattedDated = [];
        this.state.gasPrices.forEach((price, index, arr)=>{
            if (price.location === "US"){
                formattedData.push({
                    date: moment(price.date).format("MMM"),
                    USPrice: price.price,
                    HawaiiPrice: arr[index + 1].price
                });
            }
        });
        return formattedData
    };


    redner() {
        const gasPrices = this.formatData();
        return (
            <div className = "gas-prices">
                <div className = "title-wrapper">
                    <div className = "title">
                        <div className = "inner-wrapper">
                            <div className = "top-title">Gas Comparison</div>
                            <div className = "bottom-title">Continental US vs Hawaii</div>
                        </div>
                    </div>
                </div>
                <div className = "key">
                    <div className = "US-key" />
                    <p className="US-key-text">Continental US Prices</p>
                    <div className = "Hawaii-key" />
                    <p className = "Hawaii-key-text">Hawaii Prices</p>
                </div>
                {this.props.fetchingData && (
                    <div className = "key spinner">
                        <Loader type= "Puff" />
                        <p>Loading Data</p>
                        </div>
                )}
                {gasPrices.length > 0 && (
                    <div className = "gas-wrapper">
                        
                    </div>

                )}
            </div>
        )
    }




}

