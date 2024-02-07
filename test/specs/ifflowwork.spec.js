const FlowPage = require('../pages/Flow/flow');
const Function = require('../pages/Flow/function.js');
const {endpoints , stepIndex , apiIndex, stepIndexIf} = require('../enums');
const IfStep=require('../pages/Flow/if');
const {expect}=require('chai');
const getUniqueName = require('../../utilities/getDate');

// const flowPage = new FlowPage();

async function ifflowwork(){
    
    let ifStep;
    describe('test cases for IF condition under flowPage',async function(){
        before(() => {
            ifStep=new IfStep()
        })

        it("Opening and creating new flow and creating a new variable to store value",async function(){
            await ifStep.open(endpoints.HOME);
            await ifStep.loginUser();
            await ifStep.waitForEndpoint(endpoints.PROJECT , 60000);
            await ifStep.clickOnProjectName();
            await ifStep.waitForScriptSlider();
            await ifStep.clickOnNewFlow();
            // await ifStep.clickOnScript();
            await ifStep.closeSlider(); // close trigger slider
            await ifStep.waitForFlowPageToOpen();
            await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.VARIABLE);
            await ifStep.fillVariableName("responseMessage");
            await ifStep.fillVariableValue('""');

            await ifStep.clickOnCreateButton(true);
           await ifStep.sleepAfterCreate();
    

        }).timeout(700000);

        it("creating a first variable",async function(){
            await ifStep.clickOnAddSteps();
           await ifStep.getAllStepsUsedFlow();
           await ifStep.clickOnStep(stepIndex.VARIABLE);
           await ifStep.fillVariableName("number1");
           await ifStep.fillVariableValue('10');
           await ifStep.clickOnCreateButton(true);
           await ifStep.sleepAfterCreate();


      }).timeout(700000);

        it("creating a second variable",async function(){
             await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.VARIABLE);
            await ifStep.fillVariableName("number2");
            await ifStep.fillVariableValue('9');
            await ifStep.clickOnCreateButton(true);
            await ifStep.sleepAfterCreate();



         }).timeout(700000);


        it("click on if to execute if block for true condition ",async function(){
            await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.IF);
            // await ifStep.addVariableData();
            await ifStep.createConditionIf("context.vals.number1==context.vals.number2");
            await ifStep.nestedFlowIf();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndexIf.FUNCTION);
            await ifStep.writeFunction("context.vals.responseMessage='equal'");
            await ifStep.testAndUpdate();
            await ifStep.sleepAfterCreate();
           

           
        }).timeout(700000);

        it("click on if to execute if block for false condition ",async function(){
            await ifStep.clickOnAddSteps();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndex.IF);
            // await ifStep.addVariableData();
            await ifStep.createConditionIf("context.vals.number1!=context.vals.number2");
            await ifStep.nestedFlowIf();
            await ifStep.getAllStepsUsedFlow();
            await ifStep.clickOnStep(stepIndexIf.FUNCTION);
            await ifStep.sleepAfterCreate();
            await ifStep.writeFunction("context.vals.responseMessage='not equal'");
            await ifStep.sleepAfterCreate();
            await ifStep.testAndUpdate();
            // await ifStep.clickonresponse();
            // await ifStep.customResponseEnter("context?.vals?.response");

           
         }).timeout(700000);

        it("click on if to execute if block for false condition ",async function(){
            await ifStep.clickSelectTrigger();
            await ifStep.clickOnWebHook();
            
            await ifStep.responseFunction();
            await ifStep.customResponseEnter("context?.vals?.responseMessage");
            await ifStep.sleepAfterCreate();
            await ifStep.clickOnTest();

        }).timeout(700000);




        
    });
};

module.exports=ifflowwork;