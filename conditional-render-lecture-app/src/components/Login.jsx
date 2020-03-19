import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        // setting initial state to be updated by form input
        this.state = {
            userName: "",
            password: "",
            hasBeenSubmitted: false,
        }
    }

    // conditional event handler - tied to onChange event listener to update state
    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        if (fieldName === "userName") {
            this.setState({ [fieldName]: fieldValue })
        } else if (fieldName === "password") {
            this.setState({ [fieldName]: fieldValue })
        }
    }

    // event handler - tied to onClick event listener 
    handleSubmission = (event) => {
        event.preventDefault(); // keeps the page from reloading
        console.log(this.state); // prints form values
        this.setState({ hasBeenSubmitted: true })
    }

    // displaying a sign up form using controlled components
    render() {
        if (this.state.hasBeenSubmitted) {
            return (
                <div>
                    <h1>You've Logged In</h1>
                    <h2>Welcome Back : {this.state.userName}</h2>
                </div>
            )
        }
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Log In!</legend>

                        <div className="formGroup">
                            <label htmlFor="userName">User Name : </label>
                            <input type="text" name="userName" id="userName" value={this.state.userName} onChange={this.handleChange} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="password">Password : </label>
                            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button onClick={this.handleSubmission}>Log In</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Login;