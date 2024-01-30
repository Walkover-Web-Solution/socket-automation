const ProjectPage = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect} = require('chai');
const flowtitle = "xyzflow12" 

async function compareSS(projectPage , imagePath){
    const comparisonResult = await projectPage.compareScreenShot(imagePath);
    const isCaptureMode = await projectPage.isCaptureMode;
    if(isCaptureMode) return;
    const misMatch = Math.floor(comparisonResult.rawMisMatchPercentage);
    return misMatch;
}

async function testDeleteProject(){
    let projectPage;
    describe('Testing duplicate script Functionality' , () => {
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
        
        it('should duplicate project on duplicaste button click' , async()=>{
            await projectPage.clickOnNewFlow();
            // await projectPage.refreshPage();
            // scrnam = await projectPage.sucess();
            // console.log(scrnam)

        //  console.log(scrnam)
            await projectPage.actionbtn();
            await projectPage.clickduplicatescr();
            // await projectPage.scrduplicatedropbox(flowtitle);
            await projectPage.dropdown_org_proj(0,0);
            await projectPage.flowinput(flowtitle);
            await projectPage.move_dup_btn_click();
            
        }).timeout(30000)

        it('duplicate sucessfully' , async()=>{
        var duplicate_scr = await projectPage.sucess();     
        expect(flowtitle).to.equal(duplicate_scr);
        }).timeout(30000)
        
        // after(async() => {
        //  projectPage.close();
        // })
    })
}

module.exports = testDeleteProject;