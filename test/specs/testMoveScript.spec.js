const ProjectPage = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect} = require('chai');
let  scrnam = "" 

async function compareSS(projectPage , imagePath){
    const comparisonResult = await projectPage.compareScreenShot(imagePath);
    const isCaptureMode = await projectPage.isCaptureMode;
    if(isCaptureMode) return;
    const misMatch = Math.floor(comparisonResult.rawMisMatchPercentage);
    return misMatch;
}

async function testDeleteProject(){
    let projectPage;
    describe('Testing move script Functionality' , () => {
        before(async() => {
            projectPage = new ProjectPage();
        })
        it('should open menu on mouse click' , async() => {
            await projectPage.open(endpoints.HOME);
            await projectPage.loginUser();
            await projectPage.loginUser();
            await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectPage.clickOnProjectName();
            // await projectPage.ClickOnMenuButtonmove();
            // await projectPage.takeScreenShotActionButtons('actionButtonsProject.png');
            // const misMatch = await compareSS(projectPage , 'actionButtonsProject.png');
            // if(!misMatch) return;
            // expect(misMatch).to.be.lessThan(20);
        }).timeout(30000)
        
        it('should move script on move button click' , async()=>{
            await projectPage.clickOnNewFlow();
            await projectPage.refreshPage();
            scrnam = await projectPage.sucess();
            console.log(scrnam)

        //  console.log(scrnam)
            await projectPage.actionbtn();
            await projectPage.clickMovescript();
            await projectPage.dropdown_org_proj(0,1);
            await projectPage.move_dup_btn_click();
            
        }).timeout(30000)

        it('should moved' , async()=>{
        var newscr = await projectPage.sucess();     
        expect(scrnam).to.equal(newscr);
        }).timeout(30000)
        
        // after(async() => {
        //  projectPage.close();
        // })
    })
}

module.exports = testDeleteProject;