import React from "react";
import Axios from "axios";
import "./Login.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-bootstrap'
import { Form,Col, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const backUrl = "localhost/3001"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ' ',
            username: ' '
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
            username: this.state.username
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

    nextPath(path) {
        this.props.history.push(path);
    }


    render() {
        return (
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    
    />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        )
    }
}