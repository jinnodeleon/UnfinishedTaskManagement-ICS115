import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk';
import firebase from '../config/firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { getFirebase,} from 'react-redux-firebase';

const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebase),
    )
)
export default store;