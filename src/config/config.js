import Env from './env';

let config = {
    env: Env,
    dev: {
        proxyTable: {
            // proxy all requests starting with /api to jsonplaceholder
            '/api': {
                target: 'http://rapapi.org/mockjsdata/21170',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
export default config;