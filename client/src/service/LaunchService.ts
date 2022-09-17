import HttpClient from '../infra/http/HttpClientInterface';
import Launch from '../domain/entity/Launch';
import LaunchServiceInterface from './LaunchServiceInterface';


export default class LaunchService implements LaunchServiceInterface {
    constructor( readonly http: HttpClient, readonly baseUrl: string ) {}

    async getNext(): Promise<Launch> {
        const data = await this.http.request(`${this.baseUrl}/launches/next`, 'get');
        return new Launch(data.id, data.name, data.details, data.date_local);
    }
    async getLast(): Promise<Launch> {
        const data =  await this.http.request(`${this.baseUrl}/launches/last`, 'get');
        return new Launch(data.id, data.name, data.details, data.date_local);
    }
    async getLastList(): Promise<Launch[]> {
        const response =  await this.http.request(`${this.baseUrl}/launches/past`, 'get');
        const launches: Launch[] = [];
        for (const launch of response) {
            launches.push(new Launch(launch.id, launch.name, launch.details, launch.date_local));
        }
        return launches;
    }
    async getNextList(): Promise<Launch[]> {
        const response =  await this.http.request(`${this.baseUrl}/launches/upcoming`, 'get');
        const launches: Launch[] = [];
        for (const launch of response) {
            launches.push(new Launch(launch.id, launch.name, launch.details, launch.date_local));
        }
        return launches;
    }

}