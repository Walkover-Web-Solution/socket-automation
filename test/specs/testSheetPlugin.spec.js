const FlowPage = require('../pages/Flow/flow');
const Sheets = require('../pages/Flow/sheetPlugin');
const {endpoints , stepIndex , apiIndex} = require('../enums');
const {expect}=require('chai');

async function testSheetPlugin(){
    
<<<<<<< HEAD
    let sheets;
<<<<<<< Updated upstream
    let sheetId = '1Qzi54LJ1yVL-M4J5LEAs97runpMAzRI_vUt56WpsGAM';
    let responseData;
    describe('Test cases google sheet plugin',async function(){
=======
=======
    // let flowPage;
>>>>>>> 4272e60a249121c9adb4d3ea20d1fe32f035894e
    describe('test cases for IF condition under flowPage',async function(){
        let sheets;
>>>>>>> Stashed changes
        before(() => {
            sheets = new Sheets();
        })

        it("Should render google sheet step",async function(){
            await sheets.open(endpoints.HOME);
            await sheets.loginUser();
            await sheets.waitForEndpoint(endpoints.PROJECT , 60000);
            await sheets.clickOnProjectName();
            await sheets.waitForScriptSlider();
            await sheets.clickOnNewFlow();
            await sheets.closeSlider(); // close trigger slider
            await sheets.waitForFlowPageToOpen();
            await sheets.clickOnAddSteps();
            await sheets.getAllStepsUsedFlow();
            await sheets.clickOnSheets();
            await sheets.takeSheetOptionsScreenShortAndSave('sheetOptionField.png');
            await sheets.clickAddSheet();
            const isCaptureMode = await sheets.isCaptureMode;
                if(isCaptureMode) return;
                const comparisonResult = await sheets.compareScreenShot('sheetOptionField.png'); 
                const num = Math.floor(comparisonResult.rawMisMatchPercentage);
                expect(num).to.be.lessThan(20);
            
        }).timeout(700000);


        it('Should enter and authorize auth id' , async() => {
            await sheets.clickSelectMenuOnAddSheet();
            await sheets.enterAuthId('auth2zI9JksP');

            const alertBox = sheets.errorBox();
            expect(alertBox).to.not.equal('success','Verified');         
        }).timeout(30000);


        it('Should enter fields', async() => {
            await sheets.takeSheetDetailsScreenShortAndSave('googleAddSheetDetails.png');
            await sheets.enterFields();

            const isCaptureMode = await sheets.isCaptureMode;
                if(isCaptureMode) return;
                const comparisonResult = await sheets.compareScreenShot('googleAddSheetDetails.png'); 
                const num = Math.floor(comparisonResult.rawMisMatchPercentage);
                expect(num).to.be.lessThan(20);
        }).timeout(30000);

        it('Should check response recieved', async() => {
            responseData = await sheets.getResponseeData();
            expect(responseData).to.not.include('status');
        })

        it('Should contain correct spreadsheetid', async() => {
            const str = `"spreadsheetId":string"${sheetId}"`;
            expect(responseData).to.include(str);
        })
    });
};





module.exports=testSheetPlugin;