import axios from "axios"
import { ProductProps } from "@/types/productInterface";

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