import React, { Component } from 'react';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            userName: "",
            email: "",
            password: "",
        }
    }

    handleChange = (event) => {
        let fieldName = event.target.name;
        let fieldValue = event.target.value;
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

    handleSubmission = (event) => {
        event.preventDefault();
    }

    render() {
        // full name, username, email address and password
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
                        <button onClick = {this.handleSubmission}>Sign Up</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SignUp;