import someReducer from './reducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers(
    {
        reducer: someReducer,
        firebase: firebaseReducer,
        firestore: firestoreReducer
    }
)

export default rootReducer