const Function = require('../pages/Flow/function.js');
const { endpoints, stepIndex } = require('../enums');
const { expect } = require('chai');

const fun = new Function();

async function testFunction() {
    describe('Drag and Drop Elements', function () {
        it('Case: Oprning Flow page', async function () {
            await fun.open(endpoints.HOME);
            await fun.loginUser();
            await fun.waitForEndpoint(endpoints.PROJECT , 60000);
            await fun.clickOnProjectName();
            await fun.waitForScriptSlider();
            await fun.clickOnNewFlow();
            await fun.clickOnScript();
            await fun.closeSlider(); // close trigger slider
            await fun.waitForFlowPageToOpen();
        }).timeout(60000);

            it('Case: Creating Elements to drag and drop', async function () {
            await fun.clickOnAddSteps();
            await fun.getAllStepsUsedFlow();
            await fun.clickOnStep(stepIndex.FUNCTION);
            await fun.funName("fun01");
            await fun.closeSliderFun();

            await fun.clickOnAddSteps();
            await fun.getAllStepsUsedFlow();
            await fun.clickOnStep(stepIndex.FUNCTION);
            await fun.funName("fun02");
            await fun.closeSliderFun(); 

            await fun.clickOnAddSteps();
            await fun.getAllStepsUsedFlow();
            await fun.clickOnStep(stepIndex.FUNCTION);
            await fun.funName("fun03");
            await fun.closeSliderFun(); 
        }).timeout(60000);

            it('Case: Drag and Drop Elements', async function () {

           const successMessage= await fun.DragAndDrop();
            expect(successMessage).to.equal('Drag and drop successful');
        }).timeout(60000);
        
        after(async() => {
            fun.close();
           })
    });
}

module.exports = testFunction;
