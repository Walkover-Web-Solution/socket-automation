//Here we write test cases of IF Block

const FlowPage = require('../pages/Flow/flow');
const Sheets = require('../pages/Flow/sheetPlugin');
const {endpoints , stepIndex , apiIndex} = require('../enums');
// const IfStep=require('../pages/Flow/if');
const {expect}=require('chai');
const getUniqueName = require('../../utilities/getDate');

async function testIfBlockStep(){
    
    // let flowPage;
    describe('test cases for IF condition under flowPage',async function(){
        let sheets;
        before(() => {
            sheets = new Sheets();
        })

        it("if block created successfully with true condtiton",async function(){
            await sheets.open(endpoints.HOME);
            await sheets.loginUser();
            await sheets.waitForEndpoint(endpoints.PROJECT , 60000);
            await sheets.clickOnProjectName();
            await sheets.waitForScriptSlider();
            await sheets.clickOnNewFlow();
            // await ifStep.clickOnScript();
            await sheets.closeSlider(); // close trigger slider
            await sheets.waitForFlowPageToOpen();
            await sheets.clickOnAddSteps();
            await sheets.getAllStepsUsedFlow();
            // await flowPage.clickOnStep(stepIndex.SHEETS);
            await sheets.clickOnSheets();
            await sheets.clickAddSheet();
            await sheets.clickSelectMenuOnAddSheet();
            await sheets.enterAuthId('auth2zI9JksP');
            await sheets.enterFields();
            // await flowPage.select
            // await flowPage.createConditionIf("true");
            // const text_name=await ifStep.responseOfIfBlockIf();
            // expect(text_name).to.include("true");
            // await ifStep.takeScreenShotFunctionSlider('ifTrue.png');
            // const isCaptureMode = await ifStep.isCaptureMode;
            // if(isCaptureMode) return;
            // const comparisonResult = await ifStep.compareScreenShot('ifTrue.png'); 
            // const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            // expect(num).to.be.lessThan(20);
            // await ifStep.crossIfBlock();
            // await ifStep.deleteIfBlock();
        }).timeout(700000);
    });
};





module.exports=testIfBlockStep;