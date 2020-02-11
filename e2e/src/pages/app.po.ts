
import { browser, by, element } from 'protractor';
import {Util} from "../utils/util";
 

const selectors = {
  "username":"FedEx Id",
  "password":"Password",
  "login_button":"/html/body/app-root/app-layout/div/div[2]/div[2]/div/app-login/div/div[1]/form/div[3]/button",
  "loginErrorMsg":"/html[1]/body[1]/app-root[1]/app-layout[1]/div[1]/div[2]/div[2]/div[1]/app-login[1]/div[1]/div[1]/form[1]/div[4]",
}


let EC = browser.ExpectedConditions
let chai = require('chai');

let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

export class AppPage {
 
  utilService:Util
  constructor(){
    this.utilService = new Util(); 
  }

  //selectors of the login page
  //getUsefield = ()=> element(by.placeholderSelector(selectors['username']));
  getUserName =()=> element(by.id("username"))
  //getPasswordField = ()=> element(by.placeholderSelector(selectors['password']));
  getPassword =() => element(by.id("password"))
  getSignInButton =() => element(by.xpath("//input[@id='submit']"))
  getLoginButton = () => element(by.xpath(selectors["login_button"]));
  getErrorMsg = ()=> element(by.xpath(selectors['loginErrorMsg'])).getText();

  // get passwordField(){ return element(by.placeholderSelector(selectors['password']));}
 
  // functionality on this page 
  async navigateTo()
  {
    await browser.waitForAngularEnabled(false);
    
    //await browser.get(browser.baseUrl, 50000);
    await browser.driver.get(browser.baseUrl);
    // await browser.executeScript('window.localStorage.clear();');
    // await browser.executeScript('window.sessionStorage.clear();');
    // await browser.driver.manage().deleteAllCookies();
   
    // ptor.driver.manage().getCookies().then(function(cookies) {
    //   console.log('Got cookies %j', cookies);
    // });
   
    

    // await browser.executeScript('window.sessionStorage.clear();');
    // await browser.executeScript('window.localStorage.clear();');

    // await expect(element(this.getUserName()).isPresent()).to.eventually.equal(true);
 
    await browser.wait(EC.visibilityOf(this.getUserName()),9000,'Username did not appeared')
   
    console.log('Navigated to Login Page')
    
    // await browser.wait(EC.visibilityOf(this.getUserName()),45000,'Username did not appeared')
    // // return this.utilService.waitForUrlChange(browser.baseUrl)
  }

  async login(username,password){
    await browser.wait(EC.visibilityOf(this.getUserName()),9000,'Username did not appeared')
    await this.getUserName().sendKeys(username);
    console.log('Username entered')
     
    await browser.wait(EC.visibilityOf(this.getPassword()),5000,'Password did not appeared')
    await this.getPassword().sendKeys(password);
    console.log('Password entered')

    await browser.wait(EC.elementToBeClickable(this.getSignInButton()),2000,'SignIn button did not appeared')
    await this.getSignInButton().click();
    console.log('Login Button Clicked')

  }

  async logout(){
    await browser.wait(EC.visibilityOf(element(by.xpath("/html/body/div/form/table/tbody/tr/td[3]/table/tbody/tr[2]/td/a[2]"))),40000,'Logout button did not appeared')
    await element(by.xpath("/html/body/div/form/table/tbody/tr/td[3]/table/tbody/tr[2]/td/a[2]")).click();
    console.log('User Logged out successfully');
  }
}
