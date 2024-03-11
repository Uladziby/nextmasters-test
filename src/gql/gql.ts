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
    "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartFindOrCreate($id: ID!, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n    items {\n      quantity\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.CartFindOrCreateDocument,
    "fragment Cart on Cart {\n  id\n  items {\n    product {\n      ...ProductListItem\n    }\n    quantity\n  }\n}": types.CartFragmentDoc,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n    items {\n      product {\n        id\n        name\n      }\n    }\n  }\n}": types.CartRemoveItemDocument,
    "mutation ChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      product {\n        name\n      }\n    }\n  }\n}": types.ChangeItemQuantityDocument,
    "query CollectionProducts($slug: String, $id: ID!) {\n  collection(slug: $slug, id: $id) {\n    id\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionProductsDocument,
    "query CollectionsGetList {\n  collections {\n    data {\n      description\n      id\n      name\n      slug\n    }\n  }\n}": types.CollectionsGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductListItem\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  price\n  categories {\n    name\n  }\n  images {\n    url\n    alt\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsByCategory($slug: String!) {\n  category(slug: $slug) {\n    id\n    slug\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.ProductsByCategoryDocument,
    "query ProdutctsGetList($take: Int, $skip: Int! = 0) {\n  products(take: $take, skip: $skip) {\n    data {\n      ...ProductListItem\n      categories {\n        id\n        name\n      }\n    }\n  }\n}": types.ProdutctsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($id: ID!, $input: MutationCartAddItemInput!) {\n  cartAddItem(id: $id, input: $input) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID!, $input: MutationCartFindOrCreateInput!) {\n  cartFindOrCreate(id: $id, input: $input) {\n    id\n    items {\n      quantity\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    product {\n      ...ProductListItem\n    }\n    quantity\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    id\n    items {\n      quantity\n      product {\n        id\n        name\n        price\n        images {\n          url\n          alt\n        }\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    id\n    items {\n      product {\n        id\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n    items {\n      product {\n        name\n      }\n    }\n  }\n}"): typeof import('./graphql').ChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionProducts($slug: String, $id: ID!) {\n  collection(slug: $slug, id: $id) {\n    id\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionProductsDocument;
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
