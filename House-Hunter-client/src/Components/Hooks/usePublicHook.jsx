import axios from 'axios';

const axioPublicInstance = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const usePublicHook = () => {
    return axioPublicInstance;
}

export default usePublicHook