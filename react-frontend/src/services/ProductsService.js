import axios from 'axios';

const ALL_CATEGORIES_API_BASE_URL = 'http://ascend-pgp-team2.eastus.cloudapp.azure.com:8765/products/categorylist';
const PRODUCT_FOR_SELECTED_CATEGORY_API_BASE_URL = 'http://ascend-pgp-team2.eastus.cloudapp.azure.com:8765/products/category/';
const All_PRODUCTS_API_BASE_URL = 'http://ascend-pgp-team2.eastus.cloudapp.azure.com:8765/products/allProducts';
const PRODUCT_FOR_SEARCH_STRING_API_BASE_URL = 'http://ascend-pgp-team2.eastus.cloudapp.azure.com:8765/products/searchProductsByTitleNameOrShortDesc/';

class ProductsService {

    getCategoriesAll() {
        return axios.get(ALL_CATEGORIES_API_BASE_URL);
    }

    getProducts() {
        return axios.get(All_PRODUCTS_API_BASE_URL);
    }

    getProductsForSelectedCategory(selectedCategory) {
        return axios.get(PRODUCT_FOR_SELECTED_CATEGORY_API_BASE_URL + selectedCategory);
    }

    getProductsForSearchString(searchString) {
        return axios.get(PRODUCT_FOR_SEARCH_STRING_API_BASE_URL + searchString);
    }
}

export default new ProductsService();
