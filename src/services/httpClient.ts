import axios from 'axios'

export class HttpClient {
    private instance = axios;

    async get(url: string) {
        try {
            return await this.instance.get(url)
        } catch (error) {
            throw error
        }
    }

    async post(url: string, data?: any) {
        try {
            return await this.instance.post(url, data)
        } catch (error) {
            throw error
        }
    }
}