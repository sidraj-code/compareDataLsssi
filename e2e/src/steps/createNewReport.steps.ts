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
      
Given('Login to the LSSI Data Compare Application with {string} and {string} and test Create New Report', {timeout: 90 * 450000} , async (Username:string, Password:string)=> {
    await browser.waitForAngularEnabled(false);
    console.log(Username);
    console.log(Password);
    await browser.driver.get("http://ursa-ui-dev.app.wtcdev1.paas.fedex.com/ursaCompare/");
    console.log('Navigated to Login Page');
    browser.driver.manage().window().maximize();
    await page.login(Username,Password)
    await browser.sleep(5000);
  
    await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L1/eShipmentGUI/MenuPage.iface");
    await browser.sleep(5000);
  
    browser.wait(EC.visibilityOf(requestPage.getAllApp()),2000,'all app button did not appear')

    await browser.actions().mouseMove(requestPage.getAllApp()).perform()
    await browser.sleep(1000);
    await browser.actions().mouseMove(requestPage.getScans()).perform()
    await browser.sleep(1000);
    await browser.actions().mouseMove(requestPage.getAllApp()).perform()

    //Verify whether User is Allowed to access LSSI Data Compare Application
    let msgFlag = await requestPage.getAllAppLSSIDataCompare().isPresent();
    console.log("return value: "+msgFlag);
    if (!msgFlag){
      console.log("The user ID: "+Username+" is NOT Allowed to access LSSI Data Compare application as expected");
      return process.exit(1);
    } else {
      console.log("The user ID: "+Username+" is ALLOWED to access LSSI Data Compare application as expected");
      browser.wait(EC.visibilityOf(requestPage.getAllAppLSSIDataCompare()),20000,'LSSI value did not appear')
      await requestPage.getAllAppLSSIDataCompare().click();
      console.log('Clicked on LSSI Data Compare Application');
      await browser.sleep(10000);
    }

    // Checking load complete
    await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=4002");
    expect(await queuepage.getURL()).to.equal(queuepage.actualURL);
    await browser.sleep(2000);

    // Enable the Angular property
    await browser.waitForAngularEnabled();

    // Switching the frame to actual application 
    await browser.switchTo().frame(element(by.xpath("//frame[@src='https://devsso.secure.fedex.com/ursaCompare/']")).getWebElement());

 
  // Create New Report test scenario
    await browser.sleep(10000);

    // await requestPage.createNewReport("L3", "FNL", "Production", "FNL", "cancel");
// await requestPage.createNewReport("L2", "FNL", "L3", "INT", "cancel");
// await requestPage.createNewReport("L3", "FNL", "Production", "INT", "cancel");
// await requestPage.createNewReport("L3", "FNL", "L2", "INT", "cancel");

// await requestPage.createNewReport("L3", "INT", "L3", "FNL", "create");
// await requestPage.createNewReport("L2", "FNL", "L3", "FNL", "create");
// await requestPage.createNewReport("L2", "FNL", "L3", "INT", "create");
// await requestPage.createNewReport("L2", "INT", "L3", "FNL", "create");
// await requestPage.createNewReport("L2", "INT", "L3", "INT", "create");

// await browser.sleep(10000);

});
