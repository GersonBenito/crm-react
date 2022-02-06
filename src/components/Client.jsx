import React from 'react';
import { useNavigate } from 'react-router-dom';

const Client = ({ name, email, phone, business, notes, id }) => {

    const navigate = useNavigate();

    const viewClient = (id) =>{
        navigate(`/customers/${id}`);
    }

    return (
        <tr className='border-b hover:bg-gray-50'>
            <td className='p-2'>{name}</td>
            <td className='p-2'>
                <p><span className='text-gray-800 font-bold'>Email: </span>{email}</p>
                <p><span className='text-gray-800 font-bold'>Phone: </span>{phone}</p>
            </td>
            <td className='p-2'>{business}</td>
            <td className='p-2'>
                <button
                    type='button'
                    className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-1 font-bold'
                    onClick={() =>viewClient(id)}
                >
                    Ver
                </button>
                <button
                    type='button'
                    className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-1 font-bold mt-2'
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='bg-red-600 hover:bg-red-700 block w-full text-white p-1 font-bold mt-2'
                >
                    Eliminar
                </button>
            </td>
        </tr>
    );
};

export default Client;
