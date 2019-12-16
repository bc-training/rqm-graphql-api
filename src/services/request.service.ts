import { Service } from 'typedi';
import requests from './requests.json';
import { GraphQLContext } from '../core/graphql/graphql-context';
import { RqmRequestType, Maybe } from '../model/generated/rqmapi.model.js';

@Service()
export class RqmRequestService {
    private static readonly requestData: RqmRequestType[] = requests.data;

    getRequestByIdAsync(requestId: string, ctx: GraphQLContext): Promise<Maybe<RqmRequestType>> {
        const c = RqmRequestService.requestData.find((value: RqmRequestType) => value.identifier === requestId);
        return Promise.resolve(c ? c : null);
    }

    getAllRequestAsync(ctx: GraphQLContext): Promise<Maybe<Array<RqmRequestType>>> {
        return Promise.resolve(RqmRequestService.requestData);
    }
}
