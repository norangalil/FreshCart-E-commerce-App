export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string; 
  updatedAt: string;
  __v?: number 
}
export interface CategoryResponse {
  data: CategoryType;
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}

export interface ApiResponseCategory {
  results: number;
  metadata: Metadata;
  data: CategoryType[];
}

