const dotenv = require('dotenv');
// const { testPatchStep, testDeleteStep, testPostStep } = require('./test/specs/testApiStep.spec');
// const { contains } = require('jquery');

dotenv.config();
// const testCreateOrg = require('./test/specs/testCreateOrg.spec');
// const testCreateProject = require('./test/specs/testCreateProject.spec');
// const testCreateScript = require('./test/specs/testCreateScript.spec');
//  const testPauseScript = require('./test/specs/testPauseScript.spec');
// const testRenameScript = require('./test/specs/testRenameScript.spec');
// const testPauseProject = require('./test/specs/testPauseProject.spec');
// const testInvocation = require('./test/specs/testInvocation_prod.spec');
// const testDragAndDrop = require('./test/specs/testDragAndDrop.spec');
// // // // const testAddSteps = require('./test/specs/testAddSteps.spec');
// // // // const testAskAI = require('./test/specs/testAskAI.spec');
// // // // const testMoveProject=require('./test/specs/testMoveProject.spec')
// const testpluginSlack = require('./test/specs/testpluginSlack.spec')
// // // const testdiscardflow = require('./test/specs/testdiscardflow.spec')


// // // // testAskAI();
// // // // const testLogin = require('./test/specs/testLogin.spec');
// const testRenameProject= require('./test/specs/testRenameProject.spec');
// const testVariabletep = require('./test/specs/testCreateVariable.spec');
// // // // const testPlugin = require('./test/specs/testPluginOAuthAuth.spec');
// const {testGetStep} = require('./test/specs/testApiStep.spec');
// const {testPostStep} = require('./test/specs/testApiStep.spec');
// const {testPutStep} = require('./test/specs/testApiStep.spec');
// const {testDeleteStep} = require('./test/specs/testApiStep.spec');
// const {testPatchStep} = require('./test/specs/testApiStep.spec');
// const testFunction = require('./test/specs/testFunctionStep.spec');
// const testIfBlockStep = require('./test/specs/testIfBlockStep.spec')
// // // const testInvocation_dev = require('./test/specs/testInvocation_dev.spec');
<<<<<<< HEAD
=======

const webhookResponse = require('./test/specs/testWebhookResponse.spec');
// // const Comment = require('./test/specs/testCommentStep.spec');
// // const deleteStep =require('./test/specs/testDeleteStep.spec')
// // const testRenameScript=require('./test/specs/testRenameScript.spec')
// // const moveScript=require('./test/specs/testMoveScript.spec');
// // const duplicateScript=require('./test/specs/testDuplicateScript.spec')

>>>>>>> b0626482fc6cdcebfc5c9df2c6d23f29c0da6e38
// const webhookResponse = require('./test/specs/testWebhookResponse.spec');
// const Comment = require('./test/specs/testCommentStep.spec');
// const deleteStep =require('./test/specs/testDeleteStep.spec')
// const moveScript=require('./test/specs/testMoveScript.spec');
// const duplicateScript=require('./test/specs/testDuplicateScript.spec')
<<<<<<< HEAD
// const testDeleteScript = require('./test/specs/testDeleteScript.spec');
// const testDeleteProject=require('./test/specs/testDeleteProject.spec')
const testSheetPlugin = require('./test/specs/testSheetPlugin.spec');
const testLiveFlow = require('./test/specs/testLiveFlow.spec');
=======
<<<<<<< Updated upstream
const testSheetPlugin = require('./test/specs/testSheetPlugin.spec');
// const testLiveFlow = require('./test/specs/testLiveFlow.spec');
// const testLogDryRun = require('./test/specs/testLogDryRun.spec');
=======
// const testDeleteScript = require('./test/specs/testDeleteScript.spec');
// const testDeleteProject=require('./test/specs/testDeleteProject.spec')
// // const testSheetPlugin = require('./test/specs/testSheetPlugin.spec');
// // const testLiveFlow = require('./test/specs/testLiveFlow.spec');
const ifflowwork = require('./test/specs/ifflowwork.spec');
>>>>>>> b0626482fc6cdcebfc5c9df2c6d23f29c0da6e38

>>>>>>> Stashed changes


async function test(){

//     await testCreateOrg();
//     await testCreateProject();
//     await testCreateScript();
//     await testVariabletep();
//     await testGetStep();
//     await testPostStep();
//     await testPutStep();
//     await testPatchStep();
//     await testDeleteStep();
//     await testFunction();
//     await testDragAndDrop();
//     await testInvocation();
<<<<<<< HEAD
//     await webhookResponse();
//     await testIfBlockStep();
=======
    // await webhookResponse();
    // await testIfBlockStep();
>>>>>>> b0626482fc6cdcebfc5c9df2c6d23f29c0da6e38
//      await testPauseScript();
//     await testPauseProject();
//     await Comment();
//     await testRenameProject();
//     await deleteStep();
// //     // await testMoveProject();
//     await testRenameScript();
//     await moveScript();
<<<<<<< HEAD
//     await duplicateScript();
    await testSheetPlugin();
    await testLiveFlow();
    // await testpluginSlack(); 
    // await testdiscardflow();
//     await testDeleteScript();
//     await testDeleteProject();
=======
    // await duplicateScript();
<<<<<<< Updated upstream
    await testSheetPlugin();
    // await testpluginSlack(); 
    // await testdiscardflow();
    // await textflow()
    // await testLiveFlow();
    // await testLogDryRun();
=======
    // await testSheetPlugin();
    // await testLiveFlow();
    // await testpluginSlack(); 
    // await testdiscardflow();

    await ifflowwork();

    // await textflow()

//     await testCreateOrg();
//     await testCreateProject();
//     await testCreateScript();
    // await testVariabletep();
//     await testGetStep();
//     await testPostStep();
//     await testPutStep();
//     await testPatchStep();
//     await testDeleteStep();
//     await testFunction();
//     await testDragAndDrop();
//     await testInvocation();
//     await webhookResponse();
//     await testIfBlockStep();
//      await testPauseScript();
//     await testPauseProject();
//     await Comment();
//     await testRenameProject();
//     await deleteStep();
// //     // await testMoveProject();
//     await testRenameScript();
//     await moveScript();
//     await duplicateScript();
// //     // await testSheetPlugin();
// //     // await testLiveFlow();
//     await testpluginSlack(); 
// //     // await testdiscardflow();
//     await testDeleteScript();
//     await testDeleteProject();

>>>>>>> Stashed changes
>>>>>>> b0626482fc6cdcebfc5c9df2c6d23f29c0da6e38
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