const Projectss = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect}=require('chai');
const {assert}=require('mocha');
const getUniqueName=require('../../utilities/getDate')
const uniqueValue = getUniqueName('new');



async function testRenameProject(){
    
    describe("Create rename project test cases",async function(){
        let projectsPage;
    before(() => {
        projectsPage = new Projectss();
    })
        it("Project renamed successfully !",async ()=>{
            await projectsPage.open(endpoints.HOME);
            await projectsPage.loginUser();
            await projectsPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectsPage.renameProject(uniqueValue);
            const array=await projectsPage.getAllProjectsText();
            expect(array).to.include(uniqueValue)
        }).timeout(70000);
        

        it("Empty project name is not empty after renaming",async function(){
            await projectsPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectsPage.renameProject("");
            await projectsPage.refreshPage();
            await projectsPage.waitForEndpoint(endpoints.PROJECT , 700000);
            const array=await projectsPage.getAllProjectsText();
            expect(array).not.to.include("");
        }).timeout(70000);

        it("project is not renamed with spaces",async function(){
            await projectsPage.waitForEndpoint(endpoints.PROJECT , 60000);
            await projectsPage.renameProject("          ");
            const alertBox=await projectsPage.errorBox();
            expect(alertBox).to.equal('error\nProject name too short!');
            await projectsPage.refreshPage();
            await projectsPage.waitForEndpoint(endpoints.PROJECT , 700000);
        }).timeout(70000);
        after(async() => {
            projectsPage.close();
           })
})
}

module.exports=testRenameProject;