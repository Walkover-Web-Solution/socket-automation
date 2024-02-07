const Discard = require('../pages/Flow/discard');
const FlowPage = require('../pages/Flow/flow');
const { endpoints, stepIndex, apiIndex } = require('../enums');
//const IfStep=require('../pages/Flow/if');
const { expect } = require('chai');
const getUniqueName = require('../../utilities/getDate');

//  const flowPage = new FlowPage();

async function testdiscardflow() {

    let discard;
    describe('test case to discard the flow ', async function () {
        before(() => {
            discard = new Discard();
        })

        it("checking Do entry before creating new flow", async function () {
            await discard.open(endpoints.HOME);
            await discard.loginUser();
            await discard.waitForEndpoint(endpoints.PROJECT , 60000);
            await discard.clickOnProjectName();
            await discard.waitForScriptSlider();
            await discard.clickOnNewFlow();
            await discard.webhookClick();
            await discard.closeSlider(1);
            await discard.takeflowStepScreenShotAndSave('flowstep.png');
            const isCaptureMode = await discard.isCaptureMode;
            if (isCaptureMode) return;
            const comparisonResult1 = await discard.compareScreenShot('flowstep.png');
            const num1 = Math.floor(comparisonResult1.rawMisMatchPercentage);
            expect(num1).to.be.lessThan(20);
        }).timeout(700000);

            it("Should generate response successfully and update Api",async function(){
                await discard.addNewStep();
                await discard.clickOnAPI(); 
                await discard.enterURL();
                await discard.clickTest();
    
                const responseData = await discard.getResponseData();
                expect(responseData).to.not.include('status');
    
                await discard.clickUpdate();
                await discard.closeSlider(1);
                await discard.DiscardClick();
                // await discard.DiscardClick();
                // await discard.OkButtonClick();
                //   await discard.DiscardClick();
                

            }).timeout(50000);

            it('should revert the flow',async function(){
                   await discard.DiscardClick();
                   await discard.OkButtonClick();
                   await discard.clickAnyWhere();

                   const alertBox=await discard.errorBox();
                   const lines = alertBox.split(/\r?\n/);
                   const expectedArray=['success','Flow reverted successfully'];
                   expect(lines).to.deep.equal(expectedArray);

             }).timeout(50000);

             it("checked after discard there is no flow inside DO",async function(){
                //   await discard.clickAnyWhere();
                  await discard.takeflowStepAfterScreenShotAndSave('flowstep.png');
                   const isCaptureMode = await discard.isCaptureMode;
            if (isCaptureMode) return;
            const comparisonResult1 = await discard.compareScreenShot('flowstep.png');
            const num1 = Math.floor(comparisonResult1.rawMisMatchPercentage);
            expect(num1).to.be.lessThan(20);

             }).timeout(70000);

             it('should have no step inside do',async function(){
                //  await discard.clickAnyWhere();
             const stepsArray = await discard.getStepsArray();
             expect(stepsArray.length).to.equal(0);

             }).timeout(70000);
            


             after(async() => {
                discard.close();
               })

    });
};

module.exports = testdiscardflow;

