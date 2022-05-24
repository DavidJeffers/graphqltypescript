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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Message = {
  __typename?: 'Message';
  body: Scalars['String'];
  id: Scalars['ID'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createMessage: Message;
  createUser: User;
  deleteMessage: Message;
};


export type MutationCreateMessageArgs = {
  body: Scalars['String'];
  username: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  username: Scalars['ID'];
};


export type MutationDeleteMessageArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  message: Message;
  messages: Array<Message>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryMessageArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  username: Scalars['ID'];
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
  messageAdded?: Maybe<Message>;
};


export type SubscriptionMessageAddedArgs = {
  username: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  messages?: Maybe<Array<Message>>;
  username: Scalars['ID'];
};

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', username: string }> | null };

export type GetUserMessagesQueryVariables = Exact<{
  username: Scalars['ID'];
}>;


export type GetUserMessagesQuery = { __typename?: 'Query', user?: { __typename?: 'User', messages?: Array<{ __typename?: 'Message', body: string }> | null } | null };

export type AddUserMutationVariables = Exact<{
  username: Scalars['ID'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
}>;


export type AddUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', username: string, first_name: string, last_name: string } };

export type AddMessageMutationVariables = Exact<{
  username: Scalars['ID'];
  body: Scalars['String'];
}>;


export type AddMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', body: string, user: { __typename?: 'User', username: string } } };


export const AllUsersDocument = gql`
    query AllUsers {
  users {
    username
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const GetUserMessagesDocument = gql`
    query GetUserMessages($username: ID!) {
  user(username: $username) {
    messages {
      body
    }
  }
}
    `;

/**
 * __useGetUserMessagesQuery__
 *
 * To run a query within a React component, call `useGetUserMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserMessagesQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetUserMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetUserMessagesQuery, GetUserMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserMessagesQuery, GetUserMessagesQueryVariables>(GetUserMessagesDocument, options);
      }
export function useGetUserMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserMessagesQuery, GetUserMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserMessagesQuery, GetUserMessagesQueryVariables>(GetUserMessagesDocument, options);
        }
export type GetUserMessagesQueryHookResult = ReturnType<typeof useGetUserMessagesQuery>;
export type GetUserMessagesLazyQueryHookResult = ReturnType<typeof useGetUserMessagesLazyQuery>;
export type GetUserMessagesQueryResult = Apollo.QueryResult<GetUserMessagesQuery, GetUserMessagesQueryVariables>;
export const AddUserDocument = gql`
    mutation AddUser($username: ID!, $first_name: String!, $last_name: String!) {
  createUser(username: $username, first_name: $first_name, last_name: $last_name) {
    username
    first_name
    last_name
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const AddMessageDocument = gql`
    mutation AddMessage($username: ID!, $body: String!) {
  createMessage(username: $username, body: $body) {
    user {
      username
    }
    body
  }
}
    `;
export type AddMessageMutationFn = Apollo.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;

/**
 * __useAddMessageMutation__
 *
 * To run a mutation, you first call `useAddMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMessageMutation, { data, loading, error }] = useAddMessageMutation({
 *   variables: {
 *      username: // value for 'username'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddMessageMutation, AddMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddMessageMutation, AddMessageMutationVariables>(AddMessageDocument, options);
      }
export type AddMessageMutationHookResult = ReturnType<typeof useAddMessageMutation>;
export type AddMessageMutationResult = Apollo.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;