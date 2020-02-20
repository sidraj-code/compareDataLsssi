import { AppPage } from "../pages/app.po";
import {  Before, Given, Then, When, After, AfterAll, ScenarioResult } from "cucumber";
import { expect } from "chai";
import { QueuePage } from '../pages/queue.po';
import { browser, protractor, element, by } from 'protractor';
import { RequestPage } from '../pages/request-page.po';
    //import {chaiAsPromised} from "chai-as-promised";

import { async } from 'q';
import { notEqual } from 'assert';

/*
let chai = require('chai');

let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
*/

let DisruptionIDAfterCreate ='';

let EC = browser.ExpectedConditions

let page: AppPage;
let queuepage: QueuePage;
let requestPage: RequestPage;
let sc: ScenarioResult;

let chai = require('chai');
var expect = chai.expect;

Before(() => {
  page = new AppPage();
  queuepage=new QueuePage();
  requestPage = new RequestPage();
});


// step definations for LSSI Data Compare
Given('Test View Report functionality', {timeout: 90 * 450000} , async ()=> {
    // ViewReport Button test scenario
    var row = element.all(by.xpath('.//*[@class="ui-table-tbody"]'));
    var value = row.all(by.tagName("tr"));
    value.count().then(function(rowCount){
      console.log("Row count: "+rowCount);
    })
    await browser.sleep(5000)
    console.log("Just before outer For Loop");
    for (var viewButton:number = 1; viewButton <= 4; viewButton++) {//4 buttons
      console.log("Inside outer For Loop");
      await browser.wait(EC.visibilityOf(requestPage.getRowViewButton(viewButton)),20000,'Row '+viewButton+' View Button did not appear')
      await requestPage.getRowViewButton(viewButton).click();
      console.log('View Report Button Clicked');
      await browser.sleep(10000);

      await requestPage.doRowComparison("Location Comparison");//28 rows, 35 elements for comparison
      await browser.sleep(10000);
      await requestPage.doRowComparison("USPS Comparison");//32 rows, 4 elements for comparison
      await browser.sleep(10000);
      await requestPage.doRowComparison("Zip Comparison");//28 rows, 56 elements for comparison
      await browser.sleep(10000);

      await browser.wait(EC.visibilityOf(element(by.tagName("b"))),10000,'Back to My reports did not appear');
      await element(by.tagName("b")).click();
      await browser.sleep(5000);
    }

    await browser.sleep(10000);
});
