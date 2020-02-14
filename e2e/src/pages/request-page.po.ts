import { browser, by, element, $, By } from 'protractor';
//import { expect } from 'chai';

import { WebElement } from "protractor";
import { Util } from "../utils/util";
import { chaiAsPromised } from "chai-as-promised";
import { async } from 'q';
import { QueuePage } from './queue.po';
import { AppPage } from './app.po';

const selectors = {
  "LocationID": "4 or 5 letter LOC ID",
}

let date = new Date();
let today = date.getDate();// todays's date
let onedayBack = today - 1;
//console.log(onedayBack);
let twodaysBack = today - 2;
//console.log(twodaysBack);
let ThreedaysBack = today - 3;
//console.log(ThreedaysBack);
let fourdaysBack = today - 4;
//console.log(fourdaysBack);
let fivedaysBack = today - 5;
//console.log(fivedaysBack)
let plusoneday = today + 1;
let plustwodays = today + 1

let chai = require('chai');

let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

let EC = browser.ExpectedConditions
let page: AppPage;
let queuepage: QueuePage;

export class RequestPage {
  actualURL: string = browser.baseUrl + "#/sd/master-inbound-form";
  RegionalDistrictNationalPageURL: string = browser.baseUrl + "#/sd/rdn-request";
  webdriver: any;

  utilService: Util
  constructor() {
    this.utilService = new Util();
  }



  //Sidraj functions:
  getURL() {
    return browser.getCurrentUrl();
  }
  getQuickNavigation = () => element(by.id("appNav"))
  getAllApp = () => element(by.xpath("//span[contains(text(),'All Applications')]"));
  getScans = () => element(by.xpath("//span[contains(text(),'Scans')]"));

  getAllAppLSSIDataCompare = () => element(by.xpath("//a[@id='j_id15:j_id22:0:j_id25:7:j_id27:j_id28:j_id29:link_4002:link']//span[@class='iceMnuItmLabel'][contains(text(),'LSSI Data Compare')]"));

  getUserID = (Username) => element(by.xpath("//a[contains(text(),'" + Username + "')]"));

  getRowViewButton =(rowNumber)=> element(by.xpath("//tr["+rowNumber+"]//td[7]//button[1]"));
  
  getRowElement = (compareType:string, rowNum:number, elmntNum:number)=> element(by.xpath("/html/body/app-root/app-layout/div/div/div[2]/app-version-comparison/app-"+compareType+"-comparison/div/p-table/div/div/table/tbody/tr["+rowNum+"]/td["+elmntNum+"]"));
  
  async doRowComparison(comparisonType) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//span[contains(text(),'"+comparisonType+"')]"))),10000,'Location Compare did not appear');
    await element(by.xpath("//span[contains(text(),'"+comparisonType+"')]")).click();
    await browser.sleep(5000);
    console.log(comparisonType+" :");
    var cType = "location";
    if (comparisonType != "Location Comparison") {
      cType = (comparisonType == "USPS Comparison")? "usps":"zip";
    }
    console.log("cType: "+cType);
    for (let j = 2; j <= 10; j=j+2){
      for (let i = 2; i <= 4; i++) {
        let str1 = await this.getRowElement(cType,j-1,i).getText();
        await browser.sleep(1000);
        let str2 = await this.getRowElement(cType,j,i).getText();
        await browser.sleep(1000);
        if (str1 != str2){
          console.log("New Data: "+str2+" didn't match with Old Data: "+str1);
          let colorr1 = await this.getRowElement(cType,j,i).getAttribute('style');
          await browser.sleep(10000);
          let colorr2 = "color: red;";
          // console.log(colorr1);
          // console.log(colorr2);
          if (colorr1 != colorr2) { 
            console.log("Bug!!!!  The data is not in Red color");
          }
        }
      }
    }
  }

  //effective date
  getEffectiveDate = () => element(by.xpath("//button[contains(text(),'Request New Disruption')]"));

  getEffectiveDateicon = () => element(by.xpath("//span[@class='ui-button-icon-left ui-clickable pi pi-calendar']"));

  getTodaydate = (today) => element(by.xpath("//a[contains(text(),'" + today + "')]"));
  getMinusoneday = (onedayBack) => element(by.xpath("//a[contains(text(),'" + onedayBack + "')]"));
  getMinustwoday = (twodaysBack) => element(by.xpath("//a[contains(text(),'" + twodaysBack + "')]"));
  getMinusthreeday = (ThreedaysBack) => element(by.xpath("//a[contains(text(),'" + ThreedaysBack + "')]"));
  getMinusfourday = (fourdaysBack) => element(by.xpath("//a[contains(text(),'" + fourdaysBack + "')]"));
  getMinusfiveday = (fivedaysBack) => element(by.xpath("//span[contains(text(),'" + fivedaysBack + "'])"))
  getplusoneday = (plusoneday) => element(by.xpath("//a[contains(text(),'" + plusoneday + "')]"));



  //disruption service code
  getDisruptionServiceCode = () => element(by.xpath("//p-dropdown[@id='Disruption_Service_Code']"));

  //outbound delay code
  getOutbounddelaycode = () => element(by.xpath("//p-dropdown[@id='Outbound_Delay_Type']"));

  //volume disruption
  getEstimatedDisruptedVolume = () => element(by.id("estimatedVol"));
  getAverageDisruptedVolume = () => element(by.id("avgDailyVol"));
  getPercentageVol = () => element(by.xpath("//input[@id='totalPercVol']"));

  //comments
  getComments = () => element(by.xpath("//textarea[@placeholder='Enter Your Comments Here']"));

  //impacted level
  //location level
  getlocationLevel = () => element(by.xpath("//label[contains(text(),'Location Level')]"));
  getAllProducts = () => element(by.xpath("//span[@id='All_Products_Impacted']"));

  //product level
  getProductLevel = () => element(by.xpath("//label[contains(text(),'Product Level')]"));
  getSelectImpactedProducts = () => element(by.xpath("//p-dropdown[@id='Impacted_Products']"));
  getImpactedProductsElement = (Impacted_Products) => element(by.xpath("//span[contains(text(),'" + Impacted_Products + "')]"))
  GetImpactedProductsAdd = () => element(by.xpath("//span[@id='Add_Product_Btn']//span[@class='icon']"));

  //cons level
  getConsLevel = () => element(by.xpath("//label[contains(text(),'CONS Level')]"));
  getAddConsDataButton = () => element(by.xpath("//button[contains(text(),'Add Cons Data')]"));
  getConsInput = () => element(by.xpath("//input[@id='Cons_Number']"));
  getPiecesInput = () => element(by.xpath("//input[@id='Cons_Pieces']"));
  getConsPiecesAddButton = () => element(by.xpath("//span[@id='Cons_Pieces_Add_Btn']//span[@class='icon']"));
  //getTotalPieces= ()=> element(by.xpath("//input[@class='ng-pristine ng-valid ng-touched']"));
  getTotalPiecesEstimate = () => element(by.xpath("//input[@class='ng-untouched ng-pristine ng-valid']"));
  getConsDataSaveButton = () => element(by.xpath("//button[contains(text(),'Save')]"));
  getTotalConsLabel = () => element(by.xpath("//label[contains(text(),'Total Cons')]"));

  getAddedConsData = () => element(by.xpath("//div[@class='scrollbar scrollStyle']"));


  getTotalPieces = () => element(by.xpath("//input[@id='Model_Total_Pieces']"))
  getTotalConsAfterSave = () => element(by.xpath("//input[@id='Total_Cons']"))
  getTotalPiecesAfterSave = () => element(by.xpath("//input[@id='Total_Pieces']"))
  getConsEditButton = () => element(by.xpath("//span[@id='Cons_Edit_Btn']"))

  getUploadButton = () => element(by.xpath("//input[@class='ng-star-inserted']"));
  // getUploadButton=()=> element(by.xpath("//p-fileupload[@id='Uplaod_Btn']"));

  //Add Flight or Truck
  getAddTruckOrFlightButton = () => element(by.xpath("//a[@id='openModal']"))
  getTOrFDialogBoxSaveButton = () => element(by.xpath("//button[@class='btn fedex-btn ng-star-inserted'][contains(text(),'Save')]"))
  getFlightOrTruckButton = (Truck_Or_Flight) => element(by.xpath("//label[contains(text(),'" + Truck_Or_Flight + "')]"))
  getFlightOrTruckNo = () => element(by.xpath('//input[@placeholder="Truck / Flight Number"]'))
  getFlightOrTruckCode = () => element(by.xpath("//p-dropdown[@name='code']"))
  getFlightOrTruckCodeSelect = (TruckOrFlightCode) => element(by.xpath("//span[contains(text(),'" + TruckOrFlightCode + "')]"))
  getFlightOrTruckAddButton = () => element(by.xpath("//div[@class='fdx-sdd-add-input-mask']//span[@class='icon']"))
  getFlightOrTruckDelayTime = () => element(by.xpath("//input[@placeholder='hh:mm']"))

  getAddedTruckFlight = (FlightOrTruckCode) => element(by.xpath("//td[contains(text(),'" + FlightOrTruckCode + "')]"))
  //Website Link
  getWebsiteLink = () => element(by.xpath("//input[@id='weblinkInp']"));
  getAddWebsiteLinkBtn = () => element(by.xpath("//div[@class='fdx-sdd-add-input']//span[@class='box-add']//span[@class='icon']"));


  //Impacted Locations or Market section
  getRampID = () => element(by.xpath("//input[@placeholder='4 or 5 letter ID']"));
  getRampIDElement = (Ramp_ID) => element(by.xpath("//span[contains(text(),'" + Ramp_ID + "')]"))
  getEntireMarket = () => element(by.id("Entire_Market"))
  getSpecificLocations = () => element(by.id("Specific_Locations"));
  getSpecificLocLocationID = () => element(by.xpath("//input[@placeholder='4 or 5 letter LOC']"));

  getSpecificLocLocationIDAddButton = () => element(by.id("Specific_Locations_Add_Btn"));
  getSpecificLocationIDName = (Specific_LocID_LocName) => element(by.xpath("//span[contains(text(),'" + Specific_LocID_LocName + "')]"))
  getAdditionalLocLocationIDAddButton = () => element(by.xpath("//span[@id='Additional_Locations_Add_Btn']"));

  getListOfSelLocations = () => element(by.cssContainingText('td', 'ABCD'));
  getAdditionalLocations = () => element(by.id("Additional_Locations"));
  getAdditionalLocLocationID = () => element(by.xpath("//p-autocomplete[@id='LocationID_AdditionalLocations']//span//input[@placeholder='4 or 5 letter LOC']"));
  getAdditionalLocLocationIDName = (Additional_LocID_LocName) => element(by.xpath("//span[contains(text(),'" + Additional_LocID_LocName + "')]"))
  //Local Conditions section
  getlocalConditionsGroup = () => element(by.id("Local_Conditions_Group"));
  getLocalConditions = () => element(by.id("Local_Conditions"));
  getLocalConditionsAddButton = () => element(by.id("Local_Conditions_Add_Btn"))

  //Submit Button
  getSubmitButton = () => element(by.xpath("//button[@class='btn fedex-btn']"))
  getSubmitForReviewBtn = () => element(by.xpath("//button[contains(text(),'Submit for Review')]"))
  //Logout
  getLogoutIcon = () => element(by.xpath("//div[@class='dropdown']//img"))
  getLogoutDropdown = () => element(by.xpath("//a[contains(text(),'Logout')]"))
  getLogoutButton = () => element(by.xpath("//a[contains(text(),'Logout')]"))

  //Inbound and/or Outbound
  getInboundAndOrOutbound = () => element(by.id("Inbound_and_Outbound"))

  getInboundAndOrOutboundElement = (Inbound_and_or_Outbound) => element(by.xpath("//span[starts-with(text(),'" + Inbound_and_or_Outbound + "')]"))

  //span[starts-with(text(),'Inbound')]
  //Regional Level
  getRegionalLevel = () => element(by.xpath("//p-radiobutton[@id='Regional_Level']//div[@class='ui-radiobutton ui-widget']"))

  getRegionDistrictNationalRadioBtn = (Region_District_National) => element(by.xpath("//label[contains(text(),'" + Region_District_National + "')]"))
  //Regional Code
  getRegionalCode = () => element(by.xpath("//p-dropdown[@id='RND_Region_Level']"))

  //Regional Code Element
  getRegionalCodeElement = (Regional_Code) => element(by.xpath("//span[contains(text(),'" + Regional_Code + "')]"))

  //District Level
  getDistrictLevel = () => element(by.xpath("//p-radiobutton[@id='District_Level']//span[@class='ui-radiobutton-icon ui-clickable']"))

  //District Code
  getDistrictCode = () => element(by.xpath(" //p-dropdown[@id='RND_District_Level']"))

  ////District Code Element
  getDistrictCodeElement = (District_Code) => element(by.xpath("//span[contains(text(),'" + District_Code + "')]"))

  getNotification = () => element(by.xpath("//input[@placeholder='Emp. ID']"))

  getNotificationEmpID = (Notification_Emp_ID) => element(by.xpath("//span[contains(text(),'" + Notification_Emp_ID + "')]"))

  getNotificationMailID = (Notification_Mail_ID) => element(by.xpath("//span[contains(text(),'" + Notification_Mail_ID + "')]"))

  getNotificationAddIcon = () => element(by.xpath("//span[@class='fx-sdd-box-add-btn']//span[@class='icon']"))

  //National Level
  //label[contains(text(),'National Level')]
  //p-radiobutton[@id='National_Level']//span[@class='ui-radiobutton-icon ui-clickable']
  getNational_Level = () => element(by.xpath("//label[contains(text(),'National Level')]"))

  getNorthEast_Label = () => element(by.xpath("//p-checkbox[@id='0']"))

  getSouthEast_Label = () => element(by.xpath("//p-checkbox[@id='1']"))

  getPacificWest_Label = () => element(by.xpath("//p-checkbox[@id='2']"))

  getMidWest_Label = () => element(by.xpath("//p-checkbox[@id='3']"))

  getAGFSEastern_Label = () => element(by.xpath("//p-checkbox[@id='4']"))

  getAGFSWest_Label = () => element(by.xpath("//p-checkbox[@id='5']"))


  getActionButton = (Action_Button) => element(by.xpath("//button[contains(text(),'" + Action_Button + "')]"))

  getActionButton1 = (Button1) => element(by.xpath("//button[contains(text(),'" + Button1 + "')]"))

  getActionButton2 = (Button2) => element(by.xpath("//button[contains(text(),'" + Button2 + "')]"))

  getActionButton3 = (Button3) => element(by.xpath("//button[contains(text(),'" + Button3 + "')]"))

  getReviewButton = () => element(by.xpath("//button[contains(text(),'REVIEW')]"))
  getDenyButton = () => element(by.xpath("//button[contains(text(),'DENY')]"))
  //button[contains(text(),'REQUEST MORE-INFO.')]
  getRequestMoreInfoButton = () => element(by.xpath("//button[contains(text(),'REQUEST MORE-INFO')]"))

  getEditButton = () => element(by.xpath("//span[contains(text(),'EDIT')]"))

  getTitleVerbage(Request_Type) {
    let title = '';
    switch (Request_Type) {
      case "INBOUND": title = "Inbound Disruption"; break;
      case "OUTBOUND": title = "Oubound Disruption"; break;
      case "BOTH INBOUND AND OUTBOUND": title = "Inbound / Outbound Disruption"; break;
    }
    console.log(title);
    return title;
  }

  getTitleText = (Request_Type) => element(by.xpath("//h3[contains(text(),'" + this.getTitleVerbage(Request_Type) + "')]"));

  async openRequestDialog() {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getDisruptionServiceCode()), 3000, 'Request disruption page did not appear')
    //let EC = browser.ExpectedConditions;
    //return browser.wait(EC.visibilityOf(this.getRegionDropdown()))
  }

  async effectiveDate(value) {
    if (value == "All") {
      await expect(this.getTodaydate(today).isEnabled()).to.eventually.equal(true);
      await expect(this.getMinusoneday(onedayBack).isEnabled()).to.eventually.equal(true);
      await expect(this.getMinustwoday(twodaysBack).isEnabled()).to.eventually.equal(true);
      await expect(this.getMinusthreeday(ThreedaysBack).isEnabled()).to.eventually.equal(true);
      await expect(this.getMinusfourday(fourdaysBack).isEnabled()).to.eventually.equal(true);
      //await expect(this.getMinusfiveday(fivedaysBack).isEnabled()).to.eventually.equal(true);
      await expect(this.getplusoneday(plusoneday).isEnabled()).to.eventually.equal(true);
    }
    else if (value == "today") {
      await this.getTodaydate(today).click();
    }
    else if (value == "minus1") {
      await this.getMinusoneday(onedayBack).click();
    }
    else if (value == "minus2") {
      await this.getMinustwoday(twodaysBack).click();
    }
    else if (value == " minus3") {
      await this.getMinusthreeday(ThreedaysBack).click();
    }
    else if (value == "minus4") {
      await this.getMinusfourday(fourdaysBack).click();
    }
    else if (value == "plus1") {
      await this.getplusoneday(plusoneday).click();
    }
  }


  async DisruptionServiceCode(Disruption_Service_Code) {
    await browser.wait(EC.visibilityOf(this.getDisruptionServiceCode()), 8000, 'Disruption service code did not appear')
    // await this.getDisruptionServiceCode().click();
    await browser.actions().mouseMove(this.getDisruptionServiceCode()).click().perform()
    console.log('Disruption service code dropdown clicked');

    await browser.wait(EC.visibilityOf(element(by.cssContainingText('span', Disruption_Service_Code))), 5000, 'Disruption service code element did not appear')
    await element(by.cssContainingText('span', Disruption_Service_Code)).click();
    console.log('Disruption service code dropdown selected');

    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))), 3000, 'did not close')

    // await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.cssContainingText('span',Disruption_Service_Code))),2000,'did not close')
    // await this.getDservicecode().click()
    // console.log('Disruption service code dropdown clicked');
    // browser.sleep(1000)
    // await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.cssContainingText('span',Disruption_Service_Code))),2000,'did not close')
    // await element(by.cssContainingText('span',Disruption_Service_Code)).click();
    // console.log('Disruption service code dropdown selected');
  }

  async OutboundDelayType(Outbound_Delay_Type, Outbound_Delay_Type_Flag) {
    if (Outbound_Delay_Type_Flag == '1') {
      await browser.wait(EC.visibilityOf(this.getOutbounddelaycode()), 3000, 'outbound delay code did not appear')
      await this.getOutbounddelaycode().click()
      console.log('Outbound Delay Type Code dropdown clicked');
      browser.sleep(1000)
      await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.cssContainingText('span', Outbound_Delay_Type))), 2000, 'did not close')
      await element(by.cssContainingText('span', Outbound_Delay_Type)).click();
      browser.sleep(1000)
      await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-panel ']"))), 2000, 'did not close')
      console.log('Outbound Delay Type dropdown selected');
    }
  }

  async ImpactedLevel(impacted_level, Impacted_Products, Cons_No, No_Of_Pieces, Total_Pieces) {
    if (impacted_level === "Location Level") {
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getlocationLevel()), 3000, 'Location Level did not appeared');
      await this.getlocationLevel().click();
      browser.sleep(3000)
      console.log('Location Level Selected');
      let validationmsg = await this.getAllProducts().getText();
      console.log(validationmsg);
      expect(validationmsg).to.equal("All Products Impacted");
    }
    else if (impacted_level === "Product Level") {
      await browser.wait(browser.ExpectedConditions.elementToBeClickable(this.getProductLevel()), 3000, 'Product Level did not appeared');
      await this.getProductLevel().click();
      console.log('Product Level Selected');

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getSelectImpactedProducts()), 3000, 'impacted products did not appear')
      await this.getSelectImpactedProducts().click();
      console.log('Impacted Product Clicked');

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getImpactedProductsElement(Impacted_Products)), 7000, 'impacted products element did not appear')
      //  await this.getImpactedProductsElement(impacted_products).click();
      await browser.actions().mouseMove(this.getImpactedProductsElement(Impacted_Products)).click().perform()
      console.log('Impacted Product Selected');

      //  await element(by.cssContainingText('span',impacted_products)).click();
      //  console.log('Impacted Product Selected');
      //  await browser.sleep(1000)

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.GetImpactedProductsAdd()), 4000, 'impacted products did not appear')
      await this.GetImpactedProductsAdd().click();
      console.log('Impacted Product Add Button Clicked');

    }
    else if (impacted_level === "Cons Level") {
      console.log('cons level')
      await browser.wait(browser.ExpectedConditions.elementToBeClickable(this.getConsLevel()), 5000, 'cons Level did not appeared');
      await this.getConsLevel().click();
      console.log('Cons Level Selected');

      await browser.wait(browser.ExpectedConditions.elementToBeClickable(this.getAddConsDataButton()), 3000, 'add cons button did not appeared');
      await this.getAddConsDataButton().click();
      console.log('Add cons data button clicked');

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getConsInput()), 2000, 'cons field did not appear');
      await this.getConsInput().sendKeys(Cons_No);
      console.log('Cons # entered');

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getPiecesInput()), 2000, '# of pieces did not appear');
      await this.getPiecesInput().sendKeys(No_Of_Pieces);
      console.log('# of pieces entered');

      await browser.wait(browser.ExpectedConditions.elementToBeClickable(this.getAddConsDataButton()), 3000, 'Add icon did not appear');
      await this.getConsPiecesAddButton().click();
      console.log('Add icon in add cons data dialog clicked');

      await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//input[@ng-reflect-model='" + Cons_No + "']"))), 8000, 'Added Cons data did not appear');

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getTotalPieces()), 5000, 'total no of pieces did not appear');

      let TotalPieces = await this.getTotalPieces().getAttribute('ng-reflect-model');
      console.log('Actual Total Pieces ' + TotalPieces)
      console.log('Expected Total Pieces ' + Total_Pieces)

      if (Total_Pieces == TotalPieces) {
        console.log('Total no of Pieces displaying properly');
      }
      else {
        console.log('Total Pieces displaying is wrong')
      }

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getConsDataSaveButton()), 3000, 'total no of pieces did not appear');
      await this.getConsDataSaveButton().click();
      console.log('Save button clicked');

      await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dialog-content ui-widget-content']"))), 10000, 'cons dialog box did not close')
             
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getTotalConsLabel()), 10000, 'total no of cons label did not appear');

      // var TotalPiecesAfterSave = await this.getTotalPiecesAfterSave().getAttribute('ng-reflect-model');
      // console.log('Actual Total Pieces after save '+TotalPiecesAfterSave)
      // console.log('Expected Total Pieces before save '+TotalPieces)

      // if(TotalPieces == TotalPiecesAfterSave)
      // {
      //  console.log('Total Pieces after save is displaying is correct');
      // }
      // else 
      // {
      //   console.log('Total Pieces after save is displaying is wrong')
      // }

      // await browser.wait(browser.ExpectedConditions.visibilityOf(this.getConsEditButton()),3000,'edit cons button did not appear');

      //span[@id='Cons_Edit_Btn']
    }
  }

  async VolumeDisruption(EstimatedDisruptedVol, AverageDisruptedVol) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getEstimatedDisruptedVolume()), 3000, 'did not close')
    await this.getEstimatedDisruptedVolume().sendKeys(EstimatedDisruptedVol);
    console.log('Estimated Disrupted Vol entered');
    browser.sleep(1000)

    await this.getAverageDisruptedVolume().sendKeys(AverageDisruptedVol);
    console.log('Average Disrupted Vol enterded');

    browser.sleep(2000)

    let ActualPercoftotaldisruptablevol = await this.getPercentageVol().getAttribute('value');

    let ActualPercoftotaldisruptablevolNum = + ActualPercoftotaldisruptablevol;

    let ExpectedPercoftotaldisruptablevol = (EstimatedDisruptedVol / AverageDisruptedVol) * 100;

    console.log("ActualPercoftotaldisruptablevolNum");
    console.log(ActualPercoftotaldisruptablevol);
    console.log("ExpectedPercoftotaldisruptablevol");
    console.log(ExpectedPercoftotaldisruptablevol);

    if (ActualPercoftotaldisruptablevolNum == ExpectedPercoftotaldisruptablevol) {
      console.log('Percentage of total disruptable vol is same as expected');
    }

  }

  async CommentsSection(comments) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getComments()), 3000, 'did not attended')
    await this.getComments().sendKeys(comments);
    browser.sleep(1000)
    console.log('Comments entered: ' + comments);

  }

  async FlightOrTruckValidation(Truck_Or_Flight, Truck_Or_Flight_NO, Truck_Or_Flight_Code, Truck_Or_Flight_Delay_Time) 
  {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getAddTruckOrFlightButton()), 3000, 'Add Truck or Flight did not appeared')
    await this.getAddTruckOrFlightButton().click();
    browser.sleep(5000)
    console.log('Add Truck Or Flight Button Clicked');

    if (Truck_Or_Flight == "FLIGHT") {
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckButton(Truck_Or_Flight)), 2000, ' Truck or Flight did not appeared')
      await this.getFlightOrTruckButton(Truck_Or_Flight).click();
      console.log('Flight Selected');
    }
    else if (Truck_Or_Flight == "TRUCK") {
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckButton(Truck_Or_Flight)), 2000, ' Truck or Flight did not appeared')
      await this.getFlightOrTruckButton(Truck_Or_Flight).click();
      //browser.sleep(5000)  
      console.log('Truck Selected');
    }

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckNo()), 1000, ' Truck or Flight No did not attended')
    await this.getFlightOrTruckNo().sendKeys(Truck_Or_Flight_NO);
    browser.sleep(1000);
    console.log('Flight Or Truck No entered : ' + Truck_Or_Flight_NO);

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckCode()), 3000, ' Truck or Flight Code did not appeared')
    await this.getFlightOrTruckCode().click();
    console.log('Truck Or Flight Code clicked')

    browser.sleep(1000)
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckCodeSelect(Truck_Or_Flight_Code)), 3000, ' Truck or Flight value did not appeared')
    await this.getFlightOrTruckCodeSelect(Truck_Or_Flight_Code).click();
    console.log('Truck Or Flight Code: ' + Truck_Or_Flight_Code);

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckDelayTime()), 4000, ' Truck or Flight Delay Time did not appeared')
    await this.getFlightOrTruckDelayTime().sendKeys(Truck_Or_Flight_Delay_Time);
    browser.sleep(2000);
    console.log('Flight Or Truck Delay Time entered');

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckAddButton()), 3000, 'Truck or Flight Add Button did not appeared')
    await this.getFlightOrTruckAddButton().click();
    browser.sleep(1000);
    console.log('Flight Or Truck Add Button clicked');

    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("ui-dropdown-items-wrapper"))), 3000, 'flight code dropdown did not close')

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getTOrFDialogBoxSaveButton()), 3000, 'did not attended')

    await this.getTOrFDialogBoxSaveButton().click();

    console.log('Flight Or Truck save button clicked');
    browser.sleep(3000);

    await browser.wait(browser.ExpectedConditions.presenceOf(this.getAddedTruckFlight(Truck_Or_Flight_Code)), 8000, 'added truck or flight did not appeared')

  }

  async AddTruckOrFlight(Truck_Or_Flight) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getAddTruckOrFlightButton()), 3000, 'Add Truck or Flight did not appeared')
    await this.getAddTruckOrFlightButton().click();
    browser.sleep(5000)
    console.log('Add Truck Or Flight Button Clicked');

    if (Truck_Or_Flight == "FLIGHT") {
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckButton(Truck_Or_Flight)), 2000, ' Truck or Flight did not appeared')
      await this.getFlightOrTruckButton(Truck_Or_Flight).click();
      console.log('Flight Selected');
    }
    else if (Truck_Or_Flight == "TRUCK") {
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckButton(Truck_Or_Flight)), 2000, ' Truck or Flight did not appeared')
      await this.getFlightOrTruckButton(Truck_Or_Flight).click();
      //browser.sleep(5000)  
      console.log('Truck Selected');
    }
  }

  async FlightOrTruckNo(Truck_Or_Flight_NO) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckNo()), 1000, ' Truck or Flight No did not attended')
    await this.getFlightOrTruckNo().sendKeys(Truck_Or_Flight_NO);
    browser.sleep(1000);
    console.log('Flight Or Truck No entered : ' + Truck_Or_Flight_NO);
  }

  async FlightOrTruckCode(Truck_Or_Flight_Code) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckCode()), 3000, ' Truck or Flight Code did not appeared')
    await this.getFlightOrTruckCode().click();
    console.log('Truck Or Flight Code clicked')

    browser.sleep(1000)
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckCodeSelect(Truck_Or_Flight_Code)), 3000, ' Truck or Flight value did not appeared')
    await this.getFlightOrTruckCodeSelect(Truck_Or_Flight_Code).click();
    console.log('Truck Or Flight Code: ' + Truck_Or_Flight_Code);
  }

  async FlightOrTruckDelayTime(Truck_Or_Flight_Delay_Time) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckDelayTime()), 4000, ' Truck or Flight Delay Time did not appeared')
    await this.getFlightOrTruckDelayTime().click();
    await this.getFlightOrTruckDelayTime().sendKeys(Truck_Or_Flight_Delay_Time);

    // await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//p-inputmask[@placeholder='hh:mm']"))), 3000, 'Delay Time Entered did not appeared')
    
    //p-inputmask[@placeholder='hh:mm']
    browser.sleep(2000);
    console.log('Flight Or Truck Delay Time entered');

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getFlightOrTruckAddButton()), 3000, 'Truck or Flight Add Button did not appeared')
    await this.getFlightOrTruckAddButton().click();
    browser.sleep(1000);
    console.log('Flight Or Truck Add Button clicked');

  }

  async FlightOrTruckSaveButton(Truck_Or_Flight_Code) {
    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("ui-dropdown-items-wrapper"))), 3000, 'flight code dropdown did not close')
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getTOrFDialogBoxSaveButton()), 3000, 'did not attended')

    await this.getTOrFDialogBoxSaveButton().click();

    console.log('Flight Or Truck save button clicked');
    browser.sleep(3000);

    await browser.wait(browser.ExpectedConditions.presenceOf(this.getAddedTruckFlight(Truck_Or_Flight_Code)), 8000, 'added truck or flight did not appeared')

    //td[contains(text(),'A3')]
  }

  async WebsiteLink(Website_Link) {
    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dialog-content ui-widget-content']"))), 3000, 'Website Link did not appeared')
    await this.getWebsiteLink().click();
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getWebsiteLink()), 3000, 'Website Link did not appeared')
    await this.getWebsiteLink().sendKeys(Website_Link);
    browser.sleep(2000);
    console.log('Website Link entered');

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getAddWebsiteLinkBtn()), 2000, 'Website Link Add Button did not appeared')
    await this.getAddWebsiteLinkBtn().click();
    browser.sleep(1000);
    console.log('Website Link Add button clicked');

  }

  async ImpactedLocationsEntireMarket() {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getEntireMarket()), 5000, 'Entire Market did not appeared')
    await this.getEntireMarket().click();
    browser.sleep(1000)
    console.log('Entire Market Selected');
  }

  async ImpactedLocationsSpecificLocations(Ramp_ID, Specific_Locations_Flag, SpecificLoc_LocationID, SpecificLoc_LocID_LocName) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getRampID()), 3000, 'Ramp ID did not appeared')
    await this.getRampID().sendKeys(Ramp_ID);

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getRampIDElement(Ramp_ID)), 3000, 'Ramp ID did not appeared')
    await this.getRampIDElement(Ramp_ID).click();

    browser.sleep(1000)
    console.log('Ramp ID entered');

    if (Specific_Locations_Flag == 0) {
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getEntireMarket()), 1000, 'Specific Locations radio button did not appeared')
      await this.getEntireMarket().click();
      console.log('Entire Market Selected');
    }
    else if (Specific_Locations_Flag == 1) {
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getSpecificLocations()), 1000, 'Specific Locations radio button did not appeared')
      await this.getSpecificLocations().click();
      browser.sleep(3000)
      console.log('Specific locations Selected');

      await browser.wait(EC.visibilityOf(this.getSpecificLocLocationID()), 5000, 'Specific Locations Location ID did not appeared')
      //await this.getSpecificLocLocationID().click();
      await this.getSpecificLocLocationID().sendKeys(SpecificLoc_LocationID);
      console.log('Specific Locations Location ID entered')

      await browser.wait(EC.visibilityOf(this.getSpecificLocationIDName(SpecificLoc_LocID_LocName)),5000, 'Specific Locations Location ID did not appeared')
      await this.getSpecificLocationIDName(SpecificLoc_LocID_LocName).click();
      browser.sleep(1000)
      console.log('Specific Locations Location ID - Location Name selected');

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getSpecificLocLocationIDAddButton()), 3000, 'Location ID Add Button did not appeared')
      await this.getSpecificLocLocationIDAddButton().click();
      browser.sleep(1000)
      console.log('Location ID Add Button clicked');

    }
  }

  async AdditionalLocations(AdditionalLoc_LocationID, AdditionalLoc_LocID_LocName, Additional_Location_Flag) {

    if (Additional_Location_Flag == 1) {
      console.log('Additional location Selected');
      browser.sleep(1000)
      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getAdditionalLocations()), 3000, 'Additional locations did not appeared')
      await this.getAdditionalLocations().click();
      console.log('Additional location clicked');

      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getAdditionalLocLocationID()), 6000, 'Additional Locations LocationID did not appeared')
      await this.getAdditionalLocLocationID().sendKeys(AdditionalLoc_LocationID);
      console.log('Additional Locations Location ID entered')

      await browser.wait(EC.visibilityOf(this.getAdditionalLocLocationIDName(AdditionalLoc_LocID_LocName)), 8000, 'Additional Locations Location ID - Location Name did not appeared')
      await this.getAdditionalLocLocationIDName(AdditionalLoc_LocID_LocName).click();
      browser.sleep(1000)
      console.log('Additional Locations Location ID - Location Name selected');


      await browser.wait(browser.ExpectedConditions.visibilityOf(this.getAdditionalLocLocationIDAddButton()), 2000, 'Additional Locations Location ID Add Button did not appeared')
      await this.getAdditionalLocLocationIDAddButton().click();
      browser.sleep(1000)
      console.log('Location ID Add Button clicked');
    }
    else if (Additional_Location_Flag == 0) {
      console.log('Additional Locations not required')
    }
  }

  //Local Conditions
  async LocalConditions(Local_Conditions_Group, Local_Conditions_Value) {
    //Local Conditions Group
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getlocalConditionsGroup()), 5000, 'local Conditions Group did not appeared')
    await this.getlocalConditionsGroup().click();
    console.log('Local Conditions Group clicked');
    browser.sleep(1000)

    await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.cssContainingText('span', Local_Conditions_Group))),4000, 'Local Conditions Group value not appeared')
    await element(by.cssContainingText('span', Local_Conditions_Group)).click();
    console.log('Local Conditions Group dropdown selected');
    browser.sleep(1000)

    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))),4000, 'Local Conditions Group dropdown did not closed')

    //local Condition
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getLocalConditions()), 2000, 'Local Conditions did not appeared')
    await this.getLocalConditions().click();
    console.log('Local Conditions clicked');
    browser.sleep(2000)

    //await browser.wait(browser.ExpectedConditions.elementToBeClickable(element(by.cssContainingText('span',Localconditions))),3000,'Local Conditions not appeared')
    await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//span[contains(text(),'" + Local_Conditions_Value + "')]"))), 3000, 'Local Conditions value did not appeared')
    browser.sleep(1000)
    await element(by.xpath("//span[contains(text(),'" + Local_Conditions_Value + "')]")).click();
    //await element(by.xpath("//span[contains(text(),'"+LocalconditionsValue+"')]")).click();
    console.log('Local Conditions dropdown selected');
    browser.sleep(1000)

    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))), 2000, 'Local Conditions value did not appeared')
    await this.getLocalConditionsAddButton().click();
    browser.sleep(3000)
  }

  async SubmitAction() {
    await browser.wait(EC.visibilityOf(this.getSubmitForReviewBtn()), 3000, 'Submit button is not clickable')
    await this.getSubmitButton().click();


    browser.sleep(5000)
    console.log('Submit Button Clicked');
  }




  async InboundAnd0rOutBound(Inbound_and_or_Outbound) {
    await browser.wait(EC.visibilityOf(this.getInboundAndOrOutbound()), 3000, 'Inbound And Or Outbound did not appeared')
    await this.getInboundAndOrOutbound().click()
    console.log('Inbound And Or Outbound Clicked');

    //await browser.wait(EC.visibilityOf(this.getInboundAndOrOutboundElement(Inbound_and_or_Outbound)),5000,'Inbound And Or Outbound Element did not appeared')
    await this.getInboundAndOrOutboundElement(Inbound_and_or_Outbound).click()
    console.log('Inbound And Or Outbound Element selected');

    await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))), 6000, 'Inbound Outbound did not appeared')
    browser.sleep(7000);
  }

  async RegionalDistrictNational(Region_District_National, Regional_Code, District_Code) {
    if (Region_District_National == "Regional Level") {
      await browser.wait(EC.visibilityOf(this.getRegionalLevel()), 3000, 'Regional Level Button did not appeared')
      await this.getRegionalLevel().click();
      console.log('Regional Level Selected')

      await browser.wait(EC.visibilityOf(this.getRegionalCode()), 5000, 'Regional Code did not appeared')
      await this.getRegionalCode().click();
      console.log('Regional code clicked')

      await browser.wait(EC.visibilityOf(this.getRegionalCodeElement(Regional_Code)), 4000, 'Regional Code element did not appeared')
      await this.getRegionalCodeElement(Regional_Code).click();
      console.log('Regional code element Selected')

      await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))), 3000, 'Region code dropdown value did not appeared')


    }
    else if (Region_District_National == "District Level") {
      //await browser.wait(EC.elementToBeClickable(this.getDistrictLevel()),8000,'District Level Button did not appeared')
      await this.getDistrictLevel().click();
      console.log('District Level Selected')

      await browser.wait(EC.elementToBeClickable(this.getDistrictCode()), 5000, 'District Code did not appeared')
      await this.getDistrictCode().click();
      console.log('District code clicked')

      await browser.wait(EC.elementToBeClickable(this.getDistrictCodeElement(District_Code)), 9000, 'District Code element did not appeared')
      await this.getDistrictCodeElement(District_Code).click();

      console.log('District code element Selected')
      
      await browser.wait(browser.ExpectedConditions.invisibilityOf(element(by.xpath("//div[@class='ui-dropdown-items-wrapper']"))), 3000, 'Region code dropdown value did not appeared')


    }

    else if (Region_District_National == "National Level") {
      await browser.wait(EC.visibilityOf(this.getNational_Level()), 6000, 'National Level Button did not appeared')
      await this.getNational_Level().click();
      console.log('National Level Selected')

      expect(this.getNorthEast_Label().isPresent()).to.eventually.equal(true)
      expect(this.getNorthEast_Label().getAttribute('disabled')).to.eventually.equal("true")
      console.log('EWRVK - Northeast is Present and Disabled')

      expect(this.getSouthEast_Label().isPresent()).to.eventually.equal(true)
      expect(this.getSouthEast_Label().getAttribute('disabled')).to.eventually.equal("true");
      console.log('OLVVK - Southeast is Present and Disabled')

      expect(this.getPacificWest_Label().isPresent()).to.eventually.equal(true)
      expect(this.getPacificWest_Label().getAttribute('disabled')).to.eventually.equal("true");
      console.log('SMFVK - Pacific West is Present and Disabled')

      expect(this.getMidWest_Label().isPresent()).to.eventually.equal(true)
      expect(this.getMidWest_Label().getAttribute('disabled')).to.eventually.equal("true");
      console.log('ORDVK - Mid-West is Present and Disabled')

      expect(this.getAGFSEastern_Label().isPresent()).to.eventually.equal(true)
      expect(this.getAGFSEastern_Label().getAttribute('disabled')).to.eventually.equal("true");
      console.log('EASVK - AGFS Eastern is Present and Disabled')

      expect(this.getAGFSWest_Label().isPresent()).to.eventually.equal(true)
      expect(this.getAGFSWest_Label().getAttribute('disabled')).to.eventually.equal("true");
      console.log('WESVK - AGFS West is Present and Disabled')

    }
  }

  async ConsFileUpload(Cons_Data_File, Total_Pieces) {
    console.log('cons level')
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getConsLevel()), 2000, 'cons Level did not appeared');
    await this.getConsLevel().click();
    browser.sleep(3000)
    console.log('Cons Level Selected');

    await this.getAddConsDataButton().click();
    browser.sleep(5000)
    console.log('Add cons data button clicked');

    // await this.getUploadButton().click();

    // var form = element.(By.css('form'));
    // var element = form.findElement(By.css('input[type=file]'));
    // element.sendKeys('/path/to/file.txt');
    // form.submit();
    // set file detector
    try {
      var remote = require('protractor/node_modules/selenium-webdriver');
    } catch (e) {
      var remote = require('selenium-webdriver');
    }

    // var remote = require('../../node_modules/protractor/node_modules/selenium-webdriver/remote');
    //  browser.setFileDetector(new remote.FileDetector());

    var util = require('util');
    let path = require('path');


    //  var fileToUpload = "C:/Users/pushpalatha.j/Documents/Pushpalatha.J/projects/capr/testing/service-disruption/src/main/webapp/e2e/ConsData/ConsignementList2.xlsx";
    var fileToUpload = "C:/Users/pushpalatha.j/Downloads/ConsignementList2.xlsx";

    //  var fileToUpload = Cons_Data_File
    var absolutePath = path.resolve(__dirname, fileToUpload);

    var remote = require('selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());

    //  $('input[type="file"]').sendKeys(absolutePath);
    browser.sleep(1500);

    //  await browser.wait(browser.ExpectedConditions.visibilityOf(this.getUploadButton()),8000,'upload button did not appear');
    // await this.getUploadButton().click();
    // console.log('upload button clicked');

    await this.getUploadButton().sendKeys(absolutePath);

    // await element(by.id('Uplaod_Btn')).click();


    //  await browser.wait(browser.ExpectedConditions.visibilityOf(this.getUploadButton()),8000,'upload button did not appear');
    //   await this.getUploadButton().click();
    //   console.log('upload button clicked');

    //  var record = element(by.css('.scrollbar scrollStyle .impactProject ng-star-inserted'))
    //  var record1 = element(by.css('.scrollbar scrollStyle .impactProject ng-star-inserted')).count()
    //  var recordlength = record.length();
    //  console.log(recordlength)
    //  console.log(record1)

    //expect(element.length).toEqual(21);


    await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//div[@class='impactProject ng-star-inserted']"))), 25000, 'first row cons data did not appear');
    console.log('file uploaded');

    await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.id("Model_Total_Pieces"))), 5000, 'total no of pieces did not appear');
    var TotalPieces = await this.getTotalPieces().getText();
    console.log('Actual Total Pieces' + TotalPieces)
    console.log('Expected Total Pieces' + Total_Pieces)

    if (Total_Pieces == TotalPieces) {
      console.log('Total no of Pieces uploaded are same as before');
    }

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getConsDataSaveButton()), 3000, 'save button did not appear');
    await this.getConsDataSaveButton().click();
    console.log('Save button clicked');

  }

  async Logout() {

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getLogoutButton()), 5000, 'Logout Button did not appeared')
    await browser.actions().mouseMove(this.getLogoutButton()).click().perform()
    // await browser.driver.manage().deleteAllCookies(); 
    // await browser.executeScript('window.sessionStorage.clear();');
    // await browser.executeScript('window.localStorage.clear();');

  
    console.log('Logout Button Clicked');
  
    // await browser.wait(EC.elementToBeClickable(this.getLogoutDropdown()),8000,'Logout Dropdown did not appeared')
    // await this.getLogoutDropdown().click();
    // browser.sleep(1000)  
    // console.log('Logout option selected');
  }

  async EditComments(Edit_Comments) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getComments()), 5000, 'Edit comments did not attended')
    await this.getComments().sendKeys(Edit_Comments);
    browser.sleep(1000)
    console.log('Comments entered: ' + Edit_Comments);


  }

  async AvailableActionButtons(Button1, Button2, Button3) {
    var sgpt = require('sg-protractor-tools');

    sgpt.scroll.scrollTo(this.getActionButton1(Button1));

    //let EC = browser.ExpectedConditions
    //browser.wait(EC.presenceOf(requestPage.getReviewButton()),2000);
    expect(this.getActionButton1(Button1).isPresent()).to.eventually.equal(true)
    expect(this.getActionButton2(Button2).isPresent()).to.eventually.equal(true)
    expect(this.getActionButton3(Button3).isPresent()).to.eventually.equal(true)
  }


  async NotificationSections(Notification_Emp_ID, Notification_Mail_ID) {
    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getNotification()), 5000, 'Notifications Emp Id did not appeared')
    browser.actions().mouseMove(this.getNotification()).click().perform()
    // console.log('Notifications Clicked');

    await this.getNotification().sendKeys(Notification_Emp_ID);
    // await browser.wait(browser.ExpectedConditions.visibilityOf(this.getNotificationEmpID(Notification_Emp_ID)),5000,'Logout Button did not appeared')
    // browser.actions().mouseMove(this.getNotification()).sendKeys(Notification_Emp_ID).perform()
    console.log('Notifications Emp Id Entered');

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getNotificationMailID(Notification_Mail_ID)), 8000, 'Notifications Mail Id did not appeared')
    browser.actions().mouseMove(this.getNotificationMailID(Notification_Mail_ID)).click().perform()
    console.log('Notifications Mail ID Selected');

    await browser.wait(browser.ExpectedConditions.visibilityOf(this.getNotificationAddIcon()), 8000, 'Notifications Mail Id did not appeared')
    browser.actions().mouseMove(this.getNotificationAddIcon()).click().perform()
    console.log('Notifications Add Icon Clicked');

    await browser.wait(browser.ExpectedConditions.visibilityOf(element(by.xpath("//div[@class='ui-panel-content ui-widget-content']"))), 5000, 'first row cons data did not appear');
    
    
  }

};