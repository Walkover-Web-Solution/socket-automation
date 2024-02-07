const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');


class Discard extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }
    
    async clickSelectTrigger() {
        const selectTriggerBtn = await this.driver.wait(until.elementLocated(By.className('croncontainer__display__box__selected')), 5000);
        await selectTriggerBtn.click();
    }

    async clickOnAPI() {
        const apiBtn = await this.driver.wait(until.elementLocated(By.css('[data-testid="ApiIcon"]')), 5000);
        apiBtn.click();
    }
   
   

    async enterURL() {
        await this.driver.sleep(1000);
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

    async DiscardClick(){
       
        const stepsclick = await this.driver.wait(until.elementLocated(By.className('publishblockButtonShow')), 5000);
        const elementtotarget= await stepsclick.findElements(By.css('button'));
        elementtotarget[1].click();
    }

    async webhookClick(){
        const webhookclick = await this.driver.wait(until.elementLocated(By.id('0option')), 5000);
        webhookclick.click();
    }

    async addNewStep(){
        const stepclick = await this.driver.wait(until.elementLocated(By.id('root-add-step-button')), 5000);
        stepclick.click();

    }

  

    async OkButtonClick(){

        const conformationDialogBox = await this.driver.wait(until.elementLocated(By.css('[role="dialog"]')), 5000);
        const okButton = await conformationDialogBox.findElement(By.css('button'), 5000);
        okButton.click();

    }

    async takeflowStepScreenShotAndSave(imagePath) {
        const flowField = await this.driver.wait(until.elementsLocated(By.className('workflow__flow')), 5000);
        const screenShot = await flowField[1].takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }

    async clickAnyWhere(){
        const element = await this.driver.wait(until.elementsLocated(By.className('PrivateSwitchBase-input')), 5000);
        await element[1].click();
    }
    async takeflowStepAfterScreenShotAndSave(imagePath) {
        const flowField = await this.driver.wait(until.elementsLocated(By.className('workflow__flow')), 5000);
        const screenShot = await flowField[1].takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }
    async getStepsArray() {
        // const arr = await this.driver.wait(until.elementsLocated(By.css('.dndrop-container .width-container')), 5000);
        const arr = await this.driver.findElements(By.css('.dndrop-container .width-container'));
        return arr;
    }
}

module.exports = Discard;