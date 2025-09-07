import { WooCommerceRestAPI } from './apiWoo';
import { WooCommerceProduct, ProductFilters } from "@/types/types";
import { FaRProject } from 'react-icons/fa6';
export class FetchWooCommerceData {
  private restAPI: WooCommerceRestAPI;

  constructor() {
    // Cấu hình REST API
    this.restAPI = new WooCommerceRestAPI({
      baseUrl: 'https://camhieplong.com',
      consumerKey: 'ck_bea2a691ba03f103297359c45c604018f01ec52f',
      consumerSecret: 'cs_3980d0d97eed1afaa1dcae1fb422ed2966ca8997',
      version: 'wc/v3'
    });
  }

  // ✅ Sửa lại để return data thay vì void
  async fetchProducts(filters?: ProductFilters): Promise<WooCommerceProduct[]> {
    try {
      console.log('🚀 Fetching products with REST API...');

      // Lấy tất cả sản phẩm
      const allProducts = await this.restAPI.getProducts(filters || {});
      console.log('✅ All products:', allProducts.length);
      
      return allProducts; // ✅ Return data
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // ✅ Throw error để component có thể catch
    }
  }

  // ✅ Thêm method để fetch single product
  async fetchProductById(id: number): Promise<WooCommerceProduct> {
    try {
      console.log(`🚀 Fetching product with ID: ${id}`);
      
      const product = await this.restAPI.getProductById(id);
      console.log('✅ Product fetched:', product.name);
      
      return product;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      throw error;
    }
  }

  // ✅ Thêm method để fetch products by category
  async fetchProductsByCategory(categoryId: number, limit = 10): Promise<WooCommerceProduct[]> {
    try {
      console.log(`🚀 Fetching products from category: ${categoryId}`);
      
      const products = await this.restAPI.getProductsByCategory(categoryId, limit);
      console.log('✅ Category products:', products.length);
      
      return products;
    } catch (error) {
      console.error(`Error fetching products from category ${categoryId}:`, error);
      throw error;
    }
  }
}