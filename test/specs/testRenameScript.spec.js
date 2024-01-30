const ProjectPage = require('../pages/Project/projects');
const {endpoints , stepIndex} = require('../enums');
const { expect } = require('chai');
const getUniqueName=require('../../utilities/getDate');



const projectPage= new ProjectPage();

async function testRenameScript(){
    describe('Rename Test script', function () {
        it('Case:01 rename', async function () {
          await projectPage.open(endpoints.HOME);
          await projectPage.loginUser();
          await projectPage.waitForEndpoint(endpoints.PROJECT , 60000);
          await projectPage.clickOnProjectName();
          await projectPage.waitForScriptSlider();
          await projectPage.clickOnActionButtonMenuOfScript();
          await projectPage.renameScript(getUniqueName);
       
        }).timeout(30000);
      });
}
module.exports = testRenameScript;