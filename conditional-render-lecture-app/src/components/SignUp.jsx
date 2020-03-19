import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        // setting initial state to be updated by form input
        this.state = {
            fullName: "",
            userName: "",
            email: "",
            password: "",
            hasBeenSubmitted: false, // flag for conditional render
        }
    }

    // conditional event handler - tied to onChange event listener to update state
    handleChange = (event) => {
        // define variables to represent event.target properties
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
        // conditionally update state
        if (fieldName === "fullName") {
            this.setState({ [fieldName]: fieldValue })
        } else if (fieldName === "userName") {
            this.setState({ [fieldName]: fieldValue })
        } else if (fieldName === "email") {
            this.setState({ [fieldName]: fieldValue })
        } else if (fieldName === "password") {
            this.setState({ [fieldName]: fieldValue })
        }
    }

    // event handler - tied to onClick event listener 
    handleSubmission = (event) => {
        event.preventDefault(); // keeps the page from reloading
        console.log(this.state); // prints form values
        this.setState({ hasBeenSubmitted: true }) // update flag for conditional rendering
    }

    render() {
        // if the if statement evaluates to true 
        // display a success message
        if (this.state.hasBeenSubmitted) {
            return (
                <div>
                    <h1>You've Signed Up</h1>
                    <h2>Your Username is : {this.state.userName}</h2>
                </div>
            )
        }
        // if the if statement evaluates to false 
        // display a sign up form using controlled components
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Sign Up!</legend>

                        <div className="formGroup">
                            <label htmlFor="fullName">Full Name : </label>
                            <input type="text" name="fullName" id="fullName" value={this.state.fullName} onChange={this.handleChange} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="userName">User Name : </label>
                            <input type="text" name="userName" id="userName" value={this.state.userName} onChange={this.handleChange} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email">Email : </label>
                            <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="password">Password : </label>
                            <input type="password" name="password" id="password" value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button onClick={this.handleSubmission}>Sign Up</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SignUp;