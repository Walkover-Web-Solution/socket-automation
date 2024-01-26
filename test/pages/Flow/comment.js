const Projects = require('../Project/projects');
const FlowPage = require('../Flow/flow.js');
const {endpoints} = require('../../enums');
const {By,until,Keys,Key} = require('selenium-webdriver');
const getButtonHavingText = require('../../../utilities/getButtonHavingText');
const fs = require('fs');


class Comment extends FlowPage{
    constructor(){
        super();
        this.driver = super.Driver;
        this.pageUrl = '';
        this.webHookUrl = '';
        this.navbarButtons = [];
        this.steps = [];
        this.apiEditPanel = '';
        this.apiResponsePanel = '';
        this.apiContent = '';
        this.dryRunButton = '';
        this.createButton = '';
    }
    async writeComment(comment){
        await this.driver.sleep(2000);
        const commnetField = await this.driver.findElement(By.className("inputcomment__editcomment"));
         commnetField.click();
         commnetField.clear();
         commnetField.sendKeys(comment);
       
    }

    async RemoveComment(){
        await this.driver.sleep(2000);
        const commnetField = await this.driver.findElement(By.className("inputcomment__editcomment"));
        commnetField.sendKeys(Key.CONTROL,"a");
        commnetField.clear();
    }
   async takeScreenShotOfComment(imagePath){
        await super.waitForContentToLoad(By.className("containerComment"),10000);
        const responseElement=await this.driver.findElement(By.className('containerComment'));
        const screenShot = await responseElement.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot , imagePath);

    }

}

module.exports = Comment;