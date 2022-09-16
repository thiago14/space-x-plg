export default interface RequestInterface {
    request(url: string, method?: string, data?: any): Promise<any>;
}