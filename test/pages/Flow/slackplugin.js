const {endpoints} = require('../../enums');
const {By,until,Key} = require('selenium-webdriver');
const FlowPage=require('./flow');


class Slack extends FlowPage{

    constructor(){
        super();
        this.driver = super.Driver;
    }
    async clickOnSlack() {
        try {
            const slackButton = await this.driver.wait(until.elementLocated(By.xpath('//*[@id=":rc:-option-8"]/button')), 5000);
            await slackButton.click();
        } catch (error) {
            console.error('Error clicking on Slack button:', error);
        }
        
    }

    async ClickOnSlackMessage(){
        const SlackMessage= await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[3]/div/div[2]/div/div[2]/div/div[2]/div/div/nav/div[1]/div/p[1]')),5000);
        await SlackMessage.click();
    }
     async clickOnSelectButtonInSlack(){
        const selectingSlack= await this.driver.wait(until.elementLocated(By.xpath('/html/body/div/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[3]/div[1]/div/div/div[2]/div')));
        await selectingSlack.click();
     }

     async SelectingOption(){
        const FirstOption=await this.driver.wait(until.elementLocated(By.xpath('/html/body/div[2]/div[3]/ul/li[2]')),5000);
        await FirstOption.click();
        const SecondOption=await this.driver.wait(until.elementLocated(By.xpath('//*[@id=":rk:"]/li[2]')),5000);
        await SecondOption.click();

        const ThirdOption=await this.driver.wait(until.elementLocated(By.xpath(' //*[@id="root"]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[3]/div[2]/div/div/div/div[2]/div[1]/div/textarea')),5000);
        await ThirdOption.click();
        await ThirdOption.sendKeys('auth2jzYTnsZ');

        const VerifyOption=await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[3]/div[2]/div/div/button')),5000);
        await VerifyOption.click();
     }


     async choosingInputSlack(){
        const MenuOption=await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[4]/div[2]/div/div/div/div/div/button')),5000);
        await MenuOption.click();
        const ChoosingOption=await this.driver.wait(until.elementLocated(By.xpath('  //*[@id="combo-box-demo-option-1"]')),5000);
        await ChoosingOption.click();

        const FillingOption=await this.driver.wait(until.elementLocated(By.xpath(' //*[@id="root"]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[5]/div/div/div[2]/div[1]/div/textarea')),5000);
        await FillingOption.click();
        await FillingOption.sendKeys('walkover');
        
         const clickingtest=await this.driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div[3]/div/div[3]/div[5]/div/div/div/div[1]/div[6]/div/button[1] ')),5000);
         await clickingtest.click();

     }


   

}


module.exports = Slack;
