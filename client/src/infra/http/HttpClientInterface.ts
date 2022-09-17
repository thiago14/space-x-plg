export default interface HttpClient {
    request(url: string, method?: string, data?: any): Promise<any>;
}