const Function = require('../pages/Flow/function.js');

const {endpoints , stepIndex, stepIndexIf , apiIndex} = require('../enums');
const { expect } = require('chai');
const { exitCode } = require('process');
const { CONNREFUSED } = require('dns');
const { waitForDebugger } = require('inspector');



async function testFunction(){
    describe('Function Test Script', function () {
        let fun;
        before(() => {
            fun = new Function();
        })

        it('should log in ', async function () {
                    await fun.open(endpoints.HOME);
                    await fun.loginUser();
                    await fun.waitForEndpoint(endpoints.PROJECT , 60000);
                    await fun.clickOnProjectName();
                    await fun.waitForScriptSlider();
                    await fun.clickOnNewFlow();
                    await fun.clickOnScript();
                    // await fun.sleepdr();
                    await fun.getAllStepsForIf();
                    await fun.fullWebhookfunction();
                    // await fun.closeSlider(); // close trigger slider
                }).timeout(30000); 
                it('adding api' , async() => {
                    await fun.waitForFlowPageToOpen(); 
                    await fun.clickOnAddSteps();
                    await fun.getAllStepsUsedFlow();
                    await fun.clickOnStep(stepIndex.API);
                    await fun.initialiseApiSlider();
                    await fun.fillStepName('api_step');
                    // await fun.fillUrl("https://api.openweathermap.org/data/2.5/weather?")
                    await fun.fillUrl("api.coincap.io/v2/markets")
                    // await fun.fillkey("lat=22.7174765&lon=75.9009907&appid=b2eccb6b8fed8d75736b0f05576af3a1&")
                    await fun.clickOnDryRunButton();
                    const response = await fun.getResponseData();
                    expect(response).to.not.be.null;
                    await fun.clickOnCreateButton();
                    await fun.waitForStepToCreate();
                    await fun.create();
                    await fun.closebtn();
                }).timeout(300000);
                it('adding function  ', async function () {
                    await fun.clickOnAddSteps();
                    await fun.getAllStepsUsedFlow();
                    await fun.clickOnStep(stepIndex.FUNCTION);
                    await fun.funName("New fun");
                    await fun.writeFunction(`let price = 0;for(var i = 0; i < context?.res?.api_step?.data.length; i++){if(price < context?.res?.api_step?.data?.[i]?.priceUsd){price = context?.res?.api_step?.data?.[i]?.priceUsd;}}return price;`);
                    await fun.dryrun();
                    // await fun.sleepdr();
                    // await fun.sleepdr()
                    // const response = await fun.getResponseData();
                    const response = await fun.functionresponse();
                    expect(response).to.not.be.null;
                    // await fun.clickOnDryRunButton();
                    await fun.create();
                    await fun.closebtn();
                    // await fun.sleepdr();
                }).timeout(30000); 
                it('adding if' , async() => {
                    // await fun.closeSlider(); // close trigger slider
                    // await fun.waitForFlowPageToOpen();
                    await fun.clickOnAddSteps();
                    await fun.getAllStepsUsedFlow();
                    await fun.clickOnStep(stepIndex.IF);
                    await fun.createConditionIf("New");
                    // await fun.sleepdr()
                    await fun.closebtn();
                }).timeout(30000);
                it('adding function in if  ' , async() => {
                    await fun.clickAddStepsInIf();
                    // await fun.sleepdr()
                    await fun.getAllStepsUsedFlow();
                    // await fun.sleepdr()
                    await fun.clickOnStep(stepIndexIf.FUNCTION);
                    await fun.funName("New fun1");
                    await fun.writeFunction(`let price = 0;let coinname = "";for(var i = 0; i < context?.res?.api_step?.data.length; i++){if(price < context?.res?.api_step?.data?.[i]?.priceUsd){price = context?.res?.api_step?.data?.[i]?.priceUsd;coinname=context?.res?.api_step?.data?.[i]?.baseId;}}return coinname`);
                    await fun.dryrun();
                    // await fun.sleepdr();
                    // await fun.sleepdr()
                    // const response = await fun.getResponseData();
                    // const response = await fun.functionresponse();
                    // expect(response).to.not.be.null;
                    // await fun.clickOnDryRunButton();
                    await fun.create();
                    await fun.closebtn();
                    // await fun.sleepdr();
                    
                }).timeout(30000);
                it('add comment ' , async() => {
                            await fun.clickOnAddSteps();
                            await fun.getAllStepsUsedFlow();
                            await fun.clickOnStep(stepIndex.COMMENT)
                            await fun.writeComment("Newcomment")
                        try{
                        
                                }catch(err){
                                            console.log(err);
                                        }
                            }).timeout(30000);
                            it('response block' , async()=>{
                                await fun.clickonresponse();
                                await fun.customResponseEnter("'coin name is '${context?.res?.New_fun1}' coin price in usd is' ${context?.res?.New_fun}")
                                await fun.closebtn();
                                // await fun.sleepdr()
                }).timeout(30000);
                        it('dry run' , async() => {
                            await fun.makelive()
                        await fun.dryrunclick();
                        await fun.refreshPage();
                        await fun.dryrunbtn();
                    }).timeout(30000);
                    
                })
            }
            
                
                
module.exports =  testFunction  ;
