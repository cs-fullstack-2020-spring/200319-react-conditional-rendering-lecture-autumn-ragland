import React, { Component } from 'react'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            hasBeenSubmitted: false,
        }
    }

    handleChange = (event) => {

        let fieldName = event.target.name;
        let fieldValue = event.target.value;

        if (fieldName === "userName") {
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
            userName: "",
            password: "",
            hasBeenSubmitted: false,
        });
    }

    render() {
        if (this.state.hasBeenSubmitted) {
            return (
                <div>
                    <h1>Form Submitted! - You are now logged in</h1>
                    <p>Welcome back {this.state.userName}</p>
                    <button onClick={this.handleReSubmission}>Login Again</button>
                </div>
            )
        }
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Log In</legend>

                        <div className="formGroup">
                            <label htmlFor="userName">User Name : </label>
                            <input type="text" name="userName" id="userName" onChange={this.handleChange} value={this.state.userName} />
                        </div>

                        <div className="formGroup">
                            <label htmlFor="password">Password : </label>
                            <input type="password" name="password" id="password" onChange={this.handleChange} value={this.state.password} />
                        </div>

                        <button onClick={this.handleSubmission}>Log In</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default Login;