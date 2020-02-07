// import { chaiAsPromised } from "chai-as-promised";
import { chaiAsPromised } from "chai-as-promised";
import { AppPage } from "../pages/app.po";
import { Before, Given, Then, When, After, AfterAll, ScenarioResult } from "cucumber";
//import { expect } from "chai";
import { QueuePage } from '../pages/queue.po';
import { browser, protractor, element, by, until, Browser } from 'protractor';
import { RequestPage } from '../pages/request-page.po';

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var EC = protractor.ExpectedConditions;


const assert = chai.assert;
const should = chai.should;
var expect = chai.expect;

export class sdPage {
    getLocID = () => element(by.xpath("//input[@id='locationField']"))
    getGo = () => element(by.xpath("//button[@class='primaryButton']"))
    getRequestNewDelayButton = () => element(by.xpath("//button[@id='reqnewdelay']"))

    getLocationLevel = () => element(by.xpath("//p-dropdown[@id='locationLevel']"));
    getLocationLevelElement = (Location_Level) => element(by.xpath("//li//span[contains(text(),'" + Location_Level + "')]"))
    getLocationID = () => element(by.xpath("//span[@class='ng-tns-c21-6 ui-autocomplete ui-widget']//input"));
    getLocationIDElement = (Location_ID) => element(by.xpath("//span[contains(text(),'" + Location_ID + "')]"))
    getRollDownLocationCheckBox = () => element(by.xpath("//p-checkbox[@id='rolldowncheckbox']"));

    getEditDelayType = () => element(by.xpath("//p-dropdown[@id='delayType']"))
    getDelayType = () => element(by.xpath("//label[contains(text(),'Select Delay Type')]"))
    getDelayTypeElement = (Delay_Type) => element(by.xpath("//span[contains(text(),'" + Delay_Type + "')]"))
    getFlight = () => element(by.xpath("//label[contains(text(),'FLIGHT')]"))
    getTruck = () => element(by.xpath("//label[contains(text(),'TRUCK')]"))
    getDelayTime = () => element(by.xpath("//input[@placeholder='Enter Delay']"))

    getCauseOfDelay = (Cause_Of_Delay) => element(by.xpath("//label[contains(text(),'" + Cause_Of_Delay + "')]"))
    getComments = () => element(by.xpath("//textarea[@id='comment']"))
    getUpdateComments = () => element(by.xpath("//textarea[@placeholder='Enter Your Comments Here']"))
    getWebsiteLink = () => element(by.xpath("//input[@id='weblinkInp']"))
    getAddWebsiteLinkBtn = () => element(by.xpath("//div[@class='fdx-sdd-add-input']//span[@class='box-add']//span[@class='icon']"));


    getEST_AA_DELV = () => element(by.xpath("//P-INPUTMASK[@id='estAADelv']/INPUT[1]"))
    getEST_AM_DELV = () => element(by.xpath("//p-inputmask[@id='estAMDelv']//INPUT[1]"))
    getEST_PM_DELV = () => element(by.xpath("//p-inputmask[@id='estPMDelv']//INPUT[1]"))
    getEST_on_road = () => element(by.xpath("//p-inputmask[@id='etaOnRoad']//INPUT[1]"))
    getHAL_ODA_available = () => element(by.xpath("//p-inputmask[@id='halODAAvailable']//INPUT[1]"))

    getSameDayReattempts_Yes = () => element(by.xpath("//p-radiobutton[@id='sameDay']"))
    // getSameDayReattempts_No = () => element(by.xpath("//p-radiobutton[@id='reAtmpt']"))
    getSameDayReattempts_No = () => element(by.xpath("//p-radiobutton[@id='reAtmpt']//label[contains(text(),'NO')]"))

    getCourierContact_Yes = () => element(by.xpath("//p-radiobutton[@id='courier']"))
    // getCourierContact_No = () => element(by.xpath("//p-radiobutton[@id='contact']"))
    getCourierContact_No = () => element(by.xpath("//p-radiobutton[@id='contact']//label[contains(text(),'NO')]"))

    getPUAffected_Yes = () => element(by.xpath("//p-radiobutton[@id='puAffect']"))
    // getPUAffected_No = () => element(by.xpath("//p-radiobutton[@id='puAffected']"))
    getPUAffected_No = () => element(by.xpath("//p-radiobutton[@id='puAffected']//label[contains(text(),'NO')]"))

    getEmpID = () => element(by.xpath("//input[@id='contdetail']"))
    getAddEmpIcon = () => element(by.xpath("//div[@id='addempdetail']"))
    getEmployeeName = (Emp_Name) => element(by.xpath("//span[contains(text(),'" + Emp_Name + "')]"))
    getEmployeeID = (Emp_ID) => element(by.xpath("//span[contains(text(),'" + Emp_ID + "')]"))

    getCreateDelayButton = () => element(by.xpath("//div[@class='ui-g submitDiv ui-g-nopad ng-star-inserted']//button[1][contains(text(),'CREATE DELAY')]"))

    getCancelButton = () => element(by.xpath("//button[@class='btn fedex-btn cancel']"))

    getDelayID = () => element(by.xpath("//input[@placeholder='Delay ID']"))

    getFirstRecordLocID = () => element(by.xpath("//tbody[@class='ui-table-tbody']//tr[1]//td[3]"))
    getFirstRecordComments = () => element(by.xpath("//tbody[@class='ui-table-tbody']//tr[1]//td[11]//a"))

    getSearchIcon = () => element(by.xpath("//i[@class='fa fa-search search_icon']"))
    getEditButton = () => element(by.xpath("//tr[1]//td[12]//div[1]//button[2]//b[contains(text(),'Edit')]"))

    getDelayType_Edit = () => element(by.xpath("//p-dropdown[@id='delayType']"))
    getDelayLabel = () => element(by.xpath("//label[@class='label'][contains(text(),'Delay Type')]"))
    getDelayTypeElement_Edit = (Delay_Type_Edit) => element(by.xpath("//span[contains(text(),'" + Delay_Type_Edit + "')]"))

    getFlight_Edit = () => element(by.xpath("//label[contains(text(),'FLIGHT')]"))
    getTruck_Edit = () => element(by.xpath("//label[contains(text(),'TRUCK')]"))
    getDelayTime_Edit = () => element(by.xpath("//input[@placeholder='Enter Delay']"))

    getEditComments = () => element(by.xpath("//textarea[@id='comment']"))

    getTable = () => element(by.xpath("//div[@class='ui-table-wrapper ng-star-inserted']//table"))
    getPageNextArrowRight = () => element(by.xpath("//span[@class='ui-paginator-icon pi pi-caret-right']"))
    getPageNextArrowLeft = () => element(by.xpath("//a[@class='ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all ui-state-disabled']"))


    getTable1 = () => element(by.xpath("//tbody[@class='ui-table-tbody']"))
    getTableRow = (rowId) => element(by.xpath("//tr[" + rowId + "]//td[11]//a[1]"))
    getPageNextArrow = () => element(by.xpath("//a[@class='ui-paginator-next ui-paginator-element ui-state-default ui-corner-all']"))
    getPageNextArrow1 = () => element(by.xpath("//a[@class='ui-paginator-next ui-paginator-element ui-state-default ui-corner-all']//span[@class='ui-paginator-icon pi pi-caret-right']"))
    getLeftArrow = () => element(by.xpath("//a[@class='ui-paginator-prev ui-paginator-element ui-state-default ui-corner-all ui-state-disabled']//span[@class='ui-paginator-icon pi pi-caret-left']"))

    getCommentsXPATH = () => element(by.xpath("//tr[1]//td[11]"))
    getTrashBtn = () => element(by.xpath("//tr[1]//td[12]//i[@class='pi pi-trash']"))
    getYesBtn_Confirmation = () => element(by.xpath("//button[contains(text(),'Yes')]"))
    getFilter = () => element(by.xpath("//b[contains(text(),'SHOW FILTER')]"))
    getLocationIDinFilterSection = () => element(by.xpath("//input[@id='locationCd']"))
    getApplyBtn = () => element(by.xpath("//button[contains(text(),'Apply')]"))
    getStatus = () => element(by.xpath("//tr[1]//td[2]"))

    // getFilter=()=>element(by.xpath("//b[contains(text(),'SHOW FILTER')]"))
    // getLocationIDinFilterSection=()=>element(by.xpath("//input[@id='locationCd']"))
    // getApplyBtn=()=>element(by.xpath("//button[contains(text(),'Apply')]"))
    getEditBtn = () => element(by.xpath("//tr[1]//td[12]//div[1]//button[2]"))  //b[contains(text(),'Edit')]
    getEffectiveDate = () => element(by.xpath("//p-calendar[@id='date']//input[@class='ng-tns-c13-4 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']"))
    getUpdateBtn = () => element(by.xpath("//button[@class='btn fedex-btn ng-star-inserted']"))
    getDelayTypeSelected = () => (element(by.xpath("//p-dropdown[@id='delayType']//div//label[@class='ng-tns-c12-11 ui-dropdown-label ui-inputtext ui-corner-all ng-star-inserted']")))
    getCommentsUpdated = () => element(by.xpath("//textarea[@id='comment']"))


    getUpdateType = (UpdateTo_Option) => element(by.xpath("//button[contains(text(),'" + UpdateTo_Option + "')]"))
    getViewBtn = () => element(by.xpath("//tr[1]//td[12]//div[1]//button[1]"))
    getEffectiveDateInView = () => element(by.xpath("//div[@class='fdx-sdd-input-calendar']"))


    getFirstRowLocation = () => element(by.xpath("//tr[1]//td[3]"))




    getErrorMessage_LocationID = () => element(by.xpath("//div[@class='ui-g-4 ui-g-nopad']//span[@class='error-validation ng-star-inserted'][contains(text(),'Required')]"))
    getErrorMessage_DelayType = () => element(by.xpath("//div[@class='ui-g-4']//span[@class='error-validation ng-star-inserted'][contains(text(),'Required')]"))
    getErrorMessage_CauseOfDelay = () => element(by.xpath("//div[@class='ui-g-5']//span[@class='error-validation ng-star-inserted'][contains(text(),'Required')]"))
    getErrorMessage_DelayTime = () => element(by.xpath("//div[@class='ui-g-12 sddletter']//span[@class='error-validation ng-star-inserted'][contains(text(),'Invalid time')]"))
    getErrorMessage_EstAADelv = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[1]/div[1]/span[1]"))
    getErrorMessage_EstAMDelv = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[1]/div[2]/span[1]"))
    getErrorMessage_EstPMDelv = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[@class='ui-g-12 sddsize']/div[3]/span[1]"))
    getErrorMessage_ETAOnRoad = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[2]/div[1]/span[1]"))
    getErrorMessage_HAL_ODA = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[2]/div[2]/span[1]"))
    getErrorMessage_SameDayReattempts = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[@class='ui-g-12']/div[1]/span[1]"))
    getErrorMessage_CourierContact = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[@class='ui-g-12']/div[2]/span[1]"))
    getErrorMessage_PUAffected = () => element(by.xpath("//body/app-root/app-layout/div[@class='container']/div[@class='main-holder']/div[@class='content scrollStyle']/div/app-master-inbound[@class='ng-star-inserted']/div[@class='ng-untouched ng-pristine ng-valid']/div[@class='ui-g']/div[@class='ui-g-9 ui-g-nopad']/div[@class='ui-g-12 ui-g-nopad']/app-other-details[@class='ng-untouched ng-pristine ng-valid']/div[@class='dumb-component typography']/div[@class='ui-g']/div[@class='ui-g-12']/div[2]/span[1]"))
    getErrorMessage_ContactDetails = () => element(by.xpath("//span[contains(text(),'Invalid ID')]"))
    getErrorMessage_Comments = () => element(by.xpath("//div[@class='ui-g-12 ui-g-nopad comments']//span[@class='error-validation ng-star-inserted'][contains(text(),'Required')]"))



    async OtherDetails(EST_AA_DELV, EST_AM_DELV, EST_PM_DELV, ETA_on_road, HAL_ODA_available) {
        await browser.wait(EC.visibilityOf(this.getEST_AA_DELV()), 5000, 'EST AA DELV did not appear');
        await this.getEST_AA_DELV().click();
        await this.getEST_AA_DELV().sendKeys(EST_AA_DELV);
        console.log('EST_AA_DELV entered');

        await browser.wait(EC.visibilityOf(this.getEST_AM_DELV()), 5000, 'EST AM DELV did not appear');
        await this.getEST_AM_DELV().click();
        await this.getEST_AM_DELV().sendKeys(EST_AM_DELV);
        console.log('EST_AM_DELV entered');

        await browser.wait(EC.visibilityOf(this.getEST_PM_DELV()), 5000, 'EST PM DELV did not appear');
        await this.getEST_PM_DELV().click();
        await this.getEST_PM_DELV().sendKeys(EST_PM_DELV);
        console.log('EST_PM_DELV entered');

        await browser.wait(EC.visibilityOf(this.getEST_on_road()), 5000, 'ETA on road did not appear');
        await this.getEST_on_road().click();
        await this.getEST_on_road().sendKeys(ETA_on_road);
        console.log('ETA_on_road entered');

        await browser.wait(EC.visibilityOf(this.getHAL_ODA_available()), 5000, 'HAL ODA available did not appear');
        await this.getHAL_ODA_available().click();
        await this.getHAL_ODA_available().sendKeys(HAL_ODA_available);
        console.log('HAL_ODA_available entered');

    }

    async SameDayReattempts(Same_Day_Reattempts) {

        if (Same_Day_Reattempts === "YES") {
            await browser.wait(EC.visibilityOf(this.getSameDayReattempts_Yes()), 5000, 'Same Day Reattempts Yes did not appear');
            await this.getSameDayReattempts_Yes().click();
            console.log('Same Day Reattempts Yes entered');
        }
        else if (Same_Day_Reattempts === "NO") {
            await browser.wait(EC.visibilityOf(this.getSameDayReattempts_No()), 5000, 'Same Day Reattempts No did not appear');
            await this.getSameDayReattempts_No().click();
            console.log('Same Day Reattempts No entered');
        }
    }

    async CourierContact(Courier_Contact) {

        if (Courier_Contact === "YES") {
            await browser.wait(EC.visibilityOf(this.getCourierContact_Yes()), 5000, 'Courier_Contact Yes did not appear');
            await this.getCourierContact_Yes().click();
            console.log('Courier_Contact Yes Selected');
        }
        else if (Courier_Contact === "NO") {
            await browser.sleep(2000)
            await browser.wait(EC.visibilityOf(this.getCourierContact_No()), 8000, 'Courier_Contact No did not appear');
            await this.getCourierContact_No().click();
            console.log('Courier_Contact No Selected');
        }
    }

    async PUsAffected(PU_Affected) {

        if (PU_Affected === "YES") {
            await browser.sleep(2000)
            await browser.wait(EC.visibilityOf(this.getPUAffected_Yes()), 8000, 'P/Us Affected Yes did not appear');
            await this.getPUAffected_Yes().click();
            console.log('P/Us Affected Yes entered');
        }
        else if (PU_Affected === "NO") {
            await browser.wait(EC.visibilityOf(this.getPUAffected_No()), 5000, 'P/Us Affected No did not appear');
            await this.getPUAffected_No().click();
            console.log('P/Us Affected No entered');
        }

    }


    async getDates(Effective_Date) {

        switch (Effective_Date) {
            case "Today+1": {
                var date = new Date();
                date.setDate(date.getDate() + 1);
                var TodayPlus1 = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
                console.log('Today1: ' + TodayPlus1)

                browser.wait(EC.visibilityOf(this.getEffectiveDate()), 5000, 'Effective Date is not available');
                await browser.actions().mouseMove(this.getEffectiveDate()).click().perform()
                await this.getEffectiveDate().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                await this.getEffectiveDate().sendKeys(protractor.Key.BACK_SPACE);
                await browser.actions().mouseMove(this.getEffectiveDate()).sendKeys(TodayPlus1).perform()
                break
            }
            case "Today": {
                var date0 = new Date();
                date0.setDate(date0.getDate());
                var Today = (date0.getMonth() + 1) + '/' + date0.getDate() + '/' + date0.getFullYear();
                console.log('Today : ' + Today)

                browser.wait(EC.visibilityOf(this.getEffectiveDate()), 5000, 'Effective Date is not available');
                await browser.actions().mouseMove(this.getEffectiveDate()).click().perform()
                await this.getEffectiveDate().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                await this.getEffectiveDate().sendKeys(protractor.Key.BACK_SPACE);
                await browser.actions().mouseMove(this.getEffectiveDate()).sendKeys(Today).perform()
                break;
            }
            case "Today-1": {
                var date1 = new Date();
                date1.setDate(date1.getDate() - 1);
                var TodayMinus1 = (date1.getMonth() + 1) + '/' + date1.getDate() + '/' + date1.getFullYear();
                console.log('Today-1 : ' + TodayMinus1)

                browser.wait(EC.visibilityOf(this.getEffectiveDate()), 5000, 'Effective Date is not available');
                await browser.actions().mouseMove(this.getEffectiveDate()).click().perform()
                await this.getEffectiveDate().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                await this.getEffectiveDate().sendKeys(protractor.Key.BACK_SPACE);
                await browser.actions().mouseMove(this.getEffectiveDate()).sendKeys(TodayMinus1).perform()
                break;
            }
            case "Today-2": {
                var date2 = new Date();
                date2.setDate(date2.getDate() - 2);
                var TodayMinus2 = (date2.getMonth() + 1) + '/' + date2.getDate() + '/' + date2.getFullYear();
                console.log('Today-2 : ' + TodayMinus2)

                browser.wait(EC.visibilityOf(this.getEffectiveDate()), 5000, 'Effective Date is not available');
                await browser.actions().mouseMove(this.getEffectiveDate()).click().perform()
                await this.getEffectiveDate().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                await this.getEffectiveDate().sendKeys(protractor.Key.BACK_SPACE);
                await browser.actions().mouseMove(this.getEffectiveDate()).sendKeys(TodayMinus2).perform()
                break;
            }
            case "Today-3": {
                var date3 = new Date();
                date3.setDate(date3.getDate() - 3);
                var TodayMinus3 = (date3.getMonth() + 1) + '/' + date3.getDate() + '/' + date3.getFullYear();
                console.log('Today-3 : ' + TodayMinus3)

                browser.wait(EC.visibilityOf(this.getEffectiveDate()), 5000, 'Effective Date is not available');
                await browser.actions().mouseMove(this.getEffectiveDate()).click().perform()
                await this.getEffectiveDate().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                await this.getEffectiveDate().sendKeys(protractor.Key.BACK_SPACE);
                await browser.actions().mouseMove(this.getEffectiveDate()).sendKeys(TodayMinus3).perform()
                break;
            }
            case "Today-4": {
                var date4 = new Date();
                date4.setDate(date4.getDate() - 4);
                var TodayMinus4 = (date4.getMonth() + 1) + '/' + date4.getDate() + '/' + date4.getFullYear();
                console.log('Today4 : ' + TodayMinus4)

                browser.wait(EC.visibilityOf(this.getEffectiveDate()), 5000, 'Effective Date is not available');
                await browser.actions().mouseMove(this.getEffectiveDate()).click().perform()
                await this.getEffectiveDate().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                await this.getEffectiveDate().sendKeys(protractor.Key.BACK_SPACE);
                await browser.actions().mouseMove(this.getEffectiveDate()).sendKeys(TodayMinus4).perform()

                // await browser.element(by.xpath("//p-calendar[@id='date']")).(Key.SHIFT, Key.END, Key.BACK_SPACE);;

                // await this.getEffectiveDate().clear().then(function() {
                //     element(by.xpath("//p-calendar[@id='date']//input[@class='ng-tns-c13-4 ui-inputtext ui-widget ui-state-default ui-corner-all ng-star-inserted']")).sendKeys(TodayMinus4);
                // await browser.sleep(10000)

                break;
            }
            default: {
                console.log("Invalid choice");
                break;
            }
        }

    }

    async VerifyOtherDetails(EST_AA_DELV_Change, EST_AM_DELV_Change, EST_PM_DELV_Change, ETA_on_road_Change, HAL_ODA_available_Change) {
        await browser.wait(EC.visibilityOf(this.getEST_AA_DELV()), 5000, 'EST AA DELV did not appear');
        await this.getEST_AA_DELV().click();
        await this.getEST_AA_DELV().sendKeys(EST_AA_DELV_Change);
        console.log('EST_AA_DELV entered');

        await browser.wait(EC.visibilityOf(this.getEST_AM_DELV()), 5000, 'EST AM DELV did not appear');
        await this.getEST_AM_DELV().click();
        await this.getEST_AM_DELV().sendKeys(EST_AM_DELV_Change);
        console.log('EST_AM_DELV entered');

        await browser.wait(EC.visibilityOf(this.getEST_PM_DELV()), 5000, 'EST PM DELV did not appear');
        await this.getEST_PM_DELV().click();
        await this.getEST_PM_DELV().sendKeys(EST_PM_DELV_Change);
        console.log('EST_PM_DELV entered');

        await browser.wait(EC.visibilityOf(this.getEST_on_road()), 5000, 'ETA on road did not appear');
        await this.getEST_on_road().click();
        await this.getEST_on_road().sendKeys(ETA_on_road_Change);
        console.log('ETA_on_road entered');

        await browser.wait(EC.visibilityOf(this.getHAL_ODA_available()), 5000, 'HAL ODA available did not appear');
        await this.getHAL_ODA_available().click();
        await this.getHAL_ODA_available().sendKeys(HAL_ODA_available_Change);
        console.log('HAL_ODA_available entered');

    }

    async VerifySameDayReattempts(Same_Day_Reattempts_Change) {

        switch (Same_Day_Reattempts_Change) {
            case "YES": {
                expect(element(by.xpath("//p-radiobutton[@id='sameDay']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable pi pi-circle-on']")).isPresent()).to.eventually.be.true;
                console.log('Same Day Reattempts Yes selected')
                expect(element(by.xpath("//p-radiobutton[@id='sameDay']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable']")).isPresent()).to.eventually.be.false;
                // console.log('Same Day Reattempts without selection not present')
                break
            }

            case "NO": {
                expect(element(by.xpath("//p-radiobutton[@id='reAtmpt']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable pi pi-circle-on']")).isPresent()).to.eventually.be.true;
                console.log('Same Day Reattempts Yes selected')
                expect(element(by.xpath("//p-radiobutton[@id='reAtmpt']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable']")).isPresent()).to.eventually.be.false;
                //console.log('Same Day Reattempts No without selection not present')
                break
            }

            default: {
                console.log("Nothing Selected for Same Day Reattempts");
                break;
            }
        }
    }

    async VerifyCourierContact(Courier_Contact_Change) {
        switch (Courier_Contact_Change) {
            case "YES": {
                expect(element(by.xpath("//p-radiobutton[@id='courier']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable pi pi-circle-on']")).isPresent()).to.eventually.be.true;
                console.log('Courier Contact Yes selected')
                expect(element(by.xpath("//p-radiobutton[@id='courier']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable']")).isPresent()).to.eventually.be.false;
                //console.log('Courier Contact Yes selected without selection not present')
                break
            }
            case "NO": {
                expect(element(by.xpath("//p-radiobutton[@id='contact']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable pi pi-circle-on']")).isPresent()).to.eventually.be.true;
                console.log('Courier Contact NO selected')
                expect(element(by.xpath("//p-radiobutton[@id='contact']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable']")).isPresent()).to.eventually.be.false;
                //console.log('Courier Contact NO without selection not present')
                break
            }
            default: {
                console.log("Nothing Selected for Courier Contact");
                break;
            }
        }
    }

    async VerifyPUsAffected(PU_Affected_Change) {

        switch (PU_Affected_Change) {
            case "YES": {
                expect(element(by.xpath("//p-radiobutton[@id='puAffect']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable pi pi-circle-on']")).isPresent()).to.eventually.be.true;
                console.log('PU Affected Yes selected')
                expect(element(by.xpath("//p-radiobutton[@id='puAffect']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable']")).isPresent()).to.eventually.be.false;
                //console.log('PU's Affected not selected is not present')
                break
            }
            case "NO": {
                expect(element(by.xpath("//p-radiobutton[@id='puAffected']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable pi pi-circle-on']")).isPresent()).to.eventually.be.true;
                console.log('PUs Affected NO selected')
                expect(element(by.xpath("//p-radiobutton[@id='puAffected']//div[1]//div[2]//span[@class='ui-radiobutton-icon ui-clickable']")).isPresent()).to.eventually.be.false;
                //console.log('PU's Affected NO without selection not present')
                break
            }
            default: {
                console.log("Nothing Selected for PU's Affected");
                break;
            }
        }
    }

    async UpdateContactDetails(Emp_ID_Change, Emp_Name_Change) {
        await browser.wait(EC.visibilityOf(this.getEmpID()), 10000, 'Emp_ID did not appear');
        await this.getAddEmpIcon().click();
        await this.getAddEmpIcon().clear();
        await this.getEmpID().sendKeys(Emp_ID_Change);
        console.log('Emp ID entered');
        await this.getAddEmpIcon().click();
        console.log('Emp ID Add Icon Clicked');
        await browser.wait(EC.visibilityOf(this.getEmployeeName(Emp_Name_Change)), 15000, 'Emp Name did not appear');
        expect(this.getEmployeeName(Emp_Name_Change).isPresent()).to.eventually.equal(true)

        let EmployeeName = await element(by.xpath("//span[@id='contactdetails_employeename']")).getText();
        console.log(EmployeeName + ': Emp Name present');
        expect(EmployeeName).to.equal(Emp_Name_Change)

        await browser.wait(EC.visibilityOf(this.getEmployeeID(Emp_ID_Change)), 10000, 'Emp ID added did not appear');
        expect(this.getEmployeeID(Emp_ID_Change).isPresent()).to.eventually.equal(true)

        let EmployeeID = await element(by.xpath("//span[@id='contactdetails_employeeid']")).getText();
        console.log(EmployeeID + ': Emp ID present');
        await browser.sleep(3000);
    }

    async VerifyContactDetails(Emp_ID_Change, Emp_Name_Change) {
        await browser.wait(EC.visibilityOf(this.getEmployeeName(Emp_Name_Change)), 15000, 'Emp Name did not appear');
        expect(this.getEmployeeName(Emp_Name_Change).isPresent()).to.eventually.equal(true)

        let EmployeeName = await element(by.xpath("//span[@id='contactdetails_employeename']")).getText();
        console.log(EmployeeName + ': Emp Name present');
        expect(EmployeeName).to.equal(Emp_Name_Change)

        await browser.wait(EC.visibilityOf(this.getEmployeeID(Emp_ID_Change)), 10000, 'Emp ID added did not appear');
        expect(this.getEmployeeID(Emp_ID_Change).isPresent()).to.eventually.equal(true)

        let EmployeeID = await element(by.xpath("//span[@id='contactdetails_employeeid']")).getText();
        console.log(EmployeeID + ': Emp ID present');
        await browser.sleep(3000);
    }

}