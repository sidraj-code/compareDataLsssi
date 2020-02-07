import { browser, by } from 'protractor';
export class Util{
    
    constructor(){
        // initialising the custom selectors in the framework
        by.addLocator('placeholderSelector',(placeholderText,ele_parent)=>{
            let using = ele_parent || document;
            let elements = document.querySelectorAll('input');
            let elementsArr =  Array.prototype.filter.call(elements, function(button) {
              return button.placeholder === placeholderText;
            });
            console.log(elementsArr);
            return elementsArr;
        })
    }

    waitForUrlChange(url){
        let EC = browser.ExpectedConditions;
        return browser.wait(EC.urlContains(url),85000);
      }
}