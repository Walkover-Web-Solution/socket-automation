//Here we write test cases of IF Block

// const FlowPage = require('../pages/Flow/flow');
const Slack = require('../pages/Flow/slackplugin');
const { endpoints, stepIndex, apiIndex } = require('../enums');
//const IfStep=require('../pages/Flow/if');
const { expect } = require('chai');
const getUniqueName = require('../../utilities/getDate');

//  const flowPage = new FlowPage();

async function testpluginSlack() {

    let slack;
    describe('test cases for IF condition under flowPage', async function () {
        before(() => {
            slack = new Slack()
        })

        it("clicking on Slack button", async function () {
            await slack.open(endpoints.HOME);
            await slack.loginUser();
            await slack.waitForEndpoint(endpoints.PROJECT, 60000);
            await slack.clickOnProjectName();
            await slack.waitForScriptSlider();
            await slack.clickOnNewFlow();
            await slack.closeSlider(); // close trigger slider
            await slack.waitForFlowPageToOpen();
            await slack.clickOnAddSteps();
            await slack.getAllStepsUsedFlow();
            await slack.clickOnSlack();
            await slack.ClickOnSlackMessage();
            await slack.clickOnSelectButtonInSlack();
            await slack.SelectingOption();
            await slack.takeScreenShotAuthId('authenticationSlack.png');
            await slack.clickOnVerify()
            await slack.choosingInputSlack();
            await slack.takeScreenShotSlackResponse('slackResponse.png');
            const isCaptureMode = await slack.isCaptureMode;
            if (isCaptureMode) return;
            const comparisonResult1 = await slack.compareScreenShot('authenticationSlack.png');
            const num1 = Math.floor(comparisonResult1.rawMisMatchPercentage);
            expect(num1).to.be.lessThan(20);

            const comparisonResult2 = await slack.compareScreenShot('slackResponse.png');
            const num2 = Math.floor(comparisonResult2.rawMisMatchPercentage);
            expect(num2).to.be.lessThan(20);


        }).timeout(700000);
       after(async() => {
            slack.close();
           })

    });
};

module.exports = testpluginSlack;


