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

        it("if block created successfully with true condtiton",async function(){
            await ifStep.open(endpoints.HOME);
            await ifStep.loginUser();
            await ifStep.waitForEndpoint(endpoints.PROJECT , 60000);
            await ifStep.clickOnProjectName();
            await ifStep.waitForScriptSlider();
            await ifStep.clickOnNewFlow();
            await ifStep.clickOnScript();
            await ifStep.closeSlider(); // close trigger slider
            await ifStep.waitForFlowPageToOpen();
            await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.IF);
            await ifStep.createConditionIf("true");
            const text_name=await ifStep.responseOfIfBlockIf();
            expect(text_name).to.include("true");
            // await ifStep.crossIfBlock();
            await ifStep.deleteIfBlock();
        }).timeout(700000);
       
        it("if block created successfully with false condition",async function(){
            // await ifStep.waitFor5Min();
            await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.IF);
            await ifStep.createConditionIf("false");
            const text_name=await ifStep.responseOfIfBlockIf();
            expect(text_name).to.include("false");
            // await ifStep.crossIfBlock();
            await ifStep.deleteIfBlock();
        }).timeout(700000);
    });
};

module.exports=testIfBlockStep;