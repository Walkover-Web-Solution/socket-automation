const { endpoints } = require('../../enums');
const { By, until, Key } = require('selenium-webdriver');
const FlowPage = require('./flow');


class Slack extends FlowPage {

    constructor() {
        super();
        this.driver = super.Driver;
    }
    async clickOnSlack() {
        try {
            const slackButton = await this.driver.wait(until.elementLocated(By.id(':rc:-option-8')), 5000);
            await slackButton.click();
        } catch (error) {
            console.error('Error clicking on Slack button:', error);
        }

    }

    async ClickOnSlackMessage() {
        const SlackMessage = await this.driver.wait(until.elementLocated(By.className('list p-1  cursor-pointer')), 5000);
        await SlackMessage.click();
    }
    async clickOnSelectButtonInSlack() {
        const selectingSlack = await this.driver.wait(until.elementLocated(By.className('MuiFormControl-root w-100 css-198mb5z')));
        await selectingSlack.click();
    }

    async SelectingOption() {
        const FirstOption = await this.driver.wait(until.elementLocated(By.className('authDropDownSpan')), 5000);
        await FirstOption.click();
        const ThirdOption = await this.driver.wait(until.elementLocated(By.css('[placeholder="Auth ID"]')), 5000);
        await ThirdOption.click();
        await ThirdOption.sendKeys('auth2jzYTnsZ');
    }

    async clickOnVerify() {
        const masterSliderBtns = await this.driver.wait(until.elementsLocated(By.css('.masterslider_cont button')), 5000);
        const verifyBtn = masterSliderBtns[4];
        verifyBtn.click();
        await this.driver.sleep(5000);
    }


    async choosingInputSlack() {
        const MenuOption = await this.driver.wait(until.elementLocated(By.css('[data-testid="ArrowDropDownIcon"]')), 5000);
        await MenuOption.click();
        const ChoosingOption = await this.driver.wait(until.elementLocated(By.id('combo-box-demo-option-1')), 5000);
        await ChoosingOption.click();

        const FillingOption = await this.driver.wait(until.elementsLocated(By.className('input-parent')), 5000);
        const textArea = await FillingOption[1].findElement(By.css('textarea'));
        await textArea.sendKeys('walkover');

        const clickingtest = await this.driver.wait(until.elementsLocated(By.className('MuiButton-endIcon MuiButton-iconSizeMedium')), 5000);
        await clickingtest[1].click();

    }

    async takeScreenShotAuthId(imagePath) {
        const authid = await this.driver.wait(until.elementLocated(By.className('flex-col-start-center w-100 gap-1')), 5000);
        const screenShot = await authid.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);


    }

    async takeScreenShotSlackResponse(imagePath) {
        const slackResponse = await this.driver.wait(until.elementLocated(By.className('object-key-val')), 5000);
        await this.driver.executeScript("arguments[0].scrollIntoView();", slackResponse);
        await this.driver.sleep(1000);
        const screenShot = await slackResponse.takeScreenshot();
        await super.takeScreenShotAndSave(screenShot, imagePath);
    }


}


module.exports = Slack;
