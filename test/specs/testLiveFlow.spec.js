const Live = require('../pages/Flow/makeLive');
const {endpoints , stepIndex , apiIndex} = require('../enums');
const {expect}=require('chai');


async function testMakeLive(){
    
 
    describe('test cases for making Web Hook flow live',async function(){
        let live;
        before(() => {
            live = new Live();
        })

        it("Should render empty api field",async function(){
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
            
            //Empty Api Field VRT
            const isCaptureMode = await live.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult1 = await live.compareScreenShot('emptyApiField.png');
            const num1 = Math.floor(comparisonResult1.rawMisMatchPercentage);
            expect(num1).to.be.lessThan(20);
        }).timeout(700000);


        it("Should receive response succesfully and update api", async function() {
            await live.enterURL();
            // await live.testAndUpdate();
            await live.clickTest();
            const responseData = await live.getResponseData();
            expect(responseData).to.not.include('status');

            await live.clickUpdate();
            await live.closeSlider(1);
        }).timeout(700000);


        it('Should Make Live successfully', async function() {
            await live.clickMakeLive();

            const alertBox = await live.errorBox();
            const lines = alertBox.split(/\r?\n/);
            const expectedArray = ['success', 'Flow published successfully'];
   
            expect(lines).to.deep.equal(expectedArray);
            
        }).timeout(700000);

        
        it("Should open Api Slider", async function() {
            await live.clickStepOne();
            await live.clickOnEdit();
            await live.takeAPIFieldScreenShotAndSave('apiField.png');
            
            //Api Field VRT
            const isCaptureMode = await live.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult2 = await live.compareScreenShot('apiField.png');
            const num2 = Math.floor(comparisonResult2.rawMisMatchPercentage);
            expect(num2).to.be.lessThan(20);
        })


        it("Should have one step in do", async function () {
            const stepsArray = await live.getStepsArray();
            expect(stepsArray.length).to.equal(1);
        }).timeout(700000);

    });
};





module.exports = testMakeLive;