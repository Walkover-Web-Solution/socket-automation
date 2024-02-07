const FlowPage = require('../pages/Flow/if');
const {endpoints , stepIndex , apiIndex} = require('../enums');
const {expect, assert} = require('chai');


async function testLogCreation(){
    describe('Test for checking the creation of log on dry run' , () => {
        let flowPage;
        before(() => {
            flowPage = new FlowPage();
        })

        it('Should have zero logs in log history' , async() => {
            await flowPage.open(endpoints.HOME);
            await flowPage.loginUser();
            await flowPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await flowPage.clickOnProjectName();
            await flowPage.waitForScriptSlider();
            await flowPage.clickOnNewFlow();
            await flowPage.clickSelectTrigger();
            await flowPage.clickOnWebHook();
            await flowPage.closeSlider(1);
            await flowPage.clickonresponse();
            await flowPage.openLogHistorySlider();
            const logsCount = await flowPage.getLogsCount();
            expect(logsCount).to.equal(0);
        }).timeout(30000);


        it('Should dry run the web hook and get response', async() => {
            await flowPage.customResponseEnter(`"Done"`);
            await flowPage.dryrunclick();
            await flowPage.dryrunbtn();
            await flowPage.waitForCustomResponse("Done");
        }).timeout(30000);


        it('Should have one log in log history', async() => {
            const logsCount2 = await flowPage.getLogsCount();
            expect(logsCount2).to.equal(1);
        }).timeout(30000);

        after(async()=>{
            await flowPage.close();
        })
    })
}


module.exports = testLogCreation;