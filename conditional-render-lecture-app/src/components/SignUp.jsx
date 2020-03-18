import React, { Component } from 'react'
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            userName: "",
            email: "",
            password: "",
            hasBeenSubmitted: false,
        }
    }

    handleChange = (event) => {

        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        if (fieldName === "fullName") {
            this.setState({ [fieldName]: fieldValue });
        } else if (fieldName === "userName") {
            this.setState({ [fieldName]: fieldValue });
        } else if (fieldName === "email") {
            this.setState({ [fieldName]: fieldValue });
        } else if (fieldName === "password") {
            this.setState({ [fieldName]: fieldValue });
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
        this.setState({hasBeenSubmitted : true});
    }

    handleReSubmission = () => {
        this.setState({
            fullName: "",
            userName: "",
            email: "",
            password: "",
            hasBeenSubmitted: false,
        });
    }

    render() {
        if (this.state.hasBeenSubmitted) {
            return (
                <div>
                    <h1>Form Submitted! - You are now signed up</h1>
                    <p>UserName : {this.state.userName}</p>
                    <button onClick = {this.handleReSubmission}>Sign In Again</button>
                </div>
            )
        } 
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Sign Up</legend>

                        <div className="formGroup">
                            <label htmlFor="fullName">Name : </label>
                            <input type="text" name="fullName" id="fullName" onChange={this.handleChange} value={this.state.fullName} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="userName">User Name : </label>
                            <input type="text" name="userName" id="userName" onChange={this.handleChange} value={this.state.userName} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="email">Email : </label>
                            <input type="email" name="email" id="email" onChange={this.handleChange} value={this.state.email} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="password">Password : </label>
                            <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password} />
                        </div>

                        <button onClick={this.handleSubmission}>Sign Up</button>
                    </fieldset>
                </form>

            </div>
        )
    }
}
export default SignUp;