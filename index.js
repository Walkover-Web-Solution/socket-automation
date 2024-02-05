const dotenv = require('dotenv');
// const { contains } = require('jquery');

dotenv.config();
// const testCreateOrg = require('./test/specs/testCreateOrg.spec');
// const testCreateProject = require('./test/specs/testCreateProject.spec');
// const testCreateScript = require('./test/specs/testCreateScript.spec');
//  const testPauseScript = require('./test/specs/testPauseScript.spec');
// const testRenameScript = require('./test/specs/testRenameScript.spec');
// const testDeleteScript = require('./test/specs/testDeleteScript.spec');
// const testPauseProject = require('./test/specs/testPauseProject.spec');
// const testDeleteProject = require('./test/specs/testDeleteProject.spec');
// const testInvocation = require('./test/specs/testInvocation_prod.spec');
// const testDragAndDrop = require('./test/specs/testDragAndDrop.spec');
// // const testAddSteps = require('./test/specs/testAddSteps.spec');
// // const testAskAI = require('./test/specs/testAskAI.spec');
// // const testMoveProject=require('./test/specs/testMoveProject.spec')
// const testpluginSlack = require('./test/specs/testpluginSlack.spec')
// const testdiscardflow = require('./test/specs/testdiscardflow.spec')


// // // testAskAI();
// // // const testLogin = require('./test/specs/testLogin.spec');
// const testRenameProject= require('./test/specs/testRenameProject.spec');
// const testVariableStep = require('./test/specs/testCreateVariable.spec');
// // // const testPlugin = require('./test/specs/testPluginOAuthAuth.spec');
// const {testGetStep} = require('./test/specs/testApiStep.spec');
// const testFunction = require('./test/specs/testFunctionStep.spec');
// const testIfBlockStep = require('./test/specs/testIfBlockStep.spec')
// // const testInvocation_dev = require('./test/specs/testInvocation_dev.spec');
// const webhookResponse = require('./test/specs/testWebhookResponse.spec');
// const Comment = require('./test/specs/testCommentStep.spec');
// const deleteStep =require('./test/specs/testDeleteStep.spec')
// // const testRenameScript=require('./test/specs/testRenameScript.spec')
// const moveScript=require('./test/specs/testMoveScript.spec');
// const duplicateScript=require('./test/specs/testDuplicateScript.spec')
// const testSheetPlugin = require('./test/specs/testSheetPlugin.spec');
// const testLiveFlow = require('./test/specs/testLiveFlow.spec');
<<<<<<< HEAD
const ifflowwork = require('./test/specs/ifflowwork.spec')
=======
const textflow = require('./test/specs/testapifunctiondryrun.spec')
>>>>>>> 24c2ca64a916d1ca101266b6009f9e266b2d5cd9



async function test(){
//     await testCreateOrg();
    // await testCreateProject();
//     await testCreateScript();
//     await testDeleteScript();
//    await testVariableStep();
    // await testGetStep();
    // await testFunction();
//     await testDragAndDrop();
//     await testInvocation();
//     await webhookResponse();
    // await testIfBlockStep();
//      await testPauseScript();
//     await testPauseProject();
//     await Comment();
//     await testDeleteProject();
//     await testRenameProject();
//     await deleteStep();
//     // await testMoveProject();
//     await testRenameScript();
//     await moveScript();
//     await duplicateScript();
    // await testSheetPlugin();
    // await testLiveFlow();
    // await testpluginSlack(); 
    // await testdiscardflow();
<<<<<<< HEAD
    await ifflowwork();
=======
    await textflow()
>>>>>>> 24c2ca64a916d1ca101266b6009f9e266b2d5cd9
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