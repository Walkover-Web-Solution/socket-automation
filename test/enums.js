const endpoints = {
    HOME : '/',
    PROJECT : '/projects',
    DEVELOPERSHUB : '/developer',
    WORKFLOWS : '/workflows',
    PUBLISHED : '/published',
    EDIT : '/draft',
    LOGS : '/logs',
    PLUGIN : '/plugin',
    PLUGINAUTH : '/auth',
    ACTION : '/action',
    ACTIONOFPRO :'/actionsOfPro',
    EMBED : '/embedProjects',
    DEV_SLACK_PLUG : '/projects/orgSZWRqfwCw/projxY8B4axH/workflows/scriEz6Mbp1J/draft' 
}

const stepIndex = {
    API : 0,
    IF : 1,
    VARIABLE : 2,
    COMMENT : 3,
    FUNCTION : 4
}
const stepIndexIf = {
    API : 0,
    VARIABLE : 1,
    COMMENT : 2,
    FUNCTION : 3
}

const apiIndex = {
    GET : 0,
    POST : 1, 
    PUT : 2,
    DELETE : 3,
    PATCH : 4
}

const actions = {
    PAUSE : 0,
    RENAME : 1,
    DUPLICATE : 2,
    MOVE : 3,
    DELETE  : 4
}

const actionsOfPro = {
    
    RENAME : 0,
    MOVE : 1,
    DELETE  : 2,
    PAUSE : 3
}

module.exports = {endpoints , stepIndex , stepIndexIf , apiIndex , actions, actionsOfPro};