const dotenv = require('dotenv');

dotenv.config();
<<<<<<< HEAD
// const testCreateOrg = require('./test/specs/testCreateOrg.spec');
=======
const testCreateOrg = require('./test/specs/testCreateOrg.spec');
>>>>>>> 3ea8e74cf92c33bbee0d2319eddeaa03f3a63a9f
// const testCreateProject = require('./test/specs/testCreateProject.spec');
// const testCreateScript = require('./test/specs/testCreateScript.spec');
// const testPauseScript = require('./test/specs/testPauseScript.spec');
// const testDeleteScript = require('./test/specs/testDeleteScript.spec');
// const testPauseProject = require('./test/specs/testPauseProject.spec');
// const testDeleteProject = require('./test/specs/testDeleteProject.spec');
// const testInvocation = require('./test/specs/testInvocation_prod.spec');
// const testDragAndDrop = require('./test/specs/testDragAndDrop.spec');
// const testAddSteps = require('./test/specs/testAddSteps.spec');
// const testAskAI = require('./test/specs/testAskAI.spec');


// testAskAI();
// const testLogin = require('./test/specs/testLogin.spec');
// const testRenameProject= require('./test/specs/testIfBlockStep.spec');
// const testVariableStep = require('./test/specs/testCreateVariable.spec');
// const testPlugin = require('./test/specs/testPluginOAuthAuth.spec');
// const {testGetStep} = require('./test/specs/testApiStep.spec');
// const testFunction = require('./test/specs/testFunctionStep.spec');
const testIfBlockStep = require('./test/specs/testIfBlockStep.spec')
// const testInvocation_dev = require('./test/specs/testInvocation_dev.spec');
// const webhookResponse = require('./test/specs/testWebhookResponse.spec');
// const Comment = require('./test/specs/testCommentStep.spec');



async function test(){
<<<<<<< HEAD
    // await testCreateOrg();
=======
    await testCreateOrg();
>>>>>>> 3ea8e74cf92c33bbee0d2319eddeaa03f3a63a9f
    // await testCreateProject();
    // await testCreateScript();
    // await testDeleteScript();
    // await testVariableStep();
    // await testGetStep();
    // await testFunction();
    // await testDragAndDrop();
    // await testInvocation_dev();
    // await webhookResponse();
    await testIfBlockStep();
    // await testPauseScript();
    // await testPauseProject();
    // await Comment();
    // await testDeleteProject();
}
test();