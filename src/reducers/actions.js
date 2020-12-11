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

export const createAccount = (credentials) => {
    return (dispatch) => {
        let err;
        const fb = firebase.firestore();
        
        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(
            fb.collection('users').add({
                ...credentials,
                contacts: ''
            })    
        ).then(() => {
            dispatch({ type: 'CREATE_ACCOUNT', credentials: credentials});
        }).catch(() => {
            dispatch({ type: 'CREATE_ACCOUNT_ERROR', err});
        })
    }
}

export const createContact = (contactInfo) => {
    console.log(contactInfo, 'redux')
    return (dispatch) => {
        let err;
        const fb = firebase.firestore();

        fb.collection('users').doc(contactInfo.userDoc)
        .update({
            contacts: contactInfo.contactUser
        })
        .then(() => {
            dispatch({ type: 'CREATE_CONTACT', contactInfo: contactInfo});
        }).catch(() => {
            dispatch({ type: 'CREATE_CONTACT_INFO', err });
        })
    }
}