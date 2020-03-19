import React, {Component} from 'react';
import Login from './Login';
import SignUp from './SignUp';

class AppContainer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>20-03-19 React Conditional Rendering Lecture</h1>
                <Login/>
                <SignUp/>
            </div>
        )
    }
}

export default AppContainer;