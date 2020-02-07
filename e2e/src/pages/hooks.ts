const { BeforeAll, After, AfterAll, Status } = require("cucumber");
import * as fs from "fs";
import { browser } from "protractor";
//import { config } from "../config/config";

// BeforeAll({timeout: 100 * 1000}, async () => {
    
// });

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 100000}, async () => {
    await browser.quit();
});

// BeforeAll(function() {
//     browser.executeScript('window.localStorage.clear();');
//     browser.executeScript('window.sessionStorage.clear();');
//     browser.driver.manage().deleteAllCookies(); 
 
// });