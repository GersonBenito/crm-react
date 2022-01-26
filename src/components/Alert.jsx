import React from 'react';

const Alert = ({ message }) => {
    return (
      <div className='text-red-600'>
        {message}  
      </div>
    );
};

export default Alert;
