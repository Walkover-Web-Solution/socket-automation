const dotenv = require('dotenv');
// const { testPatchStep, testDeleteStep, testPostStep } = require('./test/specs/testApiStep.spec');
// const { contains } = require('jquery');

dotenv.config();
// const testCreateOrg = require('./test/specs/testCreateOrg.spec');
// const testCreateProject = require('./test/specs/testCreateProject.spec');
// const testCreateScript = require('./test/specs/testCreateScript.spec');
// const testPauseScript = require('./test/specs/testPauseScript.spec');
// const testRenameScript = require('./test/specs/testRenameScript.spec');
// const testPauseProject = require('./test/specs/testPauseProject.spec');
// const testInvocation = require('./test/specs/testInvocation_prod.spec');
// const testDragAndDrop = require('./test/specs/testDragAndDrop.spec');
// const testAddSteps = require('./test/specs/testAddSteps.spec');
// const testAskAI = require('./test/specs/testAskAI.spec');
// const testMoveProject=require('./test/specs/testMoveProject.spec');
const testpluginSlack = require('./test/specs/testpluginSlack.spec');
// const testdiscardflow = require('./test/specs/testdiscardflow.spec');
// const testLogin = require('./test/specs/testLogin.spec');
// const testRenameProject= require('./test/specs/testRenameProject.spec');
// const testVariabletep = require('./test/specs/testCreateVariable.spec');
// const testPlugin = require('./test/specs/testPluginOAuthAuth.spec');
// const {testGetStep} = require('./test/specs/testApiStep.spec');
// const {testPostStep} = require('./test/specs/testApiStep.spec');
// const {testPutStep} = require('./test/specs/testApiStep.spec');
// const {testDeleteStep} = require('./test/specs/testApiStep.spec');
// const {testPatchStep} = require('./test/specs/testApiStep.spec');
// const testFunction = require('./test/specs/testFunctionStep.spec');
// const testIfBlockStep = require('./test/specs/testIfBlockStep.spec')
// const testInvocation_dev = require('./test/specs/testInvocation_dev.spec');
// const webhookResponse = require('./test/specs/testWebhookResponse.spec');
// const Comment = require('./test/specs/testCommentStep.spec');
// const deleteStep =require('./test/specs/testDeleteStep.spec');
// const moveScript=require('./test/specs/testMoveScript.spec');
// const duplicateScript=require('./test/specs/testDuplicateScript.spec');
// const testDeleteScript = require('./test/specs/testDeleteScript.spec');
// const testDeleteProject=require('./test/specs/testDeleteProject.spec')
// const testSheetPlugin = require('./test/specs/testSheetPlugin.spec');
// const testLiveFlow = require('./test/specs/testLiveFlow.spec');
// const testLogDryRun = require('./test/specs/testLogDryRun.spec');
// const ifflowwork = require('./test/specs/ifflowwork.spec');


async function test(){
    // await testCreateOrg ();
    // await testCreateProject ();
    // await testCreateScript ();
    // await testPauseScript ();
    // await testRenameScript(); 
    // await testPauseProject ();
    // await testInvocation ();
    // await testDragAndDrop ();
    // await testAddSteps ();
    // await testAskAI ();
    // // await testMoveProject();
    // await testpluginSlack();
    // await testMoveProject();
    await testpluginSlack();
    // await testdiscardflow ();
    // await testLogin ();
    // await testRenameProject();
    // await testVariabletep();
    // await testPlugin ();
    // await {testGetStep} ();
    // await {testPostStep}();
    // await {testPutStep}();
    // await {testDeleteStep} ();
    // await {testPatchStep} ();
    // await testFunction ();
    // await testIfBlockStep ();
    // // await testInvocation_prod ();
    // await testInvocation_prod ();
    // await webhookResponse ();
    // await Comment();
    // await deleteStep ();
    // await moveScript();
    // await duplicateScript();
    // await testDeleteScript ();
    // await testDeleteProject();
    // await testSheetPlugin ();
    // await testLiveFlow ();
    // await testLogDryRun();
    // await ifflowwork ();
    await testLogCreation();


}

// test();

async function runTests() {
    try {
        await test();
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

runTests();