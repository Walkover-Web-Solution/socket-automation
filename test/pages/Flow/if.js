const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');

class IfBlock extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }

    async createCondition(confititon_name){
        const text_field=await this.driver.findElement(By.id("editableDividForIfBlock"));
        await text_field.sendKeys(confititon_name);
        const create=await this.driver.findElement(By.xpath('//button[normalize-space()="Create"]'));
        await create.click();
    }

    async responseOfIfBlock(){
        const responseElement=await this.driver.findElement(By.className('MuiTypography-root MuiTypography-base word_break-all css-oy4d7z'));
        const text=responseElement.getText();
        return text
    }
    
    async crossIfBlock(){
        const cross_icon=await this.driver.findElement(By.xpath("//button[@aria-label='Close']//*[name()='svg']"));
        await cross_icon.click();
    }

    async createConditionIf(confititon_name){
        await super.waitForContentToLoad(By.className("ifblockslider__editbox m-1 MuiBox-root css-0") , 10000);    
        const parentclass=await this.driver.findElement(By.className("ifblockslider__editbox m-1 MuiBox-root css-0"));
        const text_field= await parentclass.findElement(By.className("p-1"));
        await text_field.sendKeys(confititon_name);
        const create=await parentclass.findElement(By.xpath("//*[text()='Create']"));
        await create.click();
    }
 
    async responseOfIfBlockIf(){
        const responseElement=await this.driver.findElement(By.className('ifblockslider__responsebox__responsecontent border-1 mt-1 pl-1 flex-start-center MuiBox-root css-0'));
        const text=responseElement.getText();
        return text
    }

    // async nestedFlowIf(){
    //     await this.driver.sleep(1000);
    //     const nestedstep=await this.driver.findElement(By.id('createfunction__addstep'),1000);
    //      await nestedstep.click();
    // }

    async nestedFlowIf() {
    await this.driver.sleep(1000);

    // Use a CSS selector to find the element with the specific placeholder text
    const nestedstep = await this.driver.findElement(By.css('[placeholder="Add or drop step here"]'), 1000);
    await nestedstep.click();

}

    
    async clickOnFunctionOption() {
        const nestedstep = await this.driver.findElement(By.xpath('//*[@id=":re:-option-3"]/button'), 1000);
        await nestedstep.click();
        await this.driver.sleep(1000);
    

        
        // const functionCode = await this.driver.wait(until.elementLocated(By.className('ace_comment ace_placeholder')), 10000);

        // await functionCode.click();
        // const textArea= await functionCode.findElement(By.className('ace_text-input'));
        // textArea.sendKeys("return true");
        await super.waitForContentToLoad(By.css('[class*="custom_slider__halfscreen"]'));
        const functionBlock= await this.driver.findElement(By.css('[class*="custom_slider__halfscreen"]'));
        const editor = await functionBlock.findElement(By.className('ace_comment ace_placeholder'));
        await editor.click();
        const textArea= functionBlock.findElement(By.className('ace_text-input'));
        textArea.sendKeys("return true");
        
    }

    async clickonfunction2(){
        const step = await this.driver.findElement(By.xpath('/html/body/div[3]/div/ul/li[3]/button'), 1000);
        await step.click();
        
        const inputElement = await this.driver.findElement(By.css('[placeholder="Write your comment here"]'));

        // Enter the text "false" into the input element
        await inputElement.sendKeys("false");
    }

    async testAndUpdate() {
        
        const parentElement = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont .flex-start-center')), 5000);

        const buttons = await parentElement[1].findElements(By.css('button'));
        await buttons[0].click();
        await this.driver.sleep(2000);
        await buttons[1].click();
        await this.driver.sleep(2000);
    }

  
    async addVariableData(){
        const addVar=await this.driver.findElement(By.className('addvariables'));
        await addVar.click();
    }

    async writeFunction(content){
        await super.waitForContentToLoad(By.css('[class*="custom_slider__halfscreen"]'));
        const functionBlock= await this.driver.findElement(By.css('[class*="custom_slider__halfscreen"]'));
        const editor = await functionBlock.findElement(By.className('ace_comment ace_placeholder'));
        await editor.click();
        const textArea= functionBlock.findElement(By.className('ace_text-input'));
        textArea.sendKeys(content);
       
    }
    async clickOnWebHook() {
        // const webHookBtn = await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[2]/div/div/div[2]/button[1]')), 5000);
        const webHookBtn = await this.driver.wait(until.elementLocated(By.id('0option')), 5000);
        await webHookBtn.click();     
    }

    async clickSelectTrigger() {
        const selectTriggerBtn = await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[3]/div/div[1]/div[1]/div/div[1]/div[2]/div/div/div/div/h2')), 5000);
        await selectTriggerBtn.click();
    }

    async clickOnTest(){
        // const navBar = await this.driver.wait(unt)
        const buttons = await this.driver.wait(until.elementsLocated(By.css('.workflownavbar button')), 5000);
        await buttons[3].click();
        const click2= await this.driver.wait(until.elementLocated(By.xpath('//*[@id=":r2t:"]/span[1]')), 5000);

        await click2.click();

    }


    
    

    
   
    // async clickOnStep(index){
    //     await this.steps[index].click();
    //     await super.waitForContentToLoad(By.css(`[class*=${process.env.CUSTOM_SLIDER_CLASS}]`) , 10000);
    //      await this.driver.sleep(1000);
    // }

}


module.exports=IfBlock;
