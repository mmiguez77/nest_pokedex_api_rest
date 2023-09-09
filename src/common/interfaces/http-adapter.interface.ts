
// definicion de clase 

export interface HttpAdapter {
    get<T>(url: string): Promise<T>;
}