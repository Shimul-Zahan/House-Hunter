import { useQuery } from '@tanstack/react-query';
import usePublicHook from './usePublicHook';
import axios from 'axios';

const getAllHouses = () => {

    // const api = usePublicHook();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-houses'],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/api/all-houses')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default getAllHouses