import { PongType, Resolvers, ResolversTypes, QueryRequestArgs, RqmRequestType, Maybe, ResolversParentTypes, RqmRequestTypeResolvers } from '../model/generated/rqmapi.model';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { GraphQLResolveInfo } from 'graphql';
import { RqmRequestService } from '../services/request.service';

export const queryResolvers: Resolvers<GraphQLContext> = {
    Query: {
        pingRqm: async (parent: ResolversTypes['PongType'], args: any, ctx: GraphQLContext, info: GraphQLResolveInfo)
            : Promise<PongType> => {
            return await {
                dateTime: new Date().toISOString(),
                message: 'pong'
            };
        },

        requests: async (parent: ResolversParentTypes['RqmRequestType'], args: any, ctx: GraphQLContext, info: GraphQLResolveInfo)
            : Promise<Maybe<Array<RqmRequestType>>> => {
            return new RqmRequestService().getAllRequestAsync(ctx);
        },

        request: async (parent: ResolversTypes['RqmRequestType'], args: QueryRequestArgs, ctx: GraphQLContext, info: GraphQLResolveInfo)
            : Promise<Maybe<RqmRequestType>> => {
            return new RqmRequestService().getRequestByIdAsync(args.id, ctx);
        }
    }
    // RqmRequestActionItem: {
    //     case: {
    //         __resolveReference( BciCaseType, { bci_identifier }) {
    //             __typename: 'RqmRequestActionItem' } 
    //     }
    // } 
};
