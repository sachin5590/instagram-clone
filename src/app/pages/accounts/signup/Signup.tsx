import React from 'react';
import useSignup from './useSignup';

const Signup = (): JSX.Element => {
    const {
        form,
        error,
        setForm,
        setError,
        handleRegisteration
    } = useSignup();

    return (
        <>
            <div className="box">
                In Signup
                {/* <h2>Instagram</h2> */}
                {/* <h3>Sign up to see photos and videos from your friends.</h3> */}
                {/* Button for Login with facebook with an image, create custom button */}
            </div>
        </>
    );
}
export default Signup;
