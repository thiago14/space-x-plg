import axios from 'axios';
import HttpClient from './HttpClientInterface';

export default class AxiosAdapter implements HttpClient {
    async request(url: string, method: string = 'get', data: any = null): Promise<any> {
        const response = await axios({
            url,
            method,
            data
        });
        return response.data;
    }
}