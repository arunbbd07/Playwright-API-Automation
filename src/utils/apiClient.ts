import { request, APIRequestContext } from '@playwright/test';
import { config } from '../config/config';
import { logger } from './logger'

export class APIClient {
  private requestContext: Promise<APIRequestContext>

  constructor() {
    this.requestContext = request.newContext({
      baseURL: config.baseURL,
      timeout: config.timeout,
    });
  }

  private async getRequestContext(): Promise<APIRequestContext> {
    return this.requestContext;
  }

  async get(endpoint: string, params?: any) {
    if (typeof params === 'undefined') {
      logger.info(`GET request to ${endpoint}`);
    }
    else {
      logger.info(`GET request to ${endpoint} with params: ${JSON.stringify(params)}`);
    }
    const context = await this.getRequestContext();
    const response = context.get(endpoint, { params });
    //logger.info(`Response: ${((await response).json())}`);
    return response;
  }

  async post(endpoint: string, data: any) {
    logger.info(`POST request to ${endpoint} with data: ${JSON.stringify(data)}`);
    const context = await this.getRequestContext();
    const response = context.post(endpoint, {
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //logger.info(`Response: ${(await response).text()}`);
    return response;
  }

  async put(endpoint: string, data: any) {
    logger.info(`PUT request to ${endpoint} with data: ${JSON.stringify(data)}`);
    const context = await this.getRequestContext();
    const response = context.put(endpoint, {
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //logger.info(`Response: ${(await response).text()}`);
    return response;
  }

  async delete(endpoint: string) {
    logger.info(`DELETE request to ${endpoint}`);
    const context = await this.getRequestContext();
    const response = context.delete(endpoint);
    //logger.info(`Response: ${(await response).text()}`);
    return response;
  }

/*
  async sendRequest(method: string, endpoint: string, dataOrParams?: any) {
    const context1 = request.newContext();
    const options = {
      method: method.toUpperCase(),
      Headers: {
        'Content-Type': 'application/json'
      },
      data: dataOrParams
    };


    const response = await context1.fetch(endpoint,options);
    const responseBody = (await response).body
    return responseBody;
  };
*/
}

