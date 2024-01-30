const Projects = require('../Project/projects');
const FlowPage = require('../Flow/flow.js');
const {endpoints} = require('../../enums');
const {By,until,Key,Keys} = require('selenium-webdriver');
const getButtonHavingText = require('../../../utilities/getButtonHavingText');
const fs = require('fs');
// import org.openqa.selenium.JavascriptExecutor;

// JavascriptExecutor js = (JavascriptExecutor) driver;

class Function extends FlowPage{
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

    async funName(name){
        await this.driver.sleep(2000);
        const funName = await this.driver.findElement(By.xpath(`//input[@id='function-title-textfield']`));
        await funName.click();
        await funName.sendKeys(Key.CONTROL + "a");
        await funName.sendKeys(Key.DELETE);
        await funName.sendKeys(name);
    }

    async dryrun(){
        // const custom =await this.driver.findElement(By.className("custom_slider__suggestion_box")); 
        // const arear= await custom.findElement(By.className('flex-end-center gap-2 MuiBox-root css-0'));
        // const closeButton = await arear.findElement(By.className("MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-lr0yxz"));
        // closeButton.click();
        await super.waitForContentToLoad(By.className('functionActionDialogMainContainer mt-1 MuiBox-root css-0'),1000);
        const stepNameInput = await this.driver.findElement(By.css('[class*="custom_slider__halfscreen"]'));
        const createBtn = stepNameInput.findElement(By.xpath(`//*[@id="root"]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[3]/div/button[1]`));
        await createBtn.click();
    }

    async create(){
        const stepNameInput = await this.driver.findElement(By.css('[class*="custom_slider__halfscreen"]'));
        const createButton = stepNameInput.findElement(By.xpath(`//button[normalize-space()='Update']`));
        await createButton.click();
    }

    async writeFunction(content){
        await super.waitForContentToLoad(By.css('[class*="custom_slider__halfscreen"]'));
        const functionBlock= await this.driver.findElement(By.css('[class*="custom_slider__halfscreen"]'));
        const editor = await functionBlock.findElement(By.className('ace_comment ace_placeholder'));
        await editor.click();
        const textArea= functionBlock.findElement(By.className('ace_text-input'));
        textArea.sendKeys("return true");
   
   
       
    }
   
 

    async clearField(){
        await this.driver.sleep(2000);
        const funName = await this.driver.findElement(By.xpath(`//input[@id='function-title-textfield']`));
        await funName.click();
        // await funName.clear();
        const currentValue = await funName.getAttribute('value');
            for (let i = 0; i < currentValue.length; i++) {
                await funName.sendKeys(Key.BACK_SPACE);
            }
        await this.driver.sleep(5000);
        await funName.click();
    }

    async closeFunctionSlider(){
        const closeButton = await this.driver.findElement(By.xpath(`//button[@aria-label='Close']//*[name()='svg']`));
        await closeButton.click();
        // await this.driver.sleep(5000);
    }

    async duplicateFunction(){   
        await super.waitForContentToLoad(By.className("MuiMenu-list"),10000);
        const menu= await this.driver.findElement(By.className("MuiMenu-list"));
        const duplicate =await menu.findElement(By.xpath('//li[text() = "Duplicate"]'));
        duplicate.click();
        await this.driver.sleep(2000);
    }

    async deleteFunction(){
        await super.waitForContentToLoad(By.className("MuiMenu-list"),10000);
        const menu= await this.driver.findElement(By.className("MuiMenu-list"));
        const deletee =await menu.findElement(By.xpath('//li[text() = "Delete"]'));
        deletee.click();
        await this.driver.sleep(2000); 
    }


    async goToFunctionStep(){
        await super.waitForContentToLoad(By.id("NewFun_component"),10000);
        const acction= await this.driver.findElement(By.id("NewFun_component"));
        const btn =acction.findElement(By.id("NewFunactionbutton"));
        btn.click();
    }

    async goToDuplicateFunctionStep(){
        await super.waitForContentToLoad(By.id("NewFun_Duplicate_component"),10000);
        const acction= await this.driver.findElement(By.id("NewFun_Duplicate_component"));
        const btn =acction.findElement(By.id("NewFun_Duplicateactionbutton"));
        btn.click();
    }

    async takeScreenShotDuplicateFunction(imagePath){
        
        const stepNameInput = await this.driver.findElement(By.className('functionsliderbody '));
        const screenShot = await stepNameInput.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot , imagePath);
    }

    
    async getSuccessMessage() {
        const successMessageElement = await this.driver.findElement(By.css(''));
        await fun.waitForUIChange(); // Update the selector based on your actual success message element
        return await successMessageElement.getText();
    }
    async DragAndDropNoElements() {
        console.log("Simulating no elements to drag");
        // Add logic to handle the case where there are no elements to drag
    }
}

module.exports = Function;