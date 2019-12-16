import 'reflect-metadata';
import { Container } from 'typedi';
import { Server } from './core/graphql/server';
import { Configuration } from './core/config/configuration';

export const startMsg = () => console.log('GRAPHQL-RQM-API is started...');

(async () => {
    startMsg();
    const server = Container.get(Server);
    const config: Configuration = {
        express: {
            bodyLimit: '100kb'
        },
        graphql: {
            port: 4500
        }
    };
    server.configuration = config;
    await server.startAsync();
})();
