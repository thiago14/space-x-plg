import axios from 'axios';
import RequestInterface from './interfaces/RequestInterface';

export default class AxiosAdapter implements RequestInterface {
    async request(url: string, method: string = 'get', data: any = null): Promise<any> {
        const response = await axios({
            url,
            method,
            data
        });
        return response.data;
    }

}