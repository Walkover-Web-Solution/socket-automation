const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');


class Sheets extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }

    
    async enterFields() {
        console.log('Here going in');
        const inputFields = await this.driver.wait(until.elementsLocated(By.css('[placeholder = "type something"]')), 5000);
    

        console.log("Sheet ID");
        await inputFields[0].sendKeys('1Qzi54LJ1yVL-M4J5LEAs97runpMAzRI_vUt56WpsGAM');
        await inputFields[0].sendKeys(Key.TAB);
        // console.log("Sheet NAme");
        // let outerHTML = await inputFields[1].getAttribute('outerHTML');
        // console.log(outerHTML);
        await inputFields[1].sendKeys('test');
        await inputFields[0].sendKeys(Key.TAB);
        // console.log("Sheet row");
        await inputFields[2].sendKeys('2');
        await inputFields[0].sendKeys(Key.TAB);
        // console.log("Sheet col");
        await inputFields[3].sendKeys('3');
        await inputFields[0].sendKeys(Key.TAB);

        const testBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[8]/div/button[1]')), 5000);
        testBtn.click();
    }

    async clickOnSheets() {
        const googleSheetBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div/ul/li[6]/button')), 5000);
        googleSheetBtn.click();
    }

    async enterAuthId(id) {
        const dynamicAuthBtn = await this.driver.wait(until.elementLocated(By.css('[data-value = "dynamic_auth"]')), 5000);
        // const listElements = await this.driver.wait(until.elementsLocated(By.css('[role="menuitem"]')), 5000);
        // console.log(dynamicAuthBtn);
        dynamicAuthBtn.click();

        const authIdInput = await this.driver.wait(until.elementLocated(By.css('[placeholder="Auth ID"]')), 5000);
        authIdInput.sendKeys('auth2zI9JksP');
        
        const verifyBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[3]/div[2]/div/div/button')), 5000);
        verifyBtn.click();
        // await this.driver.wait(until.elementIsNotVisible(verifyBtn), 5000);
        await this.driver.sleep(5000);
        console.log("out of this function");
        // const randomIndex = Math.floor(Math.random() * listElements.length);
        // listElements[randomIndex].click();
        // const listElements = await unorderedList.findElements(By.css('[role="menuitem"]'));
        // console.log(listElements);
    }

    async clickAddSheet()
    {
        // await this.driver.wait(until.)
        const addSheetBtn = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div/nav/div[1]/div')), 5000);
        await addSheetBtn.click();
    }

    async clickSelectMenuOnAddSheet()
    {
        const dropDownBtn = await this.driver.wait(until.elementLocated(By.className('authKeyHelper pb-1 MuiBox-root css-0')), 5000);
        await dropDownBtn.click();
    }

   

}


module.exports = Sheets;
