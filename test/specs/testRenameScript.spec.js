const ProjectPage = require('../pages/Project/projects');
const {endpoints , stepIndex} = require('../enums');
const { expect } = require('chai');
const getUniqueName=require('../../utilities/getDate');
const uniqueValue = getUniqueName('new');





async function testRenameScript(){
  let projectPage;
  before(() => {
    projectPage = new ProjectPage();
  })
    describe('Rename Test script', function () {
        it('Case:01 rename', async function () {
          await projectPage.open(endpoints.HOME);
          await projectPage.loginUser();
          await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
          await projectPage.clickOnProjectName();
          await projectPage.waitForScriptSlider();
          await projectPage.clickOnActionButtonMenuOfScript();
          await projectPage.renameScript(uniqueValue);
       
        }).timeout(30000);
        it("Empty project name is not empty after renaming",async function(){
          await projectPage.clickOnActionButtonMenuOfScript();
          await projectPage.renameScript("");
          await projectPage.refreshPage();
          const array=await projectPage.getAllScriptText();
          expect(array).not.to.include("");
      }).timeout(70000);

      it("project is not renamed with spaces",async function(){
        await projectPage.clickOnActionButtonMenuOfScript();
        await projectPage.renameScript("     ");
          const alertBox=await projectPage.errorBox();
          expect(alertBox).to.equal('error\nScript name too short');
      }).timeout(70000);
        after(async() => {
          projectPage.close();
         })
        
      });
}
module.exports = testRenameScript;