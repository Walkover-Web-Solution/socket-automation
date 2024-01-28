const ProjectPage = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect} = require('chai');


async function testPauseScript(){
    describe('test pause script' , async() => {
        
        let projectPage;
        let nameOfPausedScript = '';
        before(async() => {
            projectPage = new ProjectPage();
        })
        
        it('should pause script on pause button click' , async()=>{
            await projectPage.open(endpoints.HOME);
            await projectPage.loginUser();
            await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectPage.clickOnProjectName();
            await projectPage.waitForScriptSlider();
            nameOfPausedScript = await projectPage.clickOnActionButtonMenuOfScript();
            await projectPage.pauseScript();
            const nameOfScripts = await projectPage.getListOfScripts();
            expect(nameOfScripts).to.not.include(nameOfPausedScript);
            await projectPage.takeScreenShotPauseScript('pause.png');
            const isCaptureMode = await projectPage.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await projectPage.compareScreenShot('pause.png'); 
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
        }).timeout(30000); 
        
        it('should send script in paused script section in script slider' , async() => {
            const nameOfPausedScripts = await projectPage.getListOfPausedScripts();
            expect(nameOfPausedScripts).to.include(nameOfPausedScript);
        }).timeout(30000); 

        it('Again active script' , async() => {
            await projectPage.goToPauseScript();
            await projectPage.activeScript();
            await projectPage.takeScreenShotActiveScript('active.png');
            const isCaptureMode = await projectPage.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await projectPage.compareScreenShot('active.png'); 
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
        }).timeout(30000); 
       
    })
}

module.exports = testPauseScript;