import React, {Component} from 'react'
import Login from './Login';
import SignUp from './SignUp';
class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggingIn : false,
            isSigningUp : false,
        }
    }

    updateLogin = () => {
        this.setState({isSigningUp : false});
        this.setState({isLoggingIn : true});
    }
    updateSignUp = () => {
        this.setState({isLoggingIn : false});
        this.setState({isSigningUp : true});
    }

    render(){
        let userForm;
        if (this.state.isLoggingIn) {
            userForm = <Login/>;
          } else if(this.state.isSigningUp) {
            userForm = <SignUp/>;
          }
        return(
            <div>
                <h1>20-03-19 React Conditional Rendering Lecture</h1>

                <button onClick = {this.updateLogin}>Log In</button>
                <button onClick = {this.updateSignUp}>Sign Up</button>
                
                {userForm}
            </div>
        )
    }
}
export default AppContainer;