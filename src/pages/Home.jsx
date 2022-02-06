import React, { useState, useEffect } from 'react';
import Client from '../components/Client';
import { useFetch } from '../hooks/useFetch';

const Home = () => {

  const [client, setClient] = useState([]);

  const [ useDataApi ] = useFetch();

  useEffect(() =>{

    const getCustomersAPI = async () =>{
      try {
        const response = await useDataApi('/customers');
        setClient(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }

    getCustomersAPI();

  },[]);

  return (
      <>
        <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
        <p className="mt-3">
          Manage your customers
        </p>

        <table className='w-full mt-5 table-auto shadow bg-white'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Nombre</th>
              <th className='p-2'>Contacto</th>
              <th className='p-2'>Empresa</th>
              <th className='p-2'>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {client.map(client => <Client key={client.id} {...client} />)}
          </tbody>
        </table>
      </>
  );
};

export default Home;
