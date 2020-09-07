import React from "react";
//import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

class NewFriend extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            id: Date.now(),
            name: '',
            age: " ",
            email: ''
            
        };
    }
    
    ChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }


    // componentDidMount(){
    //     this.addFriends();
    // };


    addFriends = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
        .post(`http://localhost:5000/api/friends`, this.state)
        .then((res)=> {
            console.log("adding your friend", res.data)
        })
        .catch((err)=> {
            console.log("well shit... you've got an error:", err)
        })
    }

    render(){
        const {id, name, age, email } = this.state
        return(
            <div>
                <form onSubmit = {this.addFriends}>
                    <div>
                        <input type = "text"
                            name = "id"
                            placeholder= "id"
                            value = {id}
                            onChange = {this.ChangeHandler}>
                        </input>
                    </div>
                    <div>
                        <input type ="text"
                            name = "name"
                            placeholder = "name"
                            value = {name}
                            onChange = {this.ChangeHandler}>
                         </input>
                    </div>
                    <div>
                        <input type ="text"
                            name = "age"
                            placeholder = "age"
                            value = {age}
                            onChange = {this.ChangeHandler}>
                         </input>
                    </div>
                    <div>
                        <input type ="text"
                            name = "email"
                            placeholder = "email"
                            value = {email}
                            onChange = {this.ChangeHandler}>
                         </input>
                    </div>
                    <button type= "submit">Add Friend</button>
                </form>
            </div>
        )
    }


}

export default NewFriend;

