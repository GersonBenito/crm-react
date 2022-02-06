import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Loading from '../components/Loading';

const ViewClient = () => {

    const [client, seClient] = useState({});
    const [loading, setLoading] = useState(false);

    // obteniendo el id que se envia por medio de la url, con el uso del hook de react-router-dom
    const {id} = useParams();
    const [useDataApi] = useFetch();

    useEffect(() =>{
        const getClientById = async () =>{
            setLoading(!loading);
            const client = await useDataApi(`/customers/${id}`);
            seClient(client);
            setLoading(false);
        }
        getClientById();
    },[])

    return(
        <>
            {loading ? <Loading /> : (
                Object.keys(client).length > 0 ? (
                    <>
                        <h1 className='font-black text-4xl text-blue-900'>
                            View Client: {client.name}
                        </h1>
                        <p className="mt-3">
                            Information of Client
                        </p>
                        <p className="text-2xl text-gray-600 mt-10">
                            <span className="uppercase text-gray-800 font-bold">Client:</span>{' '}{client.name}
                        </p>
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="uppercase text-gray-800 font-bold">Email:</span>{' '}{client.email}
                        </p>
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="uppercase text-gray-800 font-bold">Phone:</span>{' '}{client.phone}
                        </p>
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="uppercase text-gray-800 font-bold">Business:</span>{' '}{client.business}
                        </p>
                        <p className="text-2xl text-gray-600 mt-4">
                            <span className="uppercase text-gray-800 font-bold">Notes:</span>{' '}
                            {client.notes || 'No notes'}
                        </p>
                    </>
                ):<p>No hay resultados</p>
            )}
        </>
    );
};

export default ViewClient;
