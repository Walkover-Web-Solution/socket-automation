const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');


class Sheets extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }

    
    async enterFields() {
        // console.log('Here going in');
        const inputFields = await this.driver.wait(until.elementsLocated(By.css('[placeholder = "type something"]')), 5000);
    

        // console.log("Sheet ID");
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

        // const testBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[8]/div/button[1]')), 5000);
        const buttons = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont button')), 5000);
        const testBtn = buttons[9];
        testBtn.click();
    }

    async clickOnSheets() {
        // const googleSheetBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div/ul/li[6]/button')), 5000);
        const googleSheetBtn = await this.driver.wait(until.elementLocated(By.id(':rc:-option-5')), 5000);
        googleSheetBtn.click();
        await this.driver.sleep(500);
    }

    async enterAuthId(id) {
        const dynamicAuthBtn = await this.driver.wait(until.elementLocated(By.css('[data-value = "dynamic_auth"]')), 5000);
        dynamicAuthBtn.click();

        const authIdInput = await this.driver.wait(until.elementLocated(By.css('[placeholder="Auth ID"]')), 5000);
        authIdInput.sendKeys('auth2zI9JksP');
        
        const masterSliderBtns = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont button')), 5000);
        const verifyBtn = masterSliderBtns[4];

        verifyBtn.click();
        await this.driver.sleep(5000);
    }

    async clickAddSheet()
    {
        // await this.driver.wait(until.)
        // const addSheetBtn = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div/nav/div[1]/div')), 5000);
        const pluginForm = await this.driver.wait(until.elementLocated(By.className('pluuginTypeForn')), 5000);
        const addSheetBtn = await pluginForm.findElement(By.css('div'));
        // const addSheetBtn = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div/nav/div[1]/div')), 5000);
        await addSheetBtn.click();
    }

    async clickSelectMenuOnAddSheet()
    {
        const dropDownBtn = await this.driver.wait(until.elementLocated(By.className('authKeyHelper pb-1 MuiBox-root css-0')), 5000);
        await dropDownBtn.click();
    }


}


module.exports = Sheets;
