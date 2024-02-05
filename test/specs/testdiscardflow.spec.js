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

        it("flow reverted successfully", async function () {
            await discard.open(endpoints.HOME);
            await discard.loginUser();
            await discard.waitForEndpoint(endpoints.PROJECT, 60000);
            await discard.clickOnProjectName();
            await discard.waitForScriptSlider();
            await discard.clickOnNewFlow();
            await discard.webhookClick();
            await discard.closeSlider(1);
            await discard.takeflowStepScreenShotAndSave('flowstep.png');
            // // await discard.clickSelectTrigger();
            await discard.addNewStep();
            await discard.clickOnAPI();
            await discard.enterURL();
            await discard.testAndUpdate();
            await discard.closeSlider(1);
            await discard.DiscardClick();
            await discard.OkButtonClick();
            await discard.clickAnyWhere();
            await discard.takeflowStepAfterScreenShotAndSave('flowstep.png');
  
            //checking the discard flow if the flow discard successfully than step array will have 0 element
            const stepsArray = await live.getStepsArray();
            expect(stepsArray.length).to.equal(0);

            //vrt on discard flow
            const isCaptureMode = await discard.isCaptureMode;
            if (isCaptureMode) return;
            const comparisonResult1 = await discard.compareScreenShot('flowstep.png');
            const num1 = Math.floor(comparisonResult1.rawMisMatchPercentage);
            expect(num1).to.be.lessThan(20);
        }).timeout(700000);



    });
};

module.exports = testdiscardflow;

