export const useFetch = () => {

    const url = 'http://localhost:4000';

    const useDataApi = async ( endpoint, method = 'GET', data = {} ) =>{
        try {

            
            if(method === 'GET'){
                const response = await fetch(`${url}${endpoint}`);
                const result = await response.json();
                return result;
            }else{
                const response = await fetch(`${url}${endpoint}`, {
                    method: method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = await response.json();
                return result;
            }

        } catch (error) {
            console.log(error);
        }
    }

    return [ useDataApi ]

}
