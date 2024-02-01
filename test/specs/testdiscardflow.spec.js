const Discard = require('../pages/Flow/discard');
const FlowPage = require('../pages/Flow/flow');
const {endpoints , stepIndex , apiIndex} = require('../enums');
//const IfStep=require('../pages/Flow/if');
const {expect}=require('chai');
const getUniqueName = require('../../utilities/getDate');

//  const flowPage = new FlowPage();

async function testdiscardflow(){
    
    let discard;
    describe('test case to discard the flow ',async function(){
        before(() => {
            discard = new Discard();
        })

        it("flow reverted successfully",async function(){
            await discard.open(endpoints.HOME);
            await discard.loginUser();
            await discard.waitForEndpoint(endpoints.PROJECT , 60000);
            await discard.clickOnProjectName();
            await discard.waitForScriptSlider();
            await discard.clickOnNewFlow();
            await discard.webhookClick();
            // await flowPage.takeflowStepScreenShotAndSave('flowstepss.png');
            //  await discard.closeSlider(1);
            await discard.clickSelectTrigger();
            await discard.addNewStep();
            await discard.clickOnAPI();
            await discard.enterURL();
            await discard.testAndUpdate();
            await discard.closeSlider(1);
            await discard.DiscardClick();
            await discard.OkButton();

        }).timeout(700000);
       
        
    });
};

module.exports=testdiscardflow;

