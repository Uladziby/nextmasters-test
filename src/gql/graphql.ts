/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartAddItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
}>;


export type CartAddItemMutation = { cartAddItem: { id: string } };

export type CartFindOrCreateMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  input: MutationCartFindOrCreateInput;
}>;


export type CartFindOrCreateMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string }> } }> } };

export type CartFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string }> } }> };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string, alt: string }> } }> } | null };

export type CartRemoveItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { cartRemoveItem: { id: string, items: Array<{ product: { id: string, name: string } }> } };

export type CategoriestGetItemsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoriestGetItemsQuery = { categories: { data: Array<{ description: string, id: string, name: string, slug: string }> } };

export type ChangeItemQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type ChangeItemQuantityMutation = { cartChangeItemQuantity: { id: string, items: Array<{ product: { name: string } }> } };

export type CollectionProductsQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
}>;


export type CollectionProductsQuery = { collection?: { id: string, name: string, products: Array<{ id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string }> }> } | null };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: { data: Array<{ description: string, id: string, name: string, slug: string }> } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string }> } | null };

export type ProductCreateReviewMutationVariables = Exact<{
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ProductCreateReviewMutation = { reviewCreate: { id: string } };

export type ProductListItemFragment = { id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string }> };

export type ProductReviewsByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductReviewsByIdQuery = { product?: { reviews: Array<{ author: string, createdAt: unknown, description: string, email: string, id: string, rating: number, title: string, updatedAt: unknown }> } | null };

export type ProductsByCategoryQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type ProductsByCategoryQuery = { category?: { id: string, slug: string, name: string, products: Array<{ id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string }> }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: Scalars['Int']['input'];
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export type ProductsGetListByQueryQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListByQueryQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ id: string, name: string }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export type ProductsSortByOrderQueryVariables = Exact<{
  orderBy?: ProductSortBy;
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  order?: SortDirection;
}>;


export type ProductsSortByOrderQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string, alt: string }> }>, meta: { total: number } } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    product {
      ...ProductListItem
    }
    quantity
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {
  cartAddItem(id: $id, input: $input) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID!, $input: MutationCartFindOrCreateInput!) {
  cartFindOrCreate(id: $id, input: $input) {
    id
    items {
      quantity
      product {
        ...ProductListItem
      }
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    id
    items {
      quantity
      product {
        id
        name
        price
        images {
          url
          alt
        }
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($id: ID!, $productId: ID!) {
  cartRemoveItem(id: $id, productId: $productId) {
    id
    items {
      product {
        id
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CategoriestGetItemsDocument = new TypedDocumentString(`
    query CategoriestGetItems($take: Int, $skip: Int) {
  categories(take: $take, skip: $skip) {
    data {
      description
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriestGetItemsQuery, CategoriestGetItemsQueryVariables>;
export const ChangeItemQuantityDocument = new TypedDocumentString(`
    mutation ChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    id
    items {
      product {
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ChangeItemQuantityMutation, ChangeItemQuantityMutationVariables>;
export const CollectionProductsDocument = new TypedDocumentString(`
    query CollectionProducts($slug: String, $id: ID!) {
  collection(slug: $slug, id: $id) {
    id
    name
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`) as unknown as TypedDocumentString<CollectionProductsQuery, CollectionProductsQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    data {
      description
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductListItem
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductCreateReviewDocument = new TypedDocumentString(`
    mutation ProductCreateReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  reviewCreate(
    author: $author
    description: $description
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ProductCreateReviewMutation, ProductCreateReviewMutationVariables>;
export const ProductReviewsByIdDocument = new TypedDocumentString(`
    query ProductReviewsById($id: ID!) {
  product(id: $id) {
    reviews {
      author
      createdAt
      description
      email
      id
      rating
      title
      updatedAt
    }
  }
}
    `) as unknown as TypedDocumentString<ProductReviewsByIdQuery, ProductReviewsByIdQueryVariables>;
export const ProductsByCategoryDocument = new TypedDocumentString(`
    query ProductsByCategory($slug: String!) {
  category(slug: $slug) {
    id
    slug
    name
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`) as unknown as TypedDocumentString<ProductsByCategoryQuery, ProductsByCategoryQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int! = 0) {
  products(take: $take, skip: $skip) {
    data {
      ...ProductListItem
      categories {
        id
        name
      }
    }
    meta {
      total
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByQueryDocument = new TypedDocumentString(`
    query ProductsGetListByQuery($search: String) {
  products(search: $search) {
    data {
      ...ProductListItem
      categories {
        id
        name
      }
    }
    meta {
      total
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`) as unknown as TypedDocumentString<ProductsGetListByQueryQuery, ProductsGetListByQueryQueryVariables>;
export const ProductsSortByOrderDocument = new TypedDocumentString(`
    query ProductsSortByOrder($orderBy: ProductSortBy! = DEFAULT, $take: Int!, $skip: Int!, $order: SortDirection! = ASC) {
  products(orderBy: $orderBy, take: $take, skip: $skip, order: $order) {
    data {
      ...ProductListItem
    }
    meta {
      total
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  categories {
    name
  }
  images {
    url
    alt
  }
}`) as unknown as TypedDocumentString<ProductsSortByOrderQuery, ProductsSortByOrderQueryVariables>;