import LaunchController from './infra/controller/LaunchController';
import ExpressAdapter from './infra/http/ExpressAdapter';
import LaunchService from './service/LaunchService';
import AxiosAdapter from './infra/http/AxiosAdapter';

const request = new AxiosAdapter();
const http = new ExpressAdapter();
const launchService = new LaunchService(request);
new LaunchController(http, launchService);

http.listen(3000);
