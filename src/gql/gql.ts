/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CollectionsGetList {\n  collections {\n    data {\n      _id\n      name\n      description\n      name\n      slug\n      image {\n        url\n        alt\n      }\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "mutation ProductCreateReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  createReview(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  )\n}": types.ProductCreateReviewDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  rating\n  category {\n    name\n    slug\n  }\n  images {\n    url\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductReviewsById($id: ID!) {\n  reviews(id: $id) {\n    author\n    createdAt\n    description\n    _id\n    email\n    rating\n    title\n    updatedAt\n  }\n}": types.ProductReviewsByIdDocument,
    "query ProductsGetList($take: Int, $skip: Int! = 0) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByQuery($search: String) {\n  products(search: $search) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListByQueryDocument,
    "query ProductsSortByOrder($orderBy: ProductSortBy! = DEFAULT, $take: Int!, $skip: Int!, $order: SortDirection! = ASC) {\n  products(orderBy: $orderBy, take: $take, skip: $skip, order: $order) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsSortByOrderDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      _id\n      name\n      description\n      name\n      slug\n      image {\n        url\n        alt\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductCreateReview($author: String!, $description: String!, $email: String!, $productId: ID!, $rating: Int!, $title: String!) {\n  createReview(\n    author: $author\n    description: $description\n    email: $email\n    productId: $productId\n    rating: $rating\n    title: $title\n  )\n}"): typeof import('./graphql').ProductCreateReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  rating\n  category {\n    name\n    slug\n  }\n  images {\n    url\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductReviewsById($id: ID!) {\n  reviews(id: $id) {\n    author\n    createdAt\n    description\n    _id\n    email\n    rating\n    title\n    updatedAt\n  }\n}"): typeof import('./graphql').ProductReviewsByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int, $skip: Int! = 0) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByQuery($search: String) {\n  products(search: $search) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsSortByOrder($orderBy: ProductSortBy! = DEFAULT, $take: Int!, $skip: Int!, $order: SortDirection! = ASC) {\n  products(orderBy: $orderBy, take: $take, skip: $skip, order: $order) {\n    data {\n      ...ProductListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsSortByOrderDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
