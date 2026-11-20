import axios from "axios";
import {  CategoryResponse } from "../types/getAllCategoriesTypes";

export async function getSpecificCategory(id:string): Promise<CategoryResponse> {
  try {
    const { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/categories/${id}`
    );

    return data;
  } catch (error) {
    console.error("Categories API Error:", error);
    throw error;
  }
}