export class WooCommerceGraphQL {
  private endpoint: string;
  private headers: Record<string, string>;

  constructor(endpoint: string, headers: Record<string, string> = {}) {
    this.endpoint = endpoint;
    this.headers = {
      'Content-Type': 'application/json',
      ...headers,
    };
  }

  private async request<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
    try {
      const response = await fetch(this.endpoint, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          query,
          variables,
        }),
      });
 
      const result = await response.json();

      if (result.errors) {
        throw new Error(`GraphQL Error: ${JSON.stringify(result.errors)}`);
      }

      return result.data;
    } catch (error) {
      console.error('GraphQL request error:', error);
      throw error;
    }
  }

  // GraphQL Queries
  private static PRODUCT_FRAGMENT = `
    fragment ProductFragment on Product {
      id
      databaseId
      name
      slug
      description
      shortDescription
      sku
      price
      regularPrice
      salePrice
      onSale
      featured
      status
      stockStatus
      stockQuantity
      averageRating
      reviewCount
      dateOnSaleFrom
      dateOnSaleTo
      image {
        id
        sourceUrl
        altText
        title
      }
      galleryImages {
        nodes {
          id
          sourceUrl
          altText
          title
        }
      }
      productCategories {
        nodes {
          id
          name
          slug
        }
      }
      productTags {
        nodes {
          id
          name
          slug
        }
      }
      attributes {
        nodes {
          id
          name
          options
        }
      }
    }
  `;

  // Lấy danh sách sản phẩm
  async getProducts(args: {
    first?: number;
    after?: string;
    where?: Record<string, any>;
  } = {}): Promise<any> {
    const query = `
      query GetProducts($first: Int, $after: String, $where: RootQueryToProductConnectionWhereArgs) {
        products(first: $first, after: $after, where: $where) {
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          nodes {
            ...ProductFragment
          }
        }
      }
      ${WooCommerceGraphQL.PRODUCT_FRAGMENT}
    `;

    return this.request(query, args);
  }

  // Lấy sản phẩm theo ID
  async getProductById(id: string): Promise<any> {
    const query = `
      query GetProduct($id: ID!) {
        product(id: $id, idType: DATABASE_ID) {
          ...ProductFragment
        }
      }
      ${WooCommerceGraphQL.PRODUCT_FRAGMENT}
    `;

    return this.request(query, { id });
  }

  // Lấy sản phẩm theo slug
  async getProductBySlug(slug: string): Promise<any> {
    const query = `
      query GetProductBySlug($slug: ID!) {
        product(id: $slug, idType: SLUG) {
          ...ProductFragment
        }
      }
      ${WooCommerceGraphQL.PRODUCT_FRAGMENT}
    `;

    return this.request(query, { slug });
  }

  // Tìm kiếm sản phẩm
  async searchProducts(search: string, first = 10): Promise<any> {
    return this.getProducts({
      first,
      where: { search },
    });
  }

  // Lấy sản phẩm nổi bật
  async getFeaturedProducts(first = 10): Promise<any> {
    return this.getProducts({
      first,
      where: { featured: true },
    });
  }

  // Lấy sản phẩm sale
  async getSaleProducts(first = 10): Promise<any> {
    return this.getProducts({
      first,
      where: { onSale: true },
    });
  }

  // Lấy sản phẩm theo danh mục
  async getProductsByCategory(categoryId: string, first = 10): Promise<any> {
    return this.getProducts({
      first,
      where: { categoryId },
    });
  }
}

