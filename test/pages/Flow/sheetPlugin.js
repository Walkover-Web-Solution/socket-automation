const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');


class Sheets extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }

    
    async enterFields() {
        const inputFields = await this.driver.wait(until.elementsLocated(By.css('[placeholder = "type something"]')), 5000);
    


        await inputFields[0].sendKeys('1Qzi54LJ1yVL-M4J5LEAs97runpMAzRI_vUt56WpsGAM');
        await inputFields[0].sendKeys(Key.TAB);

        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
        await inputFields[1].sendKeys('test' + timestamp);
        await inputFields[0].sendKeys(Key.TAB);

        await inputFields[2].sendKeys('2');
        await inputFields[0].sendKeys(Key.TAB);

        await inputFields[3].sendKeys('3');
        await inputFields[0].sendKeys(Key.TAB);

        const buttons = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont button')), 5000);
        const testBtn = buttons[9];
        testBtn.click();
    }

    async clickOnSheets() {
        const googleSheetBtn = await this.driver.wait(until.elementLocated(By.id(':rc:-option-5')), 5000);
        googleSheetBtn.click();
        await this.driver.sleep(1000);
    }

    async enterAuthId(id) {
        const dynamicAuthBtn = await this.driver.wait(until.elementLocated(By.css('[data-value = "dynamic_auth"]')), 5000);
        dynamicAuthBtn.click();

        const authIdInput = await this.driver.wait(until.elementLocated(By.css('[placeholder="Auth ID"]')), 5000);
        authIdInput.sendKeys(id);
    }

    async verifyAuthId() {
        const masterSliderBtns = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont button')), 5000);
        const verifyBtn = masterSliderBtns[4];

        verifyBtn.click();
        await this.driver.sleep(3500);
    }

    async clickAddSheet()
    {
        const pluginForm = await this.driver.wait(until.elementLocated(By.className('pluuginTypeForn')), 5000);
        const addSheetBtn = await pluginForm.findElement(By.css('div'));
        await addSheetBtn.click();
    }

    async clickSelectMenuOnAddSheet()
    {
        const dropDownBtn = await this.driver.wait(until.elementLocated(By.className('authKeyHelper pb-1 MuiBox-root css-0')), 5000);
        await dropDownBtn.click();
    }

    async takeSheetOptionsScreenShortAndSave(imagePath) {
        const pluginForm = await this.driver.wait(until.elementLocated(By.className('pluuginTypeForn')), 5000);
        const screenShot = await pluginForm.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }

    async takeSheetDetailsScreenShortAndSave(imagePath) {
        const masterSlider = await this.driver.wait(until.elementLocated(By.className('masterslider_cont')), 5000);
        const screenShot = await masterSlider.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }

    async getResponseeData()
    {
        await this.driver.sleep(5000);
        const responseContainer = await this.driver.findElement(By.className('react-json-view'), 5000);
        let text = await responseContainer.getText();
        return text;
    }


}


module.exports = Sheets;
