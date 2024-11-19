import axios from 'axios';
import * as fs from 'fs';


/**
 * Converts a Map to a plain JavaScript object.
 * @param map - The Map to convert.
 * @returns A plain JavaScript object with the same key-value pairs as the Map.
 */

 export function mapToObject<K extends string, V>(map: Map<K, V>): { [key in K]: V } {
    const obj: { [key in K]: V } = {} as { [key in K]: V };
    map.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  /**
 * Converts a Map to a JSON string.
 * @param map - The Map to convert.
 * @returns The JSON string representation of the Map.
 */

   export function mapToJson(map: Map<string, any>): string {
    const obj: any = {};
  
    map.forEach((value, key) => {
      if (value instanceof Map) {
        obj[key] = mapToJson(value); // Recursively convert nested Maps
      } else {
        obj[key] = value;
      }
    });
  
    return JSON.stringify(obj);
  }


export async function postJsonData(filePath: string, url: string) {
    try {
        // Read JSON data from file
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

        // Send POST request with JSON data
        const response = await axios.post(url, data);

        // Print response status and content
        console.log(`Status Code: ${response.status}`);
        console.log(`Response Data: ${JSON.stringify(response.data)}`);
    } catch (error) {
        console.error('Error:', error);
    }
}
