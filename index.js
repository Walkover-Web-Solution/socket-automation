const dotenv = require('dotenv');

dotenv.config();
// const testCreateOrg = require('./test/specs/testCreateOrg.spec');
// const testInvocation = require('./test/specs/testInvocation_prod.spec');
// const testDragAndDrop = require('./test/specs/testDragAndDrop.spec');
// const testCreateScript = require('./test/specs/testCreateScript.spec');
// const testAddSteps = require('./test/specs/testAddSteps.spec');
// const testLogin = require('./test/specs/testLogin.spec');
const {testPostStep} = require('./test/specs/testApiStep.spec');
// const testVariableStep = require('./test/specs/testCreateVariable.spec');
// const testPauseProject = require('./test/specs/testPauseProject.spec')


// testInvocation();
testPostStep();
