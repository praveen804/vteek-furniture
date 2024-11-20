'use client'
import { fetchFurnitureSingleProduct } from "@/utils/productcrud"
import {SingleProductResponse} from '@/types/productInterface'
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useFurnitureSingeProductHook = (id:string) => {
    const {data,isError,isFetching,error}:UseQueryResult<SingleProductResponse,Error> = useQuery({
      queryKey: ["furnitureSingleProduct", id],
      queryFn: () => fetchFurnitureSingleProduct(id),
    });

    return{
        data,isError,isFetching,error
    }

}

export default useFurnitureSingeProductHook
