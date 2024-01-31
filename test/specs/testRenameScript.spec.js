const ProjectPage = require('../pages/Project/projects');
const {endpoints , stepIndex} = require('../enums');
const { expect } = require('chai');
const getUniqueName=require('../../utilities/getDate');
const uniqueValue = getUniqueName('new');



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
          await projectPage.renameScript(uniqueValue);
       
        }).timeout(30000);
        after(async() => {
          projectPage.close();
         })
        
      });
}
module.exports = testRenameScript;