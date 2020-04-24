import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Axios from "axios";

const backUrl = "http://localhost:3001"

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            password: ' ',
            firstname: ' '
        };
    }



    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    


    onSubmit = (e) => {
        e.preventDefault();
        const form = {
            password: this.state.password,
            firstname: this.state.firstname
        }

        Axios.post(`${backUrl}/login`, JSON.stringify(form),
            {
                headers: { "Content-Type": "application/json" }
            })
            .then((res) => {
                toast(res.data.message)
                localStorage.setItem("token", res.data.token);
                this.props.history.push(`/reviews`)
            })
            .catch(error => {

                if (error.response !== undefined) {
                    toast(error.response.data.message)
                } else {
                    toast("An error occured. Please try again later!")
                }

            });
    }

 /*validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}*/
nextPath(path) {
    this.props.history.push(path);
}

  render (){
      return (
        <div id='form'>
  <div className="form-group" >
    <label >Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange ={e => this.handleChange(e)}
        />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    onChange ={e => this.handleChange(e)}
    />
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-checkcc-input" id="exampleCheck1"/>
    <label className="form-check-label" >Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary"  onClick={(e) => this.onSubmit(e)}>Submit</button>
  <button className="btn btn-primary" onClick={() => this.nextPath("/HomePage")}>HomePage</button>
    </div>
      );
    }
}
