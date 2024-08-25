import React, { Component } from 'react';
import './login.less';
import logo from './images/logo.png'
/*
    login routin
*/
export default class Login extends Component{
    render(){
        return(
            <div className='login'>
                <header className='login-header'>
                    <img src ={logo} alt = "logo"/>
                    <h1>React project: backend management system</h1>
                </header>
                <section className='login-content'>
                <p>this is the login content area.</p>
                </section>
            </div>
        )
    }
}