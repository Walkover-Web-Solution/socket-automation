const ResponseAndWebhook = require('../pages/Flow/response.js');

const {endpoints } = require('../enums.js');
const { expect } = require('chai');
// const { exitCode } = require('process');
// const { CONNREFUSED } = require('dns');
// const getUniqueName = require('../../utilities/getDate');



async function testWebhookResponse(){
        
            describe('Webhook Test Script', function () {
                let responseAndWebhook;
                before(() => {
                    responseAndWebhook = new ResponseAndWebhook();
                })
                it('Opening and creating webhook block ', async function () {
                    await responseAndWebhook.open(endpoints.HOME);
                    await responseAndWebhook.loginUser();
                    await responseAndWebhook.waitForEndpoint(endpoints.PROJECT , 60000);
                    await responseAndWebhook.clickOnProjectName();
                    await responseAndWebhook.waitForScriptSlider();
                    await responseAndWebhook.clickOnNewFlow();
                    // await ifStep.clickOnScript();
                    // await ifStep.closeSlider(); // close trigger slider
                    // await ifStep.waitForFlowPageToOpen();
                    // await responseAndWebhook.createNewScript(getUniqueName('WR'));
                    // await responseAndWebhook.clickOnScript();
                    await responseAndWebhook.waitForFlowPageToOpen();
                    await responseAndWebhook.getAllStepsForIf();
                    await responseAndWebhook.fullWebhookfunction();
                    await responseAndWebhook.takeScreenShotWebhookSlider('webhookSlider.png');
                    const isCaptureMode = await responseAndWebhook.isCaptureMode;
                    if(isCaptureMode) return;
                    const comparisonResult = await responseAndWebhook.compareScreenShot('webhookSlider.png'); 
                    const num = Math.floor(comparisonResult.rawMisMatchPercentage);
                    expect(num).to.be.lessThan(20);
                    await responseAndWebhook.closeSlider();
                        }).timeout(30000); 

                it('Opening response custom block', async function () {
                    await responseAndWebhook.waitForFlowPageToOpen();
                    await responseAndWebhook.responseFunction();
                    await responseAndWebhook.takeScreenShotWebhookResponseBlock('webhookResponseBlock.png');
                    const isCaptureMode = await responseAndWebhook.isCaptureMode;
                    if(isCaptureMode) return;
                    const comparisonResult = await responseAndWebhook.compareScreenShot('webhookResponseBlock.png'); 
                    const num = Math.floor(comparisonResult.rawMisMatchPercentage);
                    expect(num).to.be.lessThan(20);
                   
                        }).timeout(30000); 
                it('Entering data in custom response block and checking response ', async function () {
                    await responseAndWebhook.customResponseEnter('Response working');
                    const text_name= await responseAndWebhook.responseOfWebhook();
                    expect(text_name).to.include("Response working");
                    await responseAndWebhook.takeScreenShotWebhookResponse('webhookResponse.png');
                    const isCaptureMode = await responseAndWebhook.isCaptureMode;
                    if(isCaptureMode) return;
                    const comparisonResult = await responseAndWebhook.compareScreenShot('webhookResponse.png'); 
                    const num = Math.floor(comparisonResult.rawMisMatchPercentage);
                    expect(num).to.be.lessThan(20);
                        }).timeout(30000); 

                        after(async() => {
                            responseAndWebhook.close();
                           })
                                
              });

}
module.exports = testWebhookResponse;