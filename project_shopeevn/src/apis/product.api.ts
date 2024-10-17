import { Product, ProductList, ProductListConfig } from "../types/product.type";
import { SuccessReponse } from "../types/utils.type";
import http from "../utils/http";

const URL = "products";
const productApi = {
  getProduct(params: ProductListConfig) {
    return http.get<SuccessReponse<ProductList>>(URL, {
      params,
    });
  },
  getProductDetail(id: string) {
    return http.get<SuccessReponse<Product>>(`${URL}/${id}`);
  },
};

export default productApi;
