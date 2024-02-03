// const FlowPage = require('../pages/Flow/flow');
const Live = require('../pages/Flow/makeLive');
const {endpoints , stepIndex , apiIndex} = require('../enums');
const {expect}=require('chai');
// const getUniqueName = require('../../utilities/getDate');


async function testMakeLive(){
    
 
    describe('test cases for making Web Hook flow live',async function(){
        let live;
        before(() => {
            live = new Live();
        })

        it("Flow published successfully",async function(){
            await live.open(endpoints.HOME);
            await live.loginUser();
            await live.waitForEndpoint(endpoints.PROJECT , 60000);
            await live.clickOnProjectName();
            await live.waitForScriptSlider();
            await live.clickOnNewFlow();
            await live.clickSelectTrigger();
            await live.clickOnWebHook();
            await live.closeSlider(1);
            await live.clickOnAddSteps();
            await live.clickOnAPI();
            await live.enterURL();
            // await live.takeAPIFieldScreenShotAndSave('apiField.png');
            await live.testAndUpdate();
            await live.closeSlider(1);
            await live.clickMakeLive();
            // await live.clickStepOne();
        }).timeout(700000);


    });
};





module.exports = testMakeLive;