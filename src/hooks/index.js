import { useGetProductQuery } from "features/productsApi";

export const useProduct = (productId) => {
  const response = useGetProductQuery(productId);
  return response;
};
