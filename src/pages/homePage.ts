import { APIClient } from '../utils/apiClient';

export class HomePage {
  private apiClient: APIClient;

  constructor() {
    this.apiClient = new APIClient();
  }

  async getData() {
    const response = await this.apiClient.get('/objects/7');
    return response.json();
  }

  async createObject(data: any) {
    const response = await this.apiClient.post('/objects', data);
    return response.json();
  }

  // Add other methods as needed
}
