import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';

import countSagas from './sagas/count/count-sagas';

import countReducer from './reducers/count/count-reducer';

class Store {
	private store: any;

	constructor() {
		const sagaMiddleware = createSagaMiddleware({
			context: { countSagas }
		});
		// composeEnhancer not added
		this.store = createStore(this.getCombinedReducers(), applyMiddleware(sagaMiddleware));
	}
	private * sagas () {
		yield spawn(countSagas.sagas)
	}

	private getCombinedReducers() {
		return combineReducers({
			...countReducer.getReducers()
		});
	}

	public getStore () {
		return this.store;
	}

}

export default new Store();
