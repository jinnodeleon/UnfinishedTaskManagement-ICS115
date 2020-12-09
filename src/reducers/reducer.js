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
        default:
            return state;
    }
}

export default someReducer;