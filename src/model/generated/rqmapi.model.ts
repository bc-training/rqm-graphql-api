import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLContext } from '../../core/graphql/graphql-context';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
};


export type PongType = {
   __typename?: 'PongType',
  dateTime: Scalars['Date'],
  message: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  /** Ping the running µService and get pong data back */
  pingRqm?: Maybe<PongType>,
  requests?: Maybe<Array<Maybe<RqmRequestType>>>,
  request?: Maybe<RqmRequestType>,
};


export type QueryRequestArgs = {
  id: Scalars['String']
};

export type RqmContactReasonType = {
   __typename?: 'RqmContactReasonType',
  domain?: Maybe<Scalars['String']>,
  productType?: Maybe<Scalars['String']>,
  contactReasonCode: Scalars['String'],
};

export type RqmRequestActionItem = {
   __typename?: 'RqmRequestActionItem',
  bci_identifier: Scalars['ID'],
};

export type RqmRequestRoleType = {
   __typename?: 'RqmRequestRoleType',
  type: Scalars['String'],
  identifier: Scalars['String'],
  name: Scalars['String'],
};

export type RqmRequestType = {
   __typename?: 'RqmRequestType',
  identifier: Scalars['ID'],
  title?: Maybe<Scalars['String']>,
  type: Scalars['String'],
  serviceLevel?: Maybe<RqmServiceLevelType>,
  contactReason?: Maybe<RqmContactReasonType>,
  requestorLanguage?: Maybe<Scalars['String']>,
  estimatedResolutionDate: Scalars['Date'],
  numberOfTimesReopened?: Maybe<Scalars['Int']>,
  role: Array<RqmRequestRoleType>,
  internalStatus?: Maybe<Scalars['String']>,
  externalStatus?: Maybe<Scalars['String']>,
  requestorDescription?: Maybe<Scalars['String']>,
  creationDate: Scalars['Date'],
  action?: Maybe<Array<Maybe<RqmRequestActionItem>>>,
};

export type RqmServiceLevelType = {
   __typename?: 'RqmServiceLevelType',
  value: Scalars['String'],
  description?: Maybe<Scalars['String']>,
};



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  PongType: ResolverTypeWrapper<any>,
  Date: ResolverTypeWrapper<any>,
  String: ResolverTypeWrapper<any>,
  RqmRequestType: ResolverTypeWrapper<any>,
  ID: ResolverTypeWrapper<any>,
  RqmServiceLevelType: ResolverTypeWrapper<any>,
  RqmContactReasonType: ResolverTypeWrapper<any>,
  Int: ResolverTypeWrapper<any>,
  RqmRequestRoleType: ResolverTypeWrapper<any>,
  RqmRequestActionItem: ResolverTypeWrapper<any>,
  Boolean: ResolverTypeWrapper<any>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  PongType: any,
  Date: any,
  String: any,
  RqmRequestType: any,
  ID: any,
  RqmServiceLevelType: any,
  RqmContactReasonType: any,
  Int: any,
  RqmRequestRoleType: any,
  RqmRequestActionItem: any,
  Boolean: any,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type PongTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['PongType'] = ResolversParentTypes['PongType']> = {
  dateTime?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pingRqm?: Resolver<Maybe<ResolversTypes['PongType']>, ParentType, ContextType>,
  requests?: Resolver<Maybe<Array<Maybe<ResolversTypes['RqmRequestType']>>>, ParentType, ContextType>,
  request?: Resolver<Maybe<ResolversTypes['RqmRequestType']>, ParentType, ContextType, RequireFields<QueryRequestArgs, 'id'>>,
};

export type RqmContactReasonTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['RqmContactReasonType'] = ResolversParentTypes['RqmContactReasonType']> = {
  domain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  productType?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  contactReasonCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type RqmRequestActionItemResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['RqmRequestActionItem'] = ResolversParentTypes['RqmRequestActionItem']> = {
  bci_identifier?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
};

export type RqmRequestRoleTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['RqmRequestRoleType'] = ResolversParentTypes['RqmRequestRoleType']> = {
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  identifier?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
};

export type RqmRequestTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['RqmRequestType'] = ResolversParentTypes['RqmRequestType']> = {
  identifier?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  serviceLevel?: Resolver<Maybe<ResolversTypes['RqmServiceLevelType']>, ParentType, ContextType>,
  contactReason?: Resolver<Maybe<ResolversTypes['RqmContactReasonType']>, ParentType, ContextType>,
  requestorLanguage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  estimatedResolutionDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  numberOfTimesReopened?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  role?: Resolver<Array<ResolversTypes['RqmRequestRoleType']>, ParentType, ContextType>,
  internalStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  externalStatus?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  requestorDescription?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  creationDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  action?: Resolver<Maybe<Array<Maybe<ResolversTypes['RqmRequestActionItem']>>>, ParentType, ContextType>,
};

export type RqmServiceLevelTypeResolvers<ContextType = GraphQLContext, ParentType extends ResolversParentTypes['RqmServiceLevelType'] = ResolversParentTypes['RqmServiceLevelType']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = GraphQLContext> = {
  Date?: GraphQLScalarType,
  PongType?: PongTypeResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  RqmContactReasonType?: RqmContactReasonTypeResolvers<ContextType>,
  RqmRequestActionItem?: RqmRequestActionItemResolvers<ContextType>,
  RqmRequestRoleType?: RqmRequestRoleTypeResolvers<ContextType>,
  RqmRequestType?: RqmRequestTypeResolvers<ContextType>,
  RqmServiceLevelType?: RqmServiceLevelTypeResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = GraphQLContext> = Resolvers<ContextType>;
