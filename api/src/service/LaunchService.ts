import Launch from '../domain/entity/Launch';
import LaunchServiceInterface from './interfaces/LaunchServiceInterface';
import RequestInterface from '../infra/http/interfaces/RequestInterface';

const baseURL = 'https://api.spacexdata.com/v4';

export default class LaunchService implements LaunchServiceInterface {

    constructor(readonly http: RequestInterface) {}

    async getNext(): Promise<Launch> {
        const launch  = await this.http.request(`${baseURL}/launches/next`);
        return new Launch(launch.id, launch.name, launch.details, launch.date_local);
    }

    async getLast(): Promise<Launch> {
        const launch  = await this.http.request(`${baseURL}/launches/latest`);
        return new Launch(launch.id, launch.name, launch.details, launch.date_local);
    }

    async getLastList(): Promise<Launch[]> {
        const response  = await this.http.request(`${baseURL}/launches/past`);
        const launches: Launch[] = [];
        for (const launch of response) {
            launches.push(new Launch(launch.id, launch.name, launch.details, launch.date_local));
        }
        return launches;
    }

    async getNextList(): Promise<Launch[]> {
        const response  = await this.http.request(`${baseURL}/launches/upcoming`);
        const launches: Launch[] = [];
        for (const launch of response) {
            launches.push(new Launch(launch.id, launch.name, launch.details, launch.date_local));
        }
        return launches;
    }

}
