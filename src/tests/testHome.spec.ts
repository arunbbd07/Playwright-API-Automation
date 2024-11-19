import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import * as dotenv from 'dotenv'
import {mapToObject, mapToJson } from '../utils/maptoObjectUtil';

dotenv.config();

test.describe('Home Page API Tests', () => {
  let homePage: HomePage;

  test.beforeAll(() => {
    homePage = new HomePage();
  });

  test('Get home page data for specific object', async () => {
    const data = await homePage.getData();
    console.log(JSON.stringify(data))
    //const resData=JSON.stringify(data)
    
  });

  test('Create home page data for object', async () => {
    let mapData= new Map<string,any>();
    mapData.set("name","Arun's laptop")
    let map = new Map<string,string>();
    map.set("year","2024");
    map.set("price","$50000");
    map.set("CPU model","Intel Core i9");
    map.set("Hard disk size","1 TB");
    mapData.set("data",map)
    console.log(mapData)
    const jsonData=JSON.parse(mapToJson(mapData))
    const data = await homePage.createObject(jsonData)
    const jsonRes=JSON.stringify(data)
    console.log(jsonRes)
    const resData= JSON.parse(data.data)
    console.log(data.data)
    console.log(resData.year)
    console.log(data.name)
    expect(data.name,"Arun's laptop")

    //const resData=JSON.stringify(data)
    
  });
})