const FunctionDrag = require('../pages/Flow/function.js');
const { endpoints, stepIndex } = require('../enums');
const { expect } = require('chai');


async function testDragFunction() {
   
    describe('Drag and Drop Elements', function () {
        let funDrag;
        before(() => {
            funDrag = new FunctionDrag();
        })
        it('Case: Oprning Flow page', async function () {
            await funDrag.open(endpoints.HOME);
            await funDrag.loginUser();
            await funDrag.waitForEndpoint(endpoints.PROJECT , 60000);
            await funDrag.clickOnProjectName();
            await funDrag.waitForScriptSlider();
            await funDrag.clickOnNewFlow();
            await funDrag.clickOnScript();
            await funDrag.closeSlider(); // close trigger slider
            await funDrag.waitForFlowPageToOpen();
        }).timeout(60000);

            it('Case: Creating Elements to drag and drop', async function () {
            await funDrag.clickOnAddSteps();
            await funDrag.getAllStepsUsedFlow();
            await funDrag.clickOnStep(stepIndex.FUNCTION);
            await funDrag.funName("fun01");
            await funDrag.closeSliderFun();

            await funDrag.clickOnAddSteps();
            await funDrag.getAllStepsUsedFlow();
            await funDrag.clickOnStep(stepIndex.FUNCTION);
            await funDrag.funName("fun02");
            await funDrag.closeSliderFun(); 

            await funDrag.clickOnAddSteps();
            await funDrag.getAllStepsUsedFlow();
            await funDrag.clickOnStep(stepIndex.FUNCTION);
            await funDrag.funName("fun03");
            await funDrag.closeSliderFun(); 
        }).timeout(60000);

            it('Case: Drag and Drop Elements', async function () {

           const successMessage= await funDrag.DragAndDrop();
            expect(successMessage).to.equal('Drag and drop successful');
        }).timeout(60000);
        
        after(async() => {
            funDrag.close();
           })
    });
}

module.exports = testDragFunction;
