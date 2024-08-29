import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less';
import logo from './images/logo.png';

/*
    login routine
*/

const Login = () => {
    const [form] = Form.useForm();

    let handleSubmit = (values) => {
        console.log('handleSubmit()', values);
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err){
                console.log('received values of form: ', values);
            }
        })
    }
    };

    const validatePwd = (rule,value,callback) =>{
        console.log('validatePwd()',rule,value)
        if(! value){
            callback('Please input your password')
        }else if(value.length<4){
            callback('Password at least 4 characters')
        }else if(value.length>12){
            callback('Password cannot larger than 12 characters')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('Password does not match pattern')
        }else{
            callback()
        }
    };

    return (
        <div className='login'>
            <header className='login-header'>
                <img src={logo} alt="logo" />
                <h1>React project: backend management system</h1>
            </header>
            <section className='login-content'>
                <h2>User login</h2>
                <Form
                    form={form}
                    onFinish={handleSubmit}
                    className="login-form"
                >
                    <Form.Item
                        name="username"
                        rules={[
                            { required: true, whitespace: true, message: 'Please input your username!' },
                            { min: 4, message: 'at least 4 characters!' },
                            { max: 12, message: 'username cannot larger than 12 characters' },
                            { pattern: /^[a-zA-Z0-9_]+$/, message: 'does not match pattern ' }]}
                        
                    >
                        <Input
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder='Username'
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            { validator: validatePwd }
                           ]}
                    >
                        <Input
                            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type='password'
                            placeholder='Password'
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form>
            </section>
        </div>
    );
};

export default Login;
