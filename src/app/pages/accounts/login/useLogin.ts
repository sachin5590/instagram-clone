import { useState, useEffect } from 'react';

function useLogin () {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        document.title = 'Log in - Instagram';
    }, []);

    const handleLogin = async () => {
        console.log('In handle login');
    }

    return {
        email,
        password,
        error,
        setEmail,
        setPassword,
        setError,
        handleLogin
    };
}

export default useLogin;
