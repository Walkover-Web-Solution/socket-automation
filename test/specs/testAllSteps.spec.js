const Projects = require('../pages/Project/projects');
const {endpoints} = require('../enums');
const {expect}=require('chai');

// const testData = JSON.parse(process.env.USER_DETAILS_LOGIN);

async function testCreateOrg(){
    let projectsPage ;

    describe("Organisation test cases",async function(){
        
        before(() => {
            projectsPage = new Projects();
        })

        it('Create org then it must be created',async ()=>{
            await projectsPage.open(endpoints.HOME);
            await projectsPage.loginUser();
            await projectsPage.waitForEndpoint(endpoints.PROJECT , 60000);
            // await projectsPage.waitForProjecPageToLoad();
            await projectsPage.openListOfOrgs();
            await projectsPage.createNewOrg();
             
        }).timeout(50000);


      
})}

module.exports = testCreateOrg;  