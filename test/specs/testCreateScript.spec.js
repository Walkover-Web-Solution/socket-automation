const FlowPage = require('../pages/Flow/flow');
const {endpoints} = require('../enums');
const getUniqueName = require('../../utilities/getDate');
const { expect } = require('chai');
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
                const numberOfScripsBeforeClick = (await flowPage.getListOfScripts()).length;
                await flowPage.clickOnNewFlow(); // this creates a new script 
                const numberOfScripsAfterClick = (await flowPage.getListOfScripts()).length;
                expect(numberOfScripsAfterClick).to.equal(numberOfScripsBeforeClick+1);
            }catch(err){
                console.log(err);
            }
        })
        
        after(async() => {
            await flowPage.close();
        })
    })
}

module.exports = testCreateScript;