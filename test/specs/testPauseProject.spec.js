const ProjectPage = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect} = require('chai');


async function testPauseProject(){
    describe('test pause project' , async() => {
        let projectPage;
        before(async() => {
            projectPage = new ProjectPage();
        })
    
        it('should pause project on pause button click' , async()=>{
            await projectPage.open(endpoints.HOME);
            await projectPage.loginUser();
            await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectPage.waitForProjectToLoad();
            await projectPage.clickOnActionButtonMenuProject();
            await projectPage.pauseProject();
            await projectPage.takeScreenShotOfProject('PauseProject.png');
            const isCaptureMode = await projectPage.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await projectPage.compareScreenShot('PauseProject.png'); 
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
        }).timeout(700000);
        
        it('should active project on active button click' , async()=>{
            await projectPage.clickOnActionButtonMenuProject();
            await projectPage.activeProject();
            await projectPage.takeScreenShotOfProject('activeProject.png');
            const isCaptureMode = await projectPage.isCaptureMode;
            if(isCaptureMode) return;
            const comparisonResult = await projectPage.compareScreenShot('activeProject.png'); 
            const num = Math.floor(comparisonResult.rawMisMatchPercentage);
            expect(num).to.be.lessThan(20);
        }).timeout(700000);
    })    
}

module.exports = testPauseProject;