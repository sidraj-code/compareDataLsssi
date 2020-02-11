import { browser, by, element, Browser } from 'protractor';
import { AppPage } from './app.po';
//import { expect } from 'chai';
import { Util } from '../utils/util';
import { protractor } from 'protractor/built/ptor';

let EC = browser.ExpectedConditions
let UserRole = '';
let ActionDisruptionID ='';
let RequestStatus = '';
let RequestStatusChanged = '';

//let chaiAsPromised = require('chai-as-promised');
//chai.use(chaiAsPromised);
//var expect = chai.expect;

export class QueuePage {

  utilService:Util
  constructor(){
    this.utilService = new Util(); 
  }

  // dev
  //actualURL:string = "https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=3552";
  actualURL:string = "https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=4002";

  DelayL1Url:string = "https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler?id=3601";

  
  QueueL1Url:string = "https://devsso.secure.fedex.com/L1/eShipmentGUI/DisplayLinkHandler"


 

  // rel 
  // actualURL:string = "https://devsso.secure.fedex.com/L2/eShipmentGUI/DisplayLinkHandler?id=1101";


  //queuetitle =element(by.css('app-root h1')).getText();
  getURL(){
    return browser.getCurrentUrl();
  }

  getRegionDropdown = ()=> element(by.xpath("//p-dropdown[@id='impacted-region-dropdown']"))
  getRegionDropdownElement = (Impacted_Region)=>element(by.xpath("//span[contains(text(),'"+Impacted_Region+"')]"))

  getDistrictDropdown = ()=>element(by.id("impacted-district-dropdown"))
  getDistrictDropdownElement = (Impacted_District)=>element(by.xpath("//span[contains(text(),'"+Impacted_District+"')]"))

  //span[contains(text(),'CENVK - CENTRAL AGFS')]

  getRequestTypeElement= (Request_Type)=>element(by.xpath("//p-radiobutton[@label='"+Request_Type+"']"))
  getRequestDisruptionButton=()=>element(by.xpath("//button[contains(text(),'REQUEST DISRUPTION')]"))

  // getCreateDisruptionButton = ()=> element(by.id("Request_New_Disruption"))
  getCreateDisruptionButton = ()=>element(by.xpath("//button[@id='Request_New_Disruption']"))

  getFirstRowViewButton =()=> element(by.xpath("//tr[1]//button//b[contains(text(),'View')]"))

  getFirstRowActionButton =()=> element(by.xpath("//tr[1]//button//b[contains(text(),'Action')]"))
  
  getFirstRowStatus =(Status)=> element(by.xpath("//tr[1]//td[4]//span[1][contains(text(),'"+Status+"')]"))
  // getFirstRowStatus =(Status)=> element(by.xpath("//tr[1]//td[4]//span[contains(text(),'"+Status+"')]"))
  getRequestID =()=> element(by.xpath("//tr[1]//td[3]"))
  getRequestIDParameter =(RequestID)=> element(by.xpath("//tr[1]//td[3][contains(text(),'"+RequestID+"')]"))
  getUser_Role =(User_Role)=> element(by.xpath("//a[3][contains(text(),'"+User_Role+"')]"))
  getLogoutIcon=()=>element(by.xpath("//div[@class='dropdown']//img"))

  getFirstRowStatusChanged =(Status_Change)=> element(by.xpath("//tr[1]//td[4]//span[1][contains(text(),'"+Status_Change+"')]"))
  
  
  async openRequestDialog()
  {
    let EC = browser.ExpectedConditions
    var until = protractor.ExpectedConditions;
    browser.wait(until.visibilityOf(this.getCreateDisruptionButton()), 30000, 'Create Disruption Button did not appeared in the DOM');

    await this.getCreateDisruptionButton().click();
    console.log('Create Disruption Button Clicked')
    await browser.wait(EC.visibilityOf(this.getRegionDropdown()),8000,'Region did not appear')
  }

  async goForSDRequestDialog(Impacted_Region, Impacted_District, Request_Type)
  {
    await browser.wait(EC.visibilityOf(this.getRegionDropdown()),6000,'Region did not appear')
    await browser.actions().mouseMove(this.getRegionDropdown()).click().perform()
    console.log('Region Button Clicked')
    browser.sleep(2000)

    await browser.wait(EC.visibilityOf(this.getRegionDropdownElement(Impacted_Region)),6000,'Impacted Region dropdown element did not appeared')
    await browser.actions().mouseMove(this.getRegionDropdownElement(Impacted_Region)).click().perform()
    await this.getRegionDropdownElement(Impacted_Region).click();
    console.log('Region selected')
    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))),3000,'Region Dropdown did not close')
   
    await browser.wait(EC.visibilityOf(this.getDistrictDropdown()),3000,'District did not appeared')
    await browser.actions().mouseMove(this.getDistrictDropdown()).click().perform()
    console.log('District Button Clicked')
    browser.sleep(1000)

    await browser.wait(EC.visibilityOf(this.getDistrictDropdownElement(Impacted_District)),6000,'Impacted Region dropdown element did not appeared')
    await browser.actions().mouseMove(this.getDistrictDropdownElement(Impacted_District)).click().perform()
    await this.getDistrictDropdownElement(Impacted_District).click();
    // await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.cssContainingText('span',Impacted_District))),3000,'District dropdown did not appeared')
    // await element(by.cssContainingText('span',Impacted_District)).click();
    console.log('District selected')
    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))),3000,'District Dropdown did not close')

    await browser.wait(EC.visibilityOf(this.getRequestTypeElement(Request_Type)),3000,'Request Type did not appear')
    await this.getRequestTypeElement(Request_Type).click();
    console.log(Request_Type+' Request type selected')
    browser.sleep(1000)
    await browser.wait(EC.visibilityOf(this.getRequestDisruptionButton()),3000,'Request Type did not appear')
    await this.getRequestDisruptionButton().click();
    console.log('Request Disruption button clicked')
    browser.sleep(2000)
  }

 async UserRole(User_Role)
  {
    browser.actions().mouseMove(this.getLogoutIcon()).perform()
    console.log('Logout Icon moved');

    UserRole = await this.getUser_Role(User_Role).getText();
    
    console.log('Actual : '+UserRole)
    console.log('Expected : '+ User_Role)
   
    if(UserRole == User_Role)
    {
      console.log('User role verified successfully')
    }
    else
    {
      console.log('User role not verified successfully')
    }
  }

  // async DisruptionID ()
  // {
  // await browser.wait(browser.ExpectedConditions.elementToBeClickable(this.getRequestID()),2000,'Request ID did not appeared');
  // DisruptionIDAfterCreate = await this.getRequestID().getText();
  // console.log(DisruptionIDAfterCreate)
  // }

  async SelectRequest(Action,Status, DisruptionIDAfterCreate)
  {
    ActionDisruptionID = await this.getRequestID().getText();
    console.log('Distruption ID ' +ActionDisruptionID+ ' which has to '+Action)
    console.log(DisruptionIDAfterCreate)

    if(DisruptionIDAfterCreate == ActionDisruptionID )
    {
      console.log(DisruptionIDAfterCreate)
      RequestStatus = await this.getFirstRowStatus(Status).getText();
      console.log('Actual Request Status :' +RequestStatus)
      console.log('Expected Request Status :' +Status)
      browser.sleep(3000)
       if(RequestStatus == Status)
       {
        await browser.wait(EC.visibilityOf(this.getFirstRowActionButton()),3000,'First Row Action Button did not appear')
         await this.getFirstRowActionButton().click();
         console.log('Action Button Clicked')
       }
    }
    
  }

  async SelectRequestAfterFinalApproval(Action,Status, DisruptionIDAfterCreate)
  {
    ActionDisruptionID = await this.getRequestID().getText();
    console.log('Distruption ID ' +ActionDisruptionID+ ' which has to '+Action)
    console.log(DisruptionIDAfterCreate)

    if(DisruptionIDAfterCreate == ActionDisruptionID )
    {
      console.log(DisruptionIDAfterCreate)
      RequestStatus = await this.getFirstRowStatus(Status).getText();
      console.log('Actual Request Status :' +RequestStatus)
      console.log('Expected Request Status :' +Status)
      browser.sleep(3000)
       if(RequestStatus == Status)
       {
        await browser.wait(EC.visibilityOf(this.getFirstRowViewButton()),3000,'First Row View Button did not appear')
         await this.getFirstRowViewButton().click();
         console.log('Action Button Clicked')
       }
    }
  }

  async StatusValidationAfterRequestCreate(Status_Change1)
  {
    //await browser.wait(browser.ExpectedConditions.visibilityOf(queuepage.getFirstRowStatus("Modified")),10000,'Status did code did not appear')
    RequestStatus = await this.getFirstRowStatusChanged(Status_Change1).getText();
    console.log('Actual Request Status Changed :' +RequestStatus)
    console.log('Expected Request Status Changed :' +Status_Change1)
    if(RequestStatus == Status_Change1)
    {
      console.log('Status is same as expected')
    }
  }


  async QueueScreenStatusValidation(Status_ChangeTo)
  {
    RequestStatusChanged = await this.getFirstRowStatusChanged(Status_ChangeTo).getText();
    //RequestStatusChanged = await this.getFirstRowStatusChanged(Status_ChangeTo).getText();
    console.log('Actual Request Status Changed :' +RequestStatusChanged)
    console.log('Expected Request Status Changed :' +Status_ChangeTo)

  }
}
