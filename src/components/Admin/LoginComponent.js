import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const LoginComponent = () => {
    const [loginState, setLoginState] = useState(false);
    const onFinish = (values) => {
        console.log('Success:', values);
        setLoginState(true);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="login-form"
            labelCol={{
                span: 1,
            }}
            wrapperCol={{
                span: 24,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            className='login-area'
        >
            <div className='login-logo-container'>
                <img src={logo} alt="site-logo" />
            </div>
            <Form.Item
                name="username"
                requiredMark
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}>
                <Input placeholder='Username' size='large' />
            </Form.Item>
            <Form.Item
                requiredMark
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]} >
                <Input.Password placeholder='Password' size='large' />
            </Form.Item>
            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 0,
                    span: 16,
                }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 0,
                    span: 24,
                }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loginState}
                    disabled={loginState}
                    style={{ width: '100%', backgroundColor: '#143d2b' }}>
                    Submit
                </Button>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 0,
                    span: 24,
                }}>
                <Link to="/admin" className='poppins-regular forgot-link'>Forgot your password ?</Link>
            </Form.Item>
        </Form>
    );
};