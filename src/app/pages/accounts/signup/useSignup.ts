import { useState, useEffect } from 'react';

interface SignupForm {
    contactDetail: string;
    fullName: string;
    username: string;
    password: string;
}

function useSignup () {
    const [form, setForm] = useState<SignupForm>();
    const [error, setError] = useState<string>('');

    useEffect(() => {
        document.title = 'Log in - Instagram';
    }, []);

    const handleRegisteration = async () => {
        console.log('In handle login');
    }

    return {
        form,
        error,
        setForm,
        setError,
        handleRegisteration
    };
}

export default useSignup;
