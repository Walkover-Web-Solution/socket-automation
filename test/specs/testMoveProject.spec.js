const ProjectPage = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect} = require('chai');

async function compareSS(projectPage , imagePath){
    const comparisonResult = await projectPage.compareScreenShot(imagePath);
    const isCaptureMode = await projectPage.isCaptureMode;
    if(isCaptureMode) return;
    const misMatch = Math.floor(comparisonResult.rawMisMatchPercentage);
    return misMatch;
}

async function testMoveProject(){
    let projectPage;
    describe('Testing Move Project Functionality' , () => {
        before(async() => {
            projectPage = new ProjectPage();
        })

        // it('should have menu button on mouse hover' , async() => {
        //     await projectPage.open(endpoints.HOME);
        //     await projectPage.loginUser();
        //     await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
        //     await projectPage.takeScreenShotOfMenuButton('menuButtonProject.png');
        //     const misMatch = await compareSS(projectPage , 'menuButtonProject.png');
        //     if(!misMatch) return;
        //     expect(misMatch).to.be.lessThan(20);
        // })

        it('should open menu on mouse click' , async() => {
            await projectPage.open(endpoints.HOME);
            await projectPage.loginUser();
            await projectPage.loginUser();
            await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectPage.ClickOnMenuButton();
            // await projectPage.takeScreenShotActionButtons('actionButtonsProject.png');
            // const misMatch = await compareSS(projectPage , 'actionButtonsProject.png');
            // if(!misMatch) return;
            // expect(misMatch).to.be.lessThan(20);
        }).timeout(30000)
       
        it('should delete project on move button click' , async()=>{
            await projectPage.clickMOveProject();
           
        }).timeout(30000)

        it('should delete project on move button drop box click' , async()=>{
            const orgNameww = await projectPage.nameofmovedproject();
            await projectPage.clickMoveDropbox();
            // await projectPage.Actionsucess();
            await projectPage.refreshPage();
            const nameofproject = await projectPage.sucess();
            expect(nameofproject).to.include(orgNameww);
           
        }).timeout(30000)
        // it('should moved' , async()=>{
        //     // cons
        //     // await projectPage.sucess();

        // })
       
        // after(async() => {
        //  projectPage.close();
        // })
    })
}

module.exports = testMoveProject;