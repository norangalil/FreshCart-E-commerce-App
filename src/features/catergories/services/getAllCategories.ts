import axios from "axios";
import { ApiResponseCategory } from "../types/getAllCategoriesTypes";

export async function getAllCategories(): Promise<ApiResponseCategory> {
  try {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );

    return data;
  } catch (error) {
    console.error("Categories API Error:", error);
    throw error;
  }
}