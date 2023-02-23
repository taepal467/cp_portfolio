import React from 'react';

export default function Loader() {
    return(
        <div className='flex justify-center'>
            <span className='animate-loader'>C</span>
            <span className='animate-loader animation-delay-200'>P</span>
        </div>
    );
}