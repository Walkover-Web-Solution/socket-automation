const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');


class MakeLive extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }


    async clickOnAPI() {
        const apiBtn = await this.driver.wait(until.elementLocated(By.css('[data-testid="ApiIcon"]')), 5000);
        apiBtn.click();
    }
   
    async enterURL() {
        const inputParent = await this.driver.wait(until.elementsLocated(By.className('input-parent')), 5000);
        const childElement = await inputParent[1].findElement(By.css('textarea'));
        await childElement.sendKeys('https://jsonplaceholder.typicode.com/posts');
    }


    async clickTest() {
        const parentElement = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont .flex-start-center')), 5000);

        const buttons = await parentElement[1].findElements(By.css('button'));
        await buttons[0].click();
        // await this.driver.sleep(2000);
        await super.waitForContentToLoad(By.className('react-json-view'), 8000);
        
    }


    async clickUpdate() {
        const parentElement = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont .flex-start-center')), 5000);
        const buttons = await parentElement[1].findElements(By.css('button'));

        await buttons[1].click();
        await this.driver.sleep(2000);
    }

    async clickSelectTrigger() {
        const selectTriggerBtn = await this.driver.wait(until.elementLocated(By.className('croncontainer__display__box__selected')), 5000);
        await selectTriggerBtn.click();
    }


    async clickOnWebHook() {
        // const webHookBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[2]/div/div/div[2]/button[1]')), 5000);
        const webHookBtn = await this.driver.wait(until.elementLocated(By.id('0option')), 5000);
        await webHookBtn.click();     
    }

    async clickMakeLive() {
        const publishBlockButtons = await this.driver.wait(until.elementsLocated(By.css('.publishblockButtonShow button')), 5000);

        publishBlockButtons[0].click();
        const conformationDialogBox = await this.driver.wait(until.elementLocated(By.css('[role="dialog"]')), 5000);
        const okButton = await conformationDialogBox.findElement(By.css('button'), 5000);
        okButton.click();
    }

    async takeAPIFieldScreenShotAndSave(imagePath) {
        await this.driver.sleep(1000);
        const apiField = await this.driver.wait(until.elementLocated(By.id('panel1a-content')), 5000);
        const screenShot = await apiField.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }


    async clickStepOne() {
        await this.driver.sleep(500);
        const steps = await this.driver.wait(until.elementLocated(By.className('plugin-cont__name')), 5000);
        await steps.click();
    }

    async clickOnEdit() {
        const editBtn = await this.driver.wait(until.elementLocated(By.id('panel1a-header')),5000);
        editBtn.click();
    }

    async getStepsArray() {
        const arr = await this.driver.wait(until.elementsLocated(By.css('.dndrop-container .width-container')), 5000);
        return arr;
    }

    async getResponseeData()
    {
        // await this.driver.sleep(5000);
        await super.waitForContentToLoad(By.className('react-json-view'), 10000);
        const responseContainer = await this.driver.findElement(By.className('react-json-view'), 5000);
        let text = await responseContainer.getText();
        return text;
    }
}


// async takeScreenShotpauseScript(imagePath){
//     await super.waitForContentToLoad(By.xpath('//*[@id="long-menu"]/div[3]/ul'),10000);
//     const responseElement=await this.driver.findElement(By.xpath('//*[@id="long-menu"]/div[3]/ul'));
//     const screenShot = await responseElement.takeScreenshot();
//     await super.takeScreenShotAndSave(screenShot , imagePath);
// }

module.exports = MakeLive;