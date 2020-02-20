import { AppPage } from "../pages/app.po";
import {  Before, Given, Then, When, After, AfterAll, ScenarioResult } from "cucumber";
import { expect } from "chai";
import { QueuePage } from '../pages/queue.po';
import { browser, protractor, element, by } from 'protractor';
import { RequestPage } from '../pages/request-page.po';
    //import {chaiAsPromised} from "chai-as-promised";

import { async } from 'q';
import { notEqual } from 'assert';

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
Given('Test Export to Excel functionality', {timeout: 90 * 450000} , async ()=> {
  // Export to Excel test scenario
  await browser.wait(EC.visibilityOf(requestPage.getRowViewButton(1)),20000,'Row '+1+' View Button did not appear')
  await requestPage.getRowViewButton(1).click();
  console.log('View Report Button Clicked');
  await browser.sleep(10000);
  await browser.wait(EC.visibilityOf(element(by.xpath("//a[@id='export']"))),20000,'Row '+1+' Export to Excel option did not appear')
  await element(by.xpath("//a[@id='export']")).click();
  await browser.sleep(5000);
  await browser.wait(EC.visibilityOf(element(by.tagName("b"))),10000,'Back to My reports did not appear');
  await element(by.tagName("b")).click();
});
