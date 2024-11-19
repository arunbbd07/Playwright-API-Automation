import * as dotenv from 'dotenv'

dotenv.config();

export const config = {
  baseURL: process.env.BASE_URL || 'https://api.restful-api.dev',
  timeout: parseInt(process.env.TIMEOUT || '30000')
};
  