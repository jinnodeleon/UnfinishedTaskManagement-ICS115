const initialState = {
    tasks: []
};

const someReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            console.log('task created', action.task)
            return state;
        
        case 'CREATE_TASK_ERROR':
            console.log('create task error', action.err)
            return state;
        case 'CREATE_ACCOUNT':
            console.log('account created', action.credentials)
            return state;
        case 'CREATE_ACCOUNT_ERROR':
            console.log('account create error', action.err)
        case 'CREATE_CONTACT':
            console.log('create contact', action.contactInfo)
        case 'CREATE_CONTACT_ERROR':
            console.log('contact create error', action.err)
        default:
            return state;
    }
}

export default someReducer;