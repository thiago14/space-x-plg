import Launch from '../../domain/entity/Launch';

export default interface LaunchServiceInterface {
    getNext(): Promise<Launch>;
    getLast(): Promise<Launch>;
    getLastList(): Promise<Launch[]>;
    getNextList(): Promise<Launch[]>;
}