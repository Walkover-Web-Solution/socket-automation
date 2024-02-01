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


    async webhookClick(){
        const webhookclick = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[2]/div/div/div[2]/button[1]')), 5000);
        webhookclick.click();
    }

    async addNewStep(){
        const stepclick = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[3]/div/div[2]/div[1]/div[2]/div/div/div/div/input')), 5000);
        stepclick.click();

    }

    async DiscardClick(){
       
        const stepsclick = await this.driver.wait(until.elementLocated(By.xpath(' /html/body/div/div/div[3]/div/div[1]/div[2]/div/div/div[2]/div[1]/button')), 5000);
        stepsclick.click();
    }

    async OkButton(){

        const okclick = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[3]/div/div[2]/div/button[1]')), 5000);
        okclick.click();
    }

    async takeflowStepScreenShotAndSave(imagePath) {
        const flowField = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[1]/div/div[3]/div/div[3]/div[3]/div/div[2]/div[1]')), 5000);
        const screenShot = await flowField.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }

}

module.exports = Discard;