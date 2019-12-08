import React, {Component} from 'react';
import '../index.css'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: '',
            password: '',
            invalid: "",
            isLoggedIn: false,
            email: ""
        }
    }
    onNameChange = (event) => {
        this.setState({name: event.target.value})
    };
    onEmailChange = (event) => {
        this.setState({name: event.target.value})
    };
    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    };
    onSubmitSignIn = (e) => {
        e.preventDefault();
        let tempbody = {
            name: this.state.name,
            password: this.state.password,
            email: this.state.email
        };
        console.log(this.state);
        fetch('http://localhost:3001/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            body: JSON.stringify(tempbody)
        })
            .then(response => response.json())
            .then(user => {
                if (user){
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                    console.log(user)

                } else {
                    console.log("response2: " + user);
                    // this.setState({isLoggedIn: true,})
                }
            })
    };
    render() {

        return (
            <div>
                <h1> Create Account</h1>
                <div id='main'>
                    {/*<article class="br2 ba dark-gray b--black-10 w-100 s-50m w-25-1 mw5 center"/>*/}
                    <form >
                        <div id='head'>

                            <div id='name'>
                                <label htmlFor="Username">  Username: </label>
                                <input onChange={this.onNameChange} type='text' className="name" />
                            </div>

                            <div id='email'>
                                <label htmlFor="email"> Enter Email </label>
                                <input onChange={this.onEmailChange} type='text' id="email"/>
                            </div>
                            <div id='password'>
                                <label htmlFor="password">  Password: </label>
                                <input onChange={this.onPasswordChange} type='text' id="password"/>
                                <br/>

                            </div>
                            <button id={'sign'} onClick={() => this.onSubmitSignIn} class='shadow-5 dim ba bw2'>Create Account</button>
                        </div>

                    </form>

                </div>

            </div>
        );
    }
}

export default Register;