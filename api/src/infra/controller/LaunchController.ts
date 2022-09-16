import Http from '../http/interfaces/HttpInterface';
import LaunchServiceInterface from '../../service/interfaces/LaunchServiceInterface';

export default class LaunchController {
    constructor(
        readonly http: Http,
        readonly launchService: LaunchServiceInterface
    ) {

        http.route('get', '/launches/last', async function() {
            try {
                return await launchService.getLast();
            } catch (error) {
                console.log('error', error);
                return error;
            }
        });

        http.route('get', '/launches/past', async function() {
            try {
                return await launchService.getLastList();
            } catch (error) {
                console.log('error', error);
                return error;
            }
        });

        http.route('get', '/launches/next', async function() {
            try {
                return await launchService.getNext();
            } catch (error) {
                console.log('error', error);
                return error;
            }
        });

        http.route('get', '/launches/upcoming', async function() {
            try {
                return await launchService.getNextList();
            } catch (error) {
                console.log('error', error);
                return error;
            }
        });
    }

}