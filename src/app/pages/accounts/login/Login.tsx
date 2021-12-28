import React from 'react';
import useLogin from './useLogin';

const Login = (): JSX.Element => {

    const {
        email,
        password,
        error,
        setEmail,
        setPassword,
        setError,
        handleLogin
    } = useLogin();

    return (
        <>
            {/* set max-width */}
            <div className="container flex border">
                In Login
            </div>
        </>
    );
}

export default Login;
