import { useEffect, useState } from 'react';
import { Service } from '../types/Service';

const useInitDataService = () => {
    const [result, setResult] = useState<Service<any>>({
        status: 'loading'
    });

    useEffect(() => {
        const localData = window.localStorage.getItem('data');
        if (localData) {
            const data:any = JSON.parse(localData);
            setResult({ status: 'loaded', data: data });
        } else {
            fetch('https://toluna-digital-commons.s3.amazonaws.com/toluna-frontend-developer-test-v2/data.json')
                .then(response => response.json())
                .then(response => {
                    //window.localStorage.setItem('data', JSON.stringify(response));
                    setResult({ status: 'loaded', data: response[0] });
                })
                .catch(error => setResult({ status: 'error', error }));
        }

    }, []);

    return result;
};

export default useInitDataService;