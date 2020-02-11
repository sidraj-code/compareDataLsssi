import { AppPage } from "../pages/app.po";
import {  Before, Given, Then, When, After, AfterAll, ScenarioResult } from "cucumber";
import { expect } from "chai";
import { QueuePage } from '../pages/queue.po';
import { browser, protractor, element, by } from 'protractor';
import { RequestPage } from '../pages/request-page.po';
    //import {chaiAsPromised} from "chai-as-promised";

import { async } from 'q';

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

// After(async() => {
//   await browser.driver.switchToParentFrame();
  
//   //dev
//   // await browser.switchTo().frame(element(by.xpath("//frame[@name='header']")).getWebElement());

//   //rel
//   await browser.switchTo().frame(element(by.xpath("//frame[@name='header']")).getWebElement());
  
//   await requestPage.Logout();
  
//   await page.utilService.waitForUrlChange("https://devoam.secure.fedex.com/loginapp/pages/logout.jsp?");
  
//   expect(await queuepage.getURL()).to.equal("https://devoam.secure.fedex.com/loginapp/pages/logout.jsp?");

//   await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//a[contains(text(),'Manage Password')]"))),6000,'Manage Password did not appeared')
  
//   })
// After(async ()=>{
//   // //string : status
//   // if(sc.status=="failed")
//   // {
//      // browser.switchTo().defaultContent();
//     await browser.driver.switchToParentFrame();
//     await browser.switchTo().frame(element(by.xpath("//frame[@name='header']")).getWebElement());
//     // await browser.switchTo().frame(element(by.xpath("//frame[@name='header']")).getWebElement());
//     await requestPage.Logout();
//     await browser.wait(browser.ExpectedConditions.visibilityOf(this.getLogoutButton()),5000,'Logout Button did not appeared')
//     browser.actions().mouseMove(this.getLogoutButton()).click().perform()
//     console.log('Logout Button Clicked');
//     browser.sleep(2000) 

//   // console.log(" i am in after hook")
//   // browser.switchTo().frame(element(by.xpath("//frame[@name='header']")).getWebElement());
//   // browser.wait(browser.ExpectedConditions.visibilityOf(this.getLogoutButton()),5000,'Logout Button did not appeared')
//   // browser.actions().mouseMove(this.getLogoutButton()).click().perform()
//   // console.log('Logout Button Clicked');
//   // browser.sleep(2000)  
//   // }
// }); 

/*
//Step defination for login scenario...
Given("I go to url", {timeout: 90 * 1000}, async () => {
  await page.navigateTo();
  browser.driver.manage().window().maximize();
});

When("I enter {string} and {string} and click on Login", {timeout: 90 * 1000},  async (username: string, password: string) =>{
   await page.login(username,password)
});

When("I should see the queue screen with {string}",{timeout: 90 * 1000}, async (validity:string)=>{
   
  if(validity==="valid"){
    await page.utilService.waitForUrlChange("#/sd");
    expect(await queuepage.getURL()).to.equal(queuepage.actualURL);
    
    
  } else {
    expect(await page.getErrorMsg()).to.equal("Username or password is incorrect");
  }
});

//Step defination file for  create disruption dailog box

When("I click on create new disrution button", {timeout: 90 * 3000}, async () => {
  // await page.utilService.waitForUrlChange(queuepage.actualURL);
  await queuepage.openRequestDialog()
});

When("I enter the {string}, {string} and select on {string} and click on request disruption",  {timeout: 90 * 2000},  async (Impacted_Region: string, Impacted_District: string, Request_Type: string) =>{
  await queuepage.goForSDRequestDialog(Impacted_Region,Impacted_District,Request_Type)
  await page.utilService.waitForUrlChange(requestPage.actualURL)
});
 
When("It should navigate to the SD request page for the given {string}", {timeout: 90 * 2000} , async (Request_Type:string)=>{
  expect(await requestPage.getTitleText(Request_Type).getText()).to.equal(requestPage.getTitleVerbage(Request_Type));
  console.log('Navigated to the following Page')
  console.log(Request_Type);
  //await page.navigateTo();
  //await page.utilService.waitForUrlChange(browser.baseUrl+"#/sd");
});
*/

// step definations for disruption creation

Given('Login to the Eops with {string} and {string} and Select the LSSI Data Compare Application', {timeout: 90 * 45000} , async (Username:string, Password:string)=> {
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

  console.log('Mouse hover on All Applications success')
  browser.wait(EC.visibilityOf(requestPage.getAllAppLSSIDataCompare()),20000,'LSSI value did not appear')
  await requestPage.getAllAppLSSIDataCompare().click();
  console.log('Clicked on LSSI Data Compare Application')
  
  // await browser.wait(EC.visibilityOf(element(by.linkText("Logout"))),20000,'Logout did not appeared')
  // await element(by.linkText("Logout")).click();
  // console.log('User Logged out successfully');


  // Checking load complete and enable angular 
  await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=4002");
  expect(await queuepage.getURL()).to.equal(queuepage.actualURL);
  await browser.waitForAngularEnabled();
  // Switching the frame to actual application 
  await browser.switchTo().frame(element(by.xpath("//frame[@src='https://devsso.secure.fedex.com/ursaCompare/']")).getWebElement());

  await browser.wait(EC.visibilityOf(requestPage.getRowViewButton(1)),20000,'First Row View Button did not appear')
  //await browser.wait(EC.visibilityOf(element(by.css("#reportsList table tbody tr:nth-child(1) > td:nth-child(7) button"))),50000,'First Row View Button did not appear')
  await requestPage.getRowViewButton(1).click();
  //element(by.css("#reportsList table tbody tr:nth-child(1) > td:nth-child(7) button")).click();
  console.log('View Report Button Clicked')
  await browser.sleep(5000)


/*
  // Rel
  
  await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L2/eShipmentGUI/DisplayLinkHandler?id=1101");
  // dev
  // await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=3552");
  
  expect(await queuepage.getURL()).to.equal(queuepage.actualURL);

  //dev
   // await browser.switchTo().frame(element(by.xpath("//frame[@src='https://devsso.secure.fedex.com/ServiceDisruption/']")).getWebElement());

  // rel
  await browser.switchTo().frame(element(by.xpath("//frame[@src='https://devsso.secure.fedex.com/L2/ServiceDisruptionRel/']")).getWebElement());
  var until = protractor.ExpectedConditions;
  
  browser.wait(until.visibilityOf(queuepage.getCreateDisruptionButton()), 45000, 'Create Disruption Button did not appeared');
*/
  // await queuepage.getCreateDisruptionButton().click();
  //await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//b[contains(text(),'SHOW FILTER')]"))),3000,'Region code dropdown value did not appeared')
  //expect(element(by.xpath("//b[contains(text(),'SHOW FILTER')]")).isPresent()).to.eventually.equal(true)
  //await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//button[@class='btn fedex-btn-new-request']"))),25000,'Work Queue row did not appear')
});

/*
Given("Valid user login with {string} and {string}", {timeout: 90 * 3000}, async (username:string, password:string) => {
  await page.navigateTo();
  browser.driver.manage().window().maximize();
  await page.login(username,password)
  await page.utilService.waitForUrlChange("#/sd");
  console.log('url changed to queue page')
  expect(await queuepage.getURL()).to.equal(queuepage.actualURL);
});

When('Navigate to request page with {string},{string},and {string}', {timeout: 90 * 8000}, 
async (Impacted_Region:string, Impacted_District: string, Request_Type: string) => 
{
    await queuepage.openRequestDialog();
    browser.sleep(2000);
    await queuepage.goForSDRequestDialog(Impacted_Region, Impacted_District, Request_Type)
    // dev
    // await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=3552")

    // rel
      
});

// // effective date
// When('Select the {string} and', function (string) {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

When('Select the {string} and fourdays back and one day before should be enabled and remaining should be disabled', async function (string) {
  await requestPage.getEffectiveDateicon().click(); 
  await requestPage.effectiveDate(string); 
}); 

// service disruption code
When("Select {string}" , {timeout: 90 * 3000}, async (Disruption_Service_Code: string) => {
  await requestPage.DisruptionServiceCode(Disruption_Service_Code);
});

//Change Disruption Code
When("Change the Disruption Service Code {string}" , {timeout: 90 * 5000}, async (Disruption_Service_Code_Change: string) => {
  await requestPage.DisruptionServiceCode(Disruption_Service_Code_Change);
});

// Outbound Delay Type
When("Select the disruption delay code {string}" , {timeout: 90 * 3000}, async (Outbound_Delay_Type: string,Outbound_Delay_Type_Flag :string) => {
  await requestPage.OutboundDelayType(Outbound_Delay_Type,Outbound_Delay_Type_Flag);
});

When("Select the disruption delay code {string} if {string} set to 1" , {timeout: 90 * 3000}, async (Outbound_Delay_Type: string, Outbound_Delay_Type_Flag: string) => {
  await requestPage.OutboundDelayType(Outbound_Delay_Type,Outbound_Delay_Type_Flag);
});

// Impacted Level
When('Select the {string} and select {string} when Product level got selected or {string}, {string} and {string} when Cons level got selected', {timeout: 90 * 5000}, async ( Impacted_level: string, Impacted_Products: string, Cons_No : string, No_Of_Pieces: string ,Total_Pieces: string) => {
  await requestPage.ImpactedLevel(Impacted_level,Impacted_Products,Cons_No,No_Of_Pieces,Total_Pieces);
 });

// Volume Disruption
When('enter the {string} and {string} and verify the % of total disruptable vol displaying',{timeout: 90 * 1000}, async (Estimated_Disruption_Vol: string, Average_Daily_Vol: string) => {
  await requestPage.VolumeDisruption(Estimated_Disruption_Vol, Average_Daily_Vol);
 });

// Comments
When('enter {string} and', async ( Comments1 : string) =>{
  await requestPage.CommentsSection(Comments1);
});

When('Click on Add Truck or Flight and Select the Truck or Flight {string}, Enter the {string}, Select the Truck Or Flight Code {string} and Enter the Delay Time {string}',{timeout: 90 * 10000}, 
 async (Truck_Or_Flight : string, Truck_Or_Flight_NO : string , Truck_Or_Flight_Code : string , Truck_Or_Flight_Delay_Time :string) => {
 await  requestPage.FlightOrTruckValidation(Truck_Or_Flight, Truck_Or_Flight_NO, Truck_Or_Flight_Code, Truck_Or_Flight_Delay_Time)
});

// Truck or Flight
When('click on truck or flight information and select {string}',{timeout: 90 * 3000}, async (Truck_Or_Flight : string) =>{
  await requestPage.AddTruckOrFlight(Truck_Or_Flight);
});

When('enter truck or flight No {string} and',{timeout: 90 * 1000}, async (Truck_Or_Flight_NO : string ) => {
  await requestPage.FlightOrTruckNo(Truck_Or_Flight_NO);
});

When('select the truck or flight Code {string}', {timeout: 90 * 1000}, async (Truck_Or_Flight_Code : string ) => {
 await requestPage.FlightOrTruckCode(Truck_Or_Flight_Code);
});

When('enter the truck or flight delay time {string}',{timeout: 90 * 1000}, async (Truck_Or_Flight_Delay_Time : String ) => {
  await requestPage.FlightOrTruckDelayTime(Truck_Or_Flight_Delay_Time);
});

When('Click on the Save Button and Verify the added Truck or Flight Code {string}', {timeout: 90 * 5000}, async (Truck_Or_Flight_Code : string) => {
  await requestPage.FlightOrTruckSaveButton(Truck_Or_Flight_Code);
 });

When('enter the website link {string}', {timeout: 90 * 3000}, async (Website_Link : string ) => {
  await requestPage.WebsiteLink(Website_Link);
 });

//Entire Market
When('Change the Impacted Locations from Specific location to Entire market', {timeout: 90 * 5000} , async () =>{
  await requestPage.ImpactedLocationsEntireMarket();
});

When('enter the {string} and Select if entire market or specific loction are impacted {string} and enter Location id {string} and select {string}', {timeout: 90 * 1000}, async (  Ramp_ID : string, Specific_Locations_Flag: number, SpecificLoc_LocationID : string , SpecificLoc_LocID_LocName : string) => {
  await requestPage.ImpactedLocationsSpecificLocations(Ramp_ID, Specific_Locations_Flag , SpecificLoc_LocationID, SpecificLoc_LocID_LocName);
});

// When('Select the Additional Conditions Location ID {string} if Additional Locations flag {string} is equal to l',{timeout: 90 * 3000}, async(AdditionalLoc_LocID_LocName: string, Additional_Location_Flag: string) => {
//   await requestPage.AdditionalLocations(AdditionalLoc_LocationID,AdditionalLoc_LocID_LocName,Additional_Location_Flag)
// });


When('Enter the Additional Locations Location ID {string} and Select the Location ID - Location Name {string} only if Additional Locations flag {string} is set to l',{timeout: 90 * 6000}, async(AdditionalLoc_LocationID: string, AdditionalLoc_LocID_LocName : string, Additional_Location_Flag: string,) =>  {
  await requestPage.AdditionalLocations(AdditionalLoc_LocationID, AdditionalLoc_LocID_LocName, Additional_Location_Flag)
});

When('select {string} and {string}', {timeout: 90 * 8000}, async (  Local_Conditions_Group : string, Local_Conditions_Value: string ) => {
  await requestPage.LocalConditions(Local_Conditions_Group,Local_Conditions_Value);
});

When('Click on Submit Button and It should navigate to Queue Page', {timeout: 90 * 5000}, async () =>  {
  await requestPage.SubmitAction();
  console.log('Submit button clicked')
  await page.utilService.waitForUrlChange(queuepage.actualURL)
  console.log('navigated to queue page')
  //expect(queuepage.getFirstRowStatus('Entered').isDisplayed()).toBeTruthy();
 // await browser.wait(browser.ExpectedConditions.visibilityOf(queuepage.getFirstRowStatus("Entered")),10000,'Status did code did not appear')
  //expect(await queuepage.getURL()).to.equal(queuepage.actualURL);
  });

  When('It should navigate to Queue Page',  {timeout: 90 * 3000}, async () => {
    await page.utilService.waitForUrlChange(queuepage.actualURL)
    console.log('navigated to queue page')
  });


  When('It should navigate to Queue Page with the status {string}', {timeout: 90 * 35000}, async (Status_Change1: string) =>  {
    
    await page.utilService.waitForUrlChange(queuepage.actualURL)
    console.log('navigated to queue page')

    // await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//tbody[@class='ui-table-tbody']"))), 30000, 'flight code dropdown did not close')

    
    //expect(queuepage.getFirstRowStatus('Entered').isDisplayed()).toBeTruthy();
    await browser.wait(browser.ExpectedConditions.visibilityOf(queuepage.getFirstRowStatus(Status_Change1)),35000,'First row status did not appear')
    //expect(await queuepage.getURL()).to.equal(queuepage.actualURL);
  });

When('Verify the Disruption ID and Status {string} in the Queue Screen',{timeout: 90 * 10000}, async (Status_Change1 : string) => {
  DisruptionIDAfterCreate = await queuepage.getRequestID().getText();
  console.log(DisruptionIDAfterCreate)
  browser.manage().timeouts().implicitlyWait(6000)
  await queuepage.StatusValidationAfterRequestCreate(Status_Change1)

});

When('Verify the Deleted Disruption Record in the Queue List it should not Present',{timeout: 90 * 3000}, async () => {
  //DisruptionIDAfterCreate = await queuepage.getRequestID().getText();
  expect(queuepage.getRequestIDParameter(DisruptionIDAfterCreate).isPresent()).to.eventually.equal(false)
  console.log('Disruption ID Deleted')
 // await browser.wait(browser.ExpectedConditions.visibilityOf(this.getDisruptionServiceCode()),3000,'Request disruption page did not appear')
  //await queuepage.StatusValidationAfterRequestCreate(Status_Change)
});


When("Navigate to Regional / District / National  page with {string},{string},and {string}", {timeout: 90 * 5000}, 
async (Impacted_Region:string, Impacted_District: string, Request_Type: string) => {
    await queuepage.openRequestDialog()
    await queuepage.goForSDRequestDialog(Impacted_Region, Impacted_District, Request_Type)
    await page.utilService.waitForUrlChange(requestPage.RegionalDistrictNationalPageURL)
});

When('Select Inbound and / or Outbound {string}',  {timeout: 90 * 3000} , async (Inbound_and_or_Outbound : string) => {
  await requestPage.InboundAnd0rOutBound(Inbound_and_or_Outbound);
});

When('Select Regional or District or National {string} And Select {string} if Region level or select {string} if District level', {timeout: 90 * 9000}, async (Region_District_National: string, Regional_Code: string, District_Code: string) => {
  await requestPage.RegionalDistrictNational(Region_District_National,Regional_Code,District_Code);
});


Then('Logout from the application', {timeout: 90 * 5000}, async () => {
  //console.log('logout logic');
  // browser.switchTo().defaultContent();
  await browser.driver.switchToParentFrame();
  
  //dev
  // await browser.switchTo().frame(element(by.xpath("//frame[@name='header']")).getWebElement());

  //rel
  await browser.switchTo().frame(element(by.xpath("//frame[@name='header']")).getWebElement());
  
  await requestPage.Logout();
  
  await page.utilService.waitForUrlChange("https://devoam.secure.fedex.com/loginapp/pages/logout.jsp?");
  
  expect(await queuepage.getURL()).to.equal("https://devoam.secure.fedex.com/loginapp/pages/logout.jsp?");

  await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//a[contains(text(),'Manage Password')]"))),6000,'Manage Password did not appeared')
  
});


When('Select Cons level and upload the File {string} and Verify the No of records uploaded {string}.',  {timeout: 90 * 15000}, async (Cons_Data_File : string, Total_Pieces : string) => {
  await requestPage.ConsFileUpload(Cons_Data_File,Total_Pieces);
});



When('Verify the Invalid and Duplicate Cons data added and Validate the Total No of Pieces {string}.', function (string) {
 console.log('validate invalid and duplicate cons added')
});

When('Verify the No of Records uploaded {string} and', function (string) {
 console.log('no of cons validation pending')
});

//user_role
Given('Verify the user {string}', {timeout: 90 * 2000}, async ( User_Role: string) => {
 await queuepage.UserRole(User_Role);
});

When('Select the Disruption Request to be {string} which is in {string} and Click on Action Button',  {timeout: 90 * 10000} , async (Action : string, Status :string)=> {
  await queuepage.SelectRequest(Action, Status, DisruptionIDAfterCreate)
});

When('Select the Disruption Request to be {string} which is in {string} and Click on View Button',  {timeout: 90 * 10000} , async (Action : string, Status :string)=> {
  await queuepage.SelectRequestAfterFinalApproval(Action, Status, DisruptionIDAfterCreate)
});

When('It should navigate to the particular Request Screen',{timeout: 90 * 6000}, async () =>  {
 // dev
 // await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=3552")

// rel
await page.utilService.waitForUrlChange("https://devsso.secure.fedex.com/L2/eShipmentGUI/DisplayLinkHandler?id=1101")
 console.log('Url changed to Request Page')

 await browser.wait(browser.ExpectedConditions.visibilityOf(requestPage.getlocationLevel()),3000,'Location Level did not appeared');
});

When('Click on the Edit button', {timeout: 90 * 20000}, async () => {
  await browser.wait(browser.ExpectedConditions.visibilityOf(requestPage.getEditButton()),20000,'Edit Button did not appear')
  await requestPage.getEditButton().click();
  console.log('Edit Button Clicked')

  // await browser.wait(browser.ExpectedConditions.visibilityOf(this.getDisruptionServiceCode()),5000,'Disruption service code did not appear')

});

When('Check for the available action buttons {string} ,{string} and {string}', {timeout: 90 * 3000}, async (Button1 : string, Button2 : string, Button3 : string) =>  {
  await requestPage.AvailableActionButtons(Button1,Button2,Button3);
});

When('verify all the fields and provide the Comments {string}', {timeout: 90 * 10000}, async( Comments2 : string)=> {
  await requestPage.EditComments(Comments2);
  
});

When('Click on the Corresponding {string} Button', {timeout: 90 * 6000}, async (Action_Button : string) =>{
  browser.sleep(5000)
  await browser.wait(browser.ExpectedConditions.visibilityOf(requestPage.getActionButton(Action_Button)),5000,'Action Button did not appear')
  browser.actions().mouseMove(requestPage.getActionButton(Action_Button)).click().perform()
  // await requestPage.getActionButton(Action_Button).click();
  console.log(Action_Button+ ' Clicked')
});

When('It should navigate to the Queue Screen and the corresponding Request Status should change to {string}',{timeout: 90 * 3000}, async( Status_ChangeTo: string)=> {
  await page.utilService.waitForUrlChange(queuepage.actualURL)
  console.log('navigated to queue page')
  //expect(await queuepage.getFirstRowStatusChanged(Status_ChangeTo).getText()).to.equal(Status_ChangeTo);
  await queuepage.QueueScreenStatusValidation(Status_ChangeTo)
});

When('Change the {string} and select {string} when Product level got selected or {string}, {string} and {string} when Cons level got selected', {timeout: 90 * 5000}, async ( Impacted_level: string, Impacted_Products: string, Cons_No, No_Of_Pieces,Total_Pieces: string ) => {
  await requestPage.ImpactedLevel(Impacted_level,Impacted_Products,Cons_No,No_Of_Pieces,Total_Pieces);
});

When('Enter the Emp ID {string} and select the Corresponding Mail Id {string} in the Notification Section and click on add Icon', {timeout: 90 * 8000} , async (Notification_Emp_ID, Notification_Mail_ID) => {
  await requestPage.NotificationSections(Notification_Emp_ID, Notification_Mail_ID)
});

// When('Check for the available action buttons {string} ,{string}, {string} and {string}', {timeout: 90 * 4000} , async (Button1 : string, Button2 : string, Button3 : string, Button4 : string) =>  {
//   expect(requestPage.getReviewButton().isPresent()).to.eventually.equal(true)
//   expect(requestPage.getReviewButton().isPresent()).to.eventually.equal(true)
//   expect(requestPage.getReviewButton().isPresent()).to.eventually.equal(true)
//   expect(requestPage.getReviewButton().isPresent()).to.eventually.equal(true)
// });

*/         

