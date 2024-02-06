const Functions = require('../pages/Flow/function.js');
const {endpoints , stepIndex} = require('../enums');
const { expect } = require('chai');


async function testFunction(){
   
            describe('Step Duplicate', function () {
                let fun;
                before(() => {
                    fun = new Functions();
                })
                it('Case:01 Creating function', async function () {
                    await fun.open(endpoints.HOME);
                    await fun.loginUser();
                    await fun.waitForEndpoint(endpoints.PROJECT , 60000);
                    await fun.clickOnProjectName();
                    await fun.waitForScriptSlider();
                    await fun.clickOnNewFlow();
                    // await fun.clickOnScript();
                    await fun.closeSlider(); 
                    await fun.waitForFlowPageToOpen();
                    await fun.clickOnAddSteps();
                    await fun.getAllStepsUsedFlow();
                    await fun.clickOnStep(stepIndex.FUNCTION);
                    await fun.funName("NewFun");
                    await fun.writeFunction("return true");
                    await fun.dryrun();
                    await fun.create();


                }).timeout(30000); 


                it('Case:02 Duplicating function',async function(){
                   
                    await fun.closeFunctionSlider();
                    await fun.goToFunctionStep();
                    await fun.duplicateFunction();
                    await fun.dryrun();
                    await fun.create();
                    await fun.takeScreenShotDuplicateFunction('dupilcateFunction.png');
                    const isCaptureMode = await fun.isCaptureMode;
                    if(isCaptureMode) return;
                    const comparisonResult = await fun.compareScreenShot('dupilcateFunction.png'); 
                    const num = Math.floor(comparisonResult.rawMisMatchPercentage);
                    expect(num).to.be.lessThan(20);

                }).timeout(30000);

                it('Case:03 Duplicating function Delete',async function(){
                   
                    await fun.closeFunctionSlider();
                    await fun.goToDuplicateFunctionStep();
                    await fun.deleteFunction();

                }).timeout(30000);

                after(async() => {
                    fun.close();
                   })

              });
}
module.exports = testFunction;


