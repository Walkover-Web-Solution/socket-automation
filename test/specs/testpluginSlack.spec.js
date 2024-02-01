//Here we write test cases of IF Block

// const FlowPage = require('../pages/Flow/flow');
const Slack = require('../pages/Flow/slackplugin');
const {endpoints , stepIndex , apiIndex} = require('../enums');
//const IfStep=require('../pages/Flow/if');
const {expect}=require('chai');
const getUniqueName = require('../../utilities/getDate');

//  const flowPage = new FlowPage();

async function testpluginSlack(){
    
    let slack;
    describe('test cases for IF condition under flowPage',async function(){
        before(() => {
            slack = new Slack()
        })

        it("clicking on Slack button",async function(){
            await slack.open(endpoints.HOME);
            await slack.loginUser();
            await slack.waitForEndpoint(endpoints.PROJECT , 60000);
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
             await slack.choosingInputSlack();

        }).timeout(700000);
       
        
    });
};

module.exports=testpluginSlack;


