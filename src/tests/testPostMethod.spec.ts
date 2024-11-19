import { test, expect } from '@playwright/test';
import { postJsonData } from '../utils/maptoObjectUtil'
import * as path from 'path';
import * as fs from 'fs';

test('POST JSON data', async () => {

    const rootDirectory= path.resolve(__dirname,'../../');
    const testDataFolder= path.join(rootDirectory,'TestData')
    const filePath= path.join(testDataFolder,'data.json')
    console.log(filePath)
    const url = 'https://api.restful-api.dev/objects';

    // Call the utility function to post JSON data
    await postJsonData(filePath, url);

   
});
