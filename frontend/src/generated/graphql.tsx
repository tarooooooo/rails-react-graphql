import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Book = {
  __typename?: 'Book';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type BookAttributes = {
  title: Scalars['String'];
};

/** Autogenerated input type of CreateBook */
export type CreateBookInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  params: BookAttributes;
};

/** Autogenerated return type of CreateBook */
export type CreateBookPayload = {
  __typename?: 'CreateBookPayload';
  book: Book;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

/** Autogenerated input type of DeleteBook */
export type DeleteBookInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

/** Autogenerated return type of DeleteBook */
export type DeleteBookPayload = {
  __typename?: 'DeleteBookPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<CreateBookPayload>;
  deleteBook?: Maybe<DeleteBookPayload>;
  updateBook?: Maybe<UpdateBookPayload>;
};


export type MutationCreateBookArgs = {
  input: CreateBookInput;
};


export type MutationDeleteBookArgs = {
  input: DeleteBookInput;
};


export type MutationUpdateBookArgs = {
  input: UpdateBookInput;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: Array<Book>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};

/** Autogenerated input type of UpdateBook */
export type UpdateBookInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  params?: InputMaybe<BookAttributes>;
};

/** Autogenerated return type of UpdateBook */
export type UpdateBookPayload = {
  __typename?: 'UpdateBookPayload';
  book: Book;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBookMutationVariables = Exact<{
  params: BookAttributes;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook?: { __typename?: 'CreateBookPayload', book: { __typename?: 'Book', id: string, title?: string | null } } | null };

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteBookMutation = { __typename?: 'Mutation', deleteBook?: { __typename?: 'DeleteBookPayload', id: string } | null };

export type UpdateBookMutationVariables = Exact<{
  id: Scalars['ID'];
  params: BookAttributes;
}>;


export type UpdateBookMutation = { __typename?: 'Mutation', updateBook?: { __typename?: 'UpdateBookPayload', book: { __typename?: 'Book', id: string, title?: string | null } } | null };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title?: string | null }> };


export const CreateBookDocument = gql`
    mutation createBook($params: BookAttributes!) {
  createBook(input: {params: $params}) {
    book {
      id
      title
    }
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const DeleteBookDocument = gql`
    mutation deleteBook($id: ID!) {
  deleteBook(input: {id: $id}) {
    id
  }
}
    `;
export type DeleteBookMutationFn = Apollo.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, options);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;
export const UpdateBookDocument = gql`
    mutation updateBook($id: ID!, $params: BookAttributes!) {
  updateBook(input: {id: $id, params: $params}) {
    book {
      id
      title
    }
  }
}
    `;
export type UpdateBookMutationFn = Apollo.MutationFunction<UpdateBookMutation, UpdateBookMutationVariables>;

/**
 * __useUpdateBookMutation__
 *
 * To run a mutation, you first call `useUpdateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookMutation, { data, loading, error }] = useUpdateBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useUpdateBookMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookMutation, UpdateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookMutation, UpdateBookMutationVariables>(UpdateBookDocument, options);
      }
export type UpdateBookMutationHookResult = ReturnType<typeof useUpdateBookMutation>;
export type UpdateBookMutationResult = Apollo.MutationResult<UpdateBookMutation>;
export type UpdateBookMutationOptions = Apollo.BaseMutationOptions<UpdateBookMutation, UpdateBookMutationVariables>;
export const BooksDocument = gql`
    query books {
  books {
    id
    title
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;