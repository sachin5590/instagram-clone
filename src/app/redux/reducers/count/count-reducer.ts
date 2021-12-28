import { Reducers } from '../reducers';

class CountReducer extends Reducers {

	public getReducers() {
		return { count: this.reducers	};
	}

	private reducers = (state: number = 0, action: any) => {
		switch (action.type) {
			case 'INCREMENT': return action.payload + 1;
			case 'DECREMENT': return action.payload - 1;
			default: return state;
		}
	}

}
export default new CountReducer();
