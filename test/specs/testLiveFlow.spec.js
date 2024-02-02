// const FlowPage = require('../pages/Flow/flow');
const Live = require('../pages/Flow/makeLive');
const {endpoints , stepIndex , apiIndex} = require('../enums');
const {expect}=require('chai');
// const getUniqueName = require('../../utilities/getDate');


async function testMakeLive(){
    
    let live;
    describe('test cases for making Web Hook flow live',async function(){
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
            await live.takeAPIFieldScreenShotAndSave('emptyApiField.png');
            
            await live.enterURL();
            await live.testAndUpdate();
            await live.closeSlider(1);
            await live.clickMakeLive();
            
            await live.clickStepOne();
            await live.clickOnEdit();
            await live.takeAPIFieldScreenShotAndSave('apiField.png');


            const stepsArray = await live.getStepsArray();
            expect(stepsArray.length).to.equal(1);
            //Empty Api Field VRT
            const isCaptureMode = await live.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult1 = await live.compareScreenShot('emptyApiField.png');
            const num1 = Math.floor(comparisonResult1.rawMisMatchPercentage);
            expect(num1).to.be.lessThan(20);
            //Api Field VRT
            const comparisonResult2 = await live.compareScreenShot('apiField.png');
            const num2 = Math.floor(comparisonResult2.rawMisMatchPercentage);
            expect(num2).to.be.lessThan(20);
        }).timeout(700000);


    });
};





module.exports = testMakeLive;