//Here we write test cases of IF Block

const FlowPage = require('../pages/Flow/flow');
const {endpoints , stepIndex , apiIndex} = require('../enums');
const IfStep=require('../pages/Flow/if');
const {expect}=require('chai');
const getUniqueName = require('../../utilities/getDate');

// const flowPage = new FlowPage();

async function testIfBlockStep(){
    
    let ifStep;
    describe('test cases for IF condition under flowPage',async function(){
        before(() => {
            ifStep=new IfStep()
        })

        it("Opening and creating new flow",async function(){
            await ifStep.open(endpoints.HOME);
            await ifStep.loginUser();
            await ifStep.waitForEndpoint(endpoints.PROJECT , 60000);
            await ifStep.clickOnProjectName();
            await ifStep.waitForScriptSlider();
            await ifStep.clickOnNewFlow();
            // await ifStep.clickOnScript();
            await ifStep.closeSlider(); // close trigger slider
            await ifStep.waitForFlowPageToOpen();
        }).timeout(700000);

            it("if block created successfully with true condtiton",async function(){
            await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.IF);
            await ifStep.createConditionIf("true");
            const text_name=await ifStep.responseOfIfBlockIf();
            expect(text_name).to.include("true");
            await ifStep.takeScreenShotFunctionSlider('ifTrue.png');
            const isCaptureMode = await ifStep.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await ifStep.compareScreenShot('ifTrue.png'); 
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
            await ifStep.crossIfBlock();
            // await ifStep.deleteIfBlock();
        }).timeout(700000);
       
        it("if block created successfully with false condition",async function(){
            // await ifStep.waitFor5Min();
            // await ifStep.waitForFlowPageToOpen();
            await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.IF);
            await ifStep.createConditionIf("false");
            const text_name=await ifStep.responseOfIfBlockIf();
            expect(text_name).to.include("false");
            await ifStep.takeScreenShotFunctionSlider('ifFalse.png');
            const isCaptureMode = await ifStep.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await ifStep.compareScreenShot('ifFalse.png'); 
           
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
            // await ifStep.crossIfBlock();
            // await ifStep.crossIfBlock();
            // await ifStep.deleteIfBlock();
        }).timeout(700000);

        after(async() => {
            ifStep.close();
           })
    });
};

module.exports=testIfBlockStep;