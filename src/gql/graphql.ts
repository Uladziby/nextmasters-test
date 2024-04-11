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
};

export type Book = {
  author: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type BookInput = {
  author: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  products: Array<CategoryProduct>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta?: Maybe<MetaList>;
};

export type CategoryProduct = {
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
};

export type Collection = {
  _id: Scalars['ID']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Image;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type CollectionsList = {
  data: Array<Collection>;
  meta?: Maybe<MetaList>;
};

export type Image = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type MetaList = {
  count: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type Mutation = {
  addBook?: Maybe<Book>;
  createReview: Scalars['String']['output'];
  login?: Maybe<PairsOfTokens>;
  loginOld: User;
  logout: User;
  removeBook?: Maybe<Book>;
  signUp: User;
  updateBook?: Maybe<Book>;
};


export type MutationAddBookArgs = {
  book: BookInput;
};


export type MutationCreateReviewArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  loginData: UserLoginInput;
};


export type MutationLoginOldArgs = {
  loginData: UserLoginInput;
};


export type MutationLogoutArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveBookArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateBookArgs = {
  book: UpdateBookInput;
  id: Scalars['ID']['input'];
};

export type PairsOfTokens = {
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Product = {
  category: ProductCategory;
  collection: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating: Scalars['Float']['output'];
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductCategory = {
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta?: Maybe<MetaList>;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  book?: Maybe<Book>;
  books: Array<Book>;
  categories: CategoryList;
  collection: Collection;
  collectionProducts: ProductList;
  collections: CollectionsList;
  getTokens?: Maybe<PairsOfTokens>;
  product?: Maybe<Product>;
  products: ProductList;
  reviews: Array<Review>;
  users: Array<User>;
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCollectionArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionProductsArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryGetTokensArgs = {
  loginData: UserLoginInput;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryReviewsArgs = {
  id: Scalars['ID']['input'];
};

export type Review = {
  _id: Scalars['String']['output'];
  author: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  rating?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type Subscription = {
  book: Book;
  user: User;
};

export type UpdateBookInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  _id?: Maybe<Scalars['String']['output']>;
  accessToken: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CollectionBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionBySlugQuery = { collection: { _id: string, description: string, id: string, name: string, slug: string, image: { url: string } } };

export type CollectionItemFragment = { _id: string, description: string, id: string, name: string, slug: string, image: { url: string } };

export type CollectionProductsBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionProductsBySlugQuery = { collectionProducts: { data: Array<{ id: string, name: string, description?: string | null, price: number, rating: number, collection: string, category: { name: string, slug: string }, images: Array<{ url: string }> }>, meta?: { total: number } | null } };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: { data: Array<{ _id: string, name: string, description: string, slug: string, image: { url: string, alt: string } }> } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description?: string | null, price: number, rating: number, collection: string, category: { name: string, slug: string }, images: Array<{ url: string }> } | null };

export type ProductCreateReviewMutationVariables = Exact<{
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
}>;


export type ProductCreateReviewMutation = { createReview: string };

export type ProductListItemFragment = { id: string, name: string, description?: string | null, price: number, rating: number, collection: string, category: { name: string, slug: string }, images: Array<{ url: string }> };

export type ProductReviewsByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductReviewsByIdQuery = { reviews: Array<{ author: string, createdAt: string, description: string, _id: string, email: string, rating?: number | null, title: string, updatedAt: string }> };

export type ProductsGetListQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: Scalars['Int']['input'];
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, description?: string | null, price: number, rating: number, collection: string, category: { name: string, slug: string }, images: Array<{ url: string }> }>, meta?: { total: number } | null } };

export type ProductsGetListByQueryQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;


export type ProductsGetListByQueryQuery = { products: { data: Array<{ id: string, name: string, description?: string | null, price: number, rating: number, collection: string, category: { name: string, slug: string }, images: Array<{ url: string }> }>, meta?: { total: number } | null } };

export type ProductsSortByOrderQueryVariables = Exact<{
  orderBy?: ProductSortBy;
  take: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  order?: SortDirection;
}>;


export type ProductsSortByOrderQuery = { products: { data: Array<{ id: string, name: string, description?: string | null, price: number, rating: number, collection: string, category: { name: string, slug: string }, images: Array<{ url: string }> }>, meta?: { total: number } | null } };

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
export const CollectionItemFragmentDoc = new TypedDocumentString(`
    fragment CollectionItem on Collection {
  _id
  description
  id
  image {
    url
  }
  name
  slug
}
    `, {"fragmentName":"CollectionItem"}) as unknown as TypedDocumentString<CollectionItemFragment, unknown>;
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  description
  price
  rating
  collection
  category {
    name
    slug
  }
  images {
    url
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const CollectionBySlugDocument = new TypedDocumentString(`
    query CollectionBySlug($slug: String!) {
  collection(slug: $slug) {
    ...CollectionItem
  }
}
    fragment CollectionItem on Collection {
  _id
  description
  id
  image {
    url
  }
  name
  slug
}`) as unknown as TypedDocumentString<CollectionBySlugQuery, CollectionBySlugQueryVariables>;
export const CollectionProductsBySlugDocument = new TypedDocumentString(`
    query CollectionProductsBySlug($slug: String!) {
  collectionProducts(slug: $slug) {
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
  collection
  category {
    name
    slug
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<CollectionProductsBySlugQuery, CollectionProductsBySlugQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    data {
      _id
      name
      description
      name
      slug
      image {
        url
        alt
      }
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
  collection
  category {
    name
    slug
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductCreateReviewDocument = new TypedDocumentString(`
    mutation ProductCreateReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {
  createReview(
    author: $author
    description: $description
    email: $email
    productId: $productId
    rating: $rating
    title: $title
  )
}
    `) as unknown as TypedDocumentString<ProductCreateReviewMutation, ProductCreateReviewMutationVariables>;
export const ProductReviewsByIdDocument = new TypedDocumentString(`
    query ProductReviewsById($id: ID!) {
  reviews(id: $id) {
    author
    createdAt
    description
    _id
    email
    rating
    title
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<ProductReviewsByIdQuery, ProductReviewsByIdQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($take: Int, $skip: Int! = 0) {
  products(take: $take, skip: $skip) {
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
  collection
  category {
    name
    slug
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByQueryDocument = new TypedDocumentString(`
    query ProductsGetListByQuery($search: String) {
  products(search: $search) {
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
  collection
  category {
    name
    slug
  }
  images {
    url
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
  collection
  category {
    name
    slug
  }
  images {
    url
  }
}`) as unknown as TypedDocumentString<ProductsSortByOrderQuery, ProductsSortByOrderQueryVariables>;