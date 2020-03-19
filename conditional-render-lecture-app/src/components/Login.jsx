import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        // setting initial state to be updated by form input
        this.state = {
            userName: "",
            password: "",
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
    }

    // displaying a sign up form using controlled components
    render() {
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