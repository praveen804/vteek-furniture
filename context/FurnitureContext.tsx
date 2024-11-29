import { createContext, useContext,useState } from "react";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchFurnitureProduct } from "@/utils/api/proudctApi";
import {ProductsParams,ProductResponse,ProductContextType} from '@/utils/types/productInterface'


export const FurnitureContext = createContext({} as ProductContextType);



export const FurnitureProvider = ({children}:{children:React.ReactNode}) => {

    const [filters, setFilters] = useState<ProductsParams>({});

    const {data,isFetching, isError,error}:UseQueryResult<ProductResponse>=useQuery({
        queryKey: ["Product", filters],
        queryFn: () => fetchFurnitureProduct(filters),
        staleTime: 0,
        

    })

    const handleFilterChange = (key: keyof ProductsParams, value: string |number | string[]) => {
        setFilters({ ...filters, [key]: value });
    };

    const resetFilters = () => {
        setFilters({});
    };

    return (
        <FurnitureContext.Provider value={{data,isFetching,isError,error ,filters, handleFilterChange,resetFilters}}>
            {children}
        </FurnitureContext.Provider>
    );
};


export const useGlobalFurnitureContext=()=>{
    const context=useContext(FurnitureContext);
    if(!context){
        throw new Error("useGlobalContext must be used within a FurnitureProvider");
    }
    return context
}