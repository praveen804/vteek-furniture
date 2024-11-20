import axios from "axios"
import { ProductProps ,ProductResponse} from "@/types/productInterface";

export const fetchProduct = async () => {
    try {
        const response = await axios.get<ProductProps[]| null > (`${process.env.NEXT_PUBLIC_BASE_URL}/house/getAllHouse`);
        if(!response){
            throw new Error('Failed to fetch products');
        }
        return response.data

    } catch (error) {
    console.log("🚀 ~ file: productcrud.ts:9 ~ error:", error);
    return null

    }

}



export const fetchFurnitureProduct = async () => {
    try {
        const response = await axios.get<ProductResponse[]| null > (`${process.env.NEXT_PUBLIC_BASE_URL}/furniture/products`);
        if(!response){
            throw new Error('Failed to fetch products');
        }
        return response.data

    } catch (error) {
    console.log("🚀 ~ file: product crud.ts:31 ~ error:", error);

    }
}

export const fetchFurnitureSingleProduct= async(id:string)=>{

    try {
        const response = await axios.get<ProductResponse| null > (`${process.env.NEXT_PUBLIC_BASE_URL}/furniture/products/${id}`);
        if(!response){
            throw new Error('Failed to fetch products');
        }
        return response.data

    } catch (error) {
    console.log("🚀 ~ file: product crud.ts:46 ~ error:", error);

    }

}