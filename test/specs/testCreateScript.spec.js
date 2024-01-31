const FlowPage = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect}=require('chai');

const getUniqueName = require('../../utilities/getDate');
let flowPage;

async function testCreateScript(){
    describe('test create script' , async() => {
        before(async() => {
            flowPage = new FlowPage();
        })

        it('should create a new script' , async() => {
            try{
                await flowPage.open(endpoints.HOME);
                await flowPage.loginUser();
                await flowPage.waitForEndpoint(endpoints.PROJECT , 60000);
                await flowPage.clickOnProjectName();
                await flowPage.waitForScriptSlider();
                await flowPage.clickOnNewFlow();
                await flowPage.takeScreenShotCreateScript('createscript.png');
                const isCaptureMode = await flowPage.isCaptureMode;
                if(isCaptureMode) return;
                const comparisonResult = await flowPage.compareScreenShot('createScript.png');
                const num = Math.floor(comparisonResult.rawMisMatchPercentage);
                expect(num).to.be.lessThan(20);
            }catch(err){
                console.log(err);
            }
            }).timeout(700000);

            after(async() => {
                flowPage.close();
               })

    })
}

module.exports = testCreateScript;