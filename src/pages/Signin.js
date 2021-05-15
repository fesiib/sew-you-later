import React from 'react';
import { useSelector } from 'react-redux';

const Signin = () => {
    const cnt = useSelector(state => state.counter.cnt);
    return (
        <div>
            {cnt} signIn
        </div>
    );
}

export default Signin;