import firebase from '../config/firebase';

export const createTask = (task) => {
    return (dispatch) => {
            let err;
            const fb = firebase.firestore();
            fb.collection('tasks').add({
                ...task,
                authorFirstName: 'TestFirst',
                authorLastName: 'TestLast',
                createdAt: new Date()
            }).then(() => {
                dispatch({ type: 'CREATE_TASK', task: task});
            }).catch(() => {
                dispatch({ type: 'CREATE_TASK_ERROR', err });
            })
    }
}