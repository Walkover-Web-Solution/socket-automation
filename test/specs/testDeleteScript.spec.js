const ProjectPage = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect} = require('chai');


async function testDeleteScript(){
    describe('test delete script' , async() => {
        let projectPage;
        let nameOfDeletedScript;
        before(async() => {
            projectPage = new ProjectPage();
        })
        
        it('delete the latest script and goes to recycle bin' , async() => {
            await projectPage.open(endpoints.HOME);
            await projectPage.loginUser();
            await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectPage.clickOnProjectName();
            await projectPage.waitForScriptSlider();
            await projectPage.clickOnNewFlow();
            await projectPage.closeSlider();
            await projectPage.goBackToFlowPage();
            await projectPage.clickOnActionButtonMenuOfScript();
            await projectPage.pauseScript();
            await projectPage.goBackToFlowPage();
            nameOfDeletedScript=await projectPage.clickOnActionButtonMenuOfScript();
            await projectPage.deleteScript();
            const scriptListDiv = await projectPage.getListOfScripts();
            expect(scriptListDiv).to.not.include(nameOfDeletedScript);
            await projectPage.takeScreenShotDeleteScript('Delete.png');
            const isCaptureMode = await projectPage.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await projectPage.compareScreenShot('Delete.png'); 
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
            await projectPage.takeScreenShotOfMenuButton('menuButtonScript.png');
            const misMatch = await compareSS(projectPage , 'menuButtonScript.png');
            if(!misMatch) return;
            expect(misMatch).to.be.lessThan(20);
        }).timeout(30000); 

        it('List of deleted script should contain name of latest deleted script' , async() => {
            const listOfNamesOfDeletedScript = await projectPage.getListOfDeletedScripts();
            expect(listOfNamesOfDeletedScript).to.include(nameOfDeletedScript);
        }).timeout(30000); 

        it('Again active script' , async() => {
            await projectPage.goToDeleteScript();
            await projectPage.activeScript();
            await projectPage.takeScreenShotActiveScript('activeDelete.png');
            const isCaptureMode = await projectPage.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await projectPage.compareScreenShot('activeDelete.png'); 
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
        }).timeout(30000); 

        after(async() => {
            projectPage.close();
           })
        
    })
}

module.exports = testDeleteScript;