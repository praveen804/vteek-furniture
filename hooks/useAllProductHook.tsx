'use client';

import { fetchProduct } from "@/utils/productcrud";
import { useQuery,UseQueryResult } from "@tanstack/react-query";
import {ProductProps} from '@/types/productInterface'



export const useAllProductHook = () => {

    const {data,isError,error,isFetching}:UseQueryResult<ProductProps[] ,Error>=useQuery({queryKey: ['product'],queryFn: fetchProduct });

        return{
            data, isError, error, isFetching
        }

}