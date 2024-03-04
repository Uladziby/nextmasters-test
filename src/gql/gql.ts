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
    "query CollectionProducts($slug: String, $id: ID) {\n  collection(slug: $slug, id: $id) {\n    id\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionProductsDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      description\n      id\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  categories {\n    name\n  }\n  images {\n    url\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsByCategory($slug: String!) {\n  category(slug: $slug) {\n    id\n    slug\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsByCategoryDocument,
    "query ProdutctsGetList($take: Int, $skip: Int! = 0) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n      categories {\n        id\n        name\n      }\n    }\n  }\n}": types.ProdutctsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionProducts($slug: String, $id: ID) {\n  collection(slug: $slug, id: $id) {\n    id\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    data {\n      description\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  categories {\n    name\n  }\n  images {\n    url\n    alt\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsByCategory($slug: String!) {\n  category(slug: $slug) {\n    id\n    slug\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').ProductsByCategoryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProdutctsGetList($take: Int, $skip: Int! = 0) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n      categories {\n        id\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ProdutctsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
