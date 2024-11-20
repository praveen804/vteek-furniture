import { fetchFurnitureProduct } from "@/utils/productcrud";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {ProductResponse} from '@/types/productInterface'


const useFurnitureProductHook = () => {

    const { data, isFetching, isError, error } : UseQueryResult<ProductResponse, Error> = useQuery({
        queryKey: ['furnitureProduct'],
        queryFn: fetchFurnitureProduct,
        retry: false,
        refetchOnWindowFocus: false,
    });

    return{
        data, isFetching, isError, error
    }

}

export default useFurnitureProductHook
