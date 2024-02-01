const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');


class MakeLive extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }


    async clickOnAPI() {
        const apiBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div/ul/li[1]/button')), 5000);
        apiBtn.click();
    }
   
    async enterURL() {
        await this.driver.sleep(1000);
        const urlTextArea = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[2]/div[2]/div/div/div/div/div[2]/div[1]/div/div[2]/div/div[2]/div[1]/div/textarea')), 5000);
        await urlTextArea.sendKeys('https://jsonplaceholder.typicode.com/posts');
    }


    async testAndUpdate() {
        const testBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[3]/button[1]')), 5000);
        await testBtn.click();
        await this.driver.sleep(2000);
        const updateBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[3]/button[2]')), 5000);
        await updateBtn.click();
        await this.driver.sleep(2000);
    }

    async clickSelectTrigger() {
        const selectTriggerBtn = await this.driver.wait(until.elementLocated(By.className('croncontainer__display__box__selected')), 5000);
        await selectTriggerBtn.click();
    }


    async clickOnWebHook() {
        const webHookBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[2]/div/div/div[2]/button[1]')), 5000);
        await webHookBtn.click();     
    }

    async clickMakeLive() {
        const makeLiveButton = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[1]/div[2]/div/div/div[2]/div[1]/div/button')), 5000);
        makeLiveButton.click();
        const conformationDialogBox = await this.driver.wait(until.elementLocated(By.css('[role="dialog"]')), 5000);
        const okButton = await conformationDialogBox.findElement(By.css('button'), 5000);
        okButton.click();
    }

    async takeAPIFieldScreenShotAndSave(imagePath) {
        const apiField = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[3]/div/div[3]/div[5]/div/div/div/div[2]/div[2]')), 5000);
        const screenShot = await apiField.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }


    async clickStepOne() {
        const steps = await this.driver.wait(until.elementsLocated(By.id('untitled1')), 5000);
        await steps[1].click();
    }
}


// async takeScreenShotpauseScript(imagePath){
//     await super.waitForContentToLoad(By.xpath('//*[@id="long-menu"]/div[3]/ul'),10000);
//     const responseElement=await this.driver.findElement(By.xpath('//*[@id="long-menu"]/div[3]/ul'));
//     const screenShot = await responseElement.takeScreenshot();
//     await super.takeScreenShotAndSave(screenShot , imagePath);
// }

module.exports = MakeLive;