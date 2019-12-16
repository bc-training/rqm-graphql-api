export abstract class GraphQLRoutes {
    static readonly GraphQL = '/rqmapi-graphql/';
    protected constructor() {
        throw new Error(`Abstract ${GraphQLRoutes.name} class cannot be instantiated !`);
    }
}
